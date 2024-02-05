let directionsService: google.maps.DirectionsService;
let directionsRenderer: google.maps.DirectionsRenderer;

export const initMap = async (
  mapRef: HTMLDivElement,
  inputRef: HTMLInputElement,
  { onPlaceChanged }: any
): Promise<void> => {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  console.log("directionsService", directionsService);

  const center = await getDefaultCenter();

  const map = new Map(mapRef, {
    center,
    zoom: 5,
  });

  initPlacesAutocomplete(inputRef, center, map, { onPlaceChanged });
  directionsRenderer.setMap(map);
};

export const getDefaultCenter = async () => {
  const { Geocoder } = (await google.maps.importLibrary(
    "geocoding"
  )) as google.maps.GeocodingLibrary;

  const geocoder = new Geocoder();

  const { results } = await geocoder.geocode({ address: "Ukraine" });

  if (!results.length) {
    return { lat: -34.397, lng: 150.644 };
  }

  const result = results[0];
  return result.geometry.location;
};

export const initPlacesAutocomplete = async (
  ref: HTMLInputElement,
  center: any,
  map: any,
  { onPlaceChanged }: any
) => {
  const { Autocomplete } = (await google.maps.importLibrary(
    "places"
  )) as google.maps.PlacesLibrary;

  const defaultBounds = {
    north: center.lat + 0.1,
    south: center.lat - 0.1,
    east: center.lng + 0.1,
    west: center.lng - 0.1,
  };

  const options = {
    bounds: defaultBounds,
    strictBounds: true,
  };

  const autocomplete = new Autocomplete(ref, options);

  autocomplete.setFields(["place_id", "geometry", "name"]);
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    onPlaceChanged(place);
  });
};

export const renderRoute = (places: any) => {
  console.log(directionsService);
  if (!directionsService || !directionsRenderer) {
    return;
  }

  if (!places || !places.length) {
    return;
  }

  if (places.length < 2) {
    return;
  }

  const start = places[0];
  const end = places[places.length - 1];
  const waypoints =
    places.length > 2
      ? places.slice(1, places.length - 1).map((place: any) => ({
          location: place.geometry.location,
          stopover: true,
        }))
      : [];

  const request = {
    origin: start.geometry.location,
    destination: end.geometry.location,
    waypoints,
    travelMode: "DRIVING",
  } as google.maps.DirectionsRequest;

  console.log(places);
  directionsService.route(request, function (result, status) {
    console.log(status);
    if (status == "OK") {
      directionsRenderer.setDirections(result);
    }
  });
};
