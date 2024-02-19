//@ts-nocheck
let timeouts = [];
export const animateTo = async (
  marker,
  moveFrom,
  moveTo,
  t = 0.25,
  delta = 100
) => {
  return new Promise((resolve) => {
    const deltalat = (moveTo.lat() - moveFrom.lat()) / delta;
    const deltalng = (moveTo.lng() - moveFrom.lng()) / delta;
    const delay = 10 * t;
    let count = 0;

    for (let i = 0; i < delta; i++) {
      (function (ind) {
        const timeoutId = setTimeout(function () {
          timeouts.push(timeoutId);

          const lat = marker.position.lat() + deltalat;
          const lng = marker.position.lng() + deltalng;

          marker.setPosition(new window.google.maps.LatLng(lat, lng));

          count++;
          if (count === delta) {
            clearTimeouts();
            resolve({ marker, timeouts });
          }
        }, delay * ind);
      })(i);
    }
  });

  // return new Promise((resolve) => {
  //   const deltalat = (moveTo.lat() - moveFrom.lat()) / delta;
  //   const deltalng = (moveTo.lng() - moveFrom.lng()) / delta;
  //   const delay = 10 * t;
  //   let count = 0;

  //   function animate() {
  //     const lat = marker.position.lat() + deltalat;
  //     const lng = marker.position.lng() + deltalng;

  //     marker.setPosition(new window.google.maps.LatLng(lat, lng));

  //     count++;
  //     if (count < delta) {
  //       requestAnimationFrame(animate);
  //     } else {
  //       resolve(marker);
  //     }
  //   }

  //   animate();
  // });
};

export const clearTimeouts = async (): Promise<boolean> => {
  console.log("start", timeouts);

  return new Promise((resolve) => {
    timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });

    timeouts = [];
    console.log("end", timeouts);
    resolve(true);
  });
};
