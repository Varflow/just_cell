import { animateTo, clearTimeouts } from "./animate-marker";

let directionsService: google.maps.DirectionsService;
let directionsRenderer: google.maps.DirectionsRenderer;
let marker: google.maps.Marker;
let map: google.maps.Map;

const createMarker = async (map: google.maps.Map) => {
  const { Marker } = (await google.maps.importLibrary(
    "marker"
  )) as google.maps.MarkerLibrary;

  marker = new Marker({
    icon: require("@/assets/icons/bus-icon.png"),
    optimized: false,
    zIndex: 99,
    map,
  });
};

export const initMap = async (
  mapRef: HTMLDivElement,
  inputRef: HTMLInputElement,
  { onPlaceChanged, places }: any
) => {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  const center = await getDefaultCenter();

  map = new Map(mapRef, {
    center,
    zoom: 5,
  });

  initPlacesAutocomplete(inputRef, center, { onPlaceChanged });

  directionsRenderer.setMap(map);
  createMarker(map);

  return map;
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

export const renderRoute = ({ places = [], animatedMarker }: any) => {
  if (!directionsService || !directionsRenderer) {
    return;
  }

  if (!places || !places.length) {
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

  directionsService.route(request, function (result, status) {
    if (status == "OK") {
      const steps = result?.routes[0].overview_path;

      directionsRenderer.setDirections(result);

      if (animatedMarker) {
        animateMarker(steps);
      }
    }
  });
};

export const toggleMarkerVisibily = (visible: boolean) => {
  if (visible) {
    marker.setMap(map);
  } else {
    marker.setMap(null);
  }
};

export const animateMarker = async (legs?: any[]) => {
  if (!legs) {
    return;
  }

  marker.setPosition(legs[0]);

  const cleared = await clearTimeouts();

  if (cleared) {
    for (let index = 0; index < legs.length; index++) {
      const leg = legs[index];
      await animateTo(marker, marker.getPosition(), leg);
    }
  }
};
