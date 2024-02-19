import { ROUTE_STORAGE_KEY } from "@/contants/storage";
import { Route } from "../models/routes";

export const getRoutes = (): Route[] => {
  return [
    {
      id: "1",
      name: "Маршрут 1",
      transport_num: 10,
      avg_speed: "140 км/г",
      avg_time: "100 ч",
      country: "Україна",
      city: "Одеса",
      cost: "1024 грн",
      places: [
        {
          name: "Вокзальная пл., Киев",
          geometry: {
            location: { lat: 50.440862380753934, lng: 30.490304116401298 },
          },
        },
        {
          name: "ул. Симона Петлюры, 11-3",
          geometry: {
            location: { lat: 50.44406748682455, lng: 30.49776006513035 },
          },
        },
        {
          name: "бульвал Тараса Шевченка",
          geometry: {
            location: { lat: 50.448426839029004, lng: 30.484352041001035 },
          },
        },
        {
          name: "Берестейский проспект",
          geometry: {
            location: { lat: 50.448426839029004, lng: 30.484352041001035 },
          },
        },
        {
          name: "просп. Победы, 14",
          geometry: {
            location: { lat: 50.449120691231954, lng: 30.479955219518953 },
          },
        },
        {
          name: "ул. Богдана Гаврилишина, Киев, 02000",
          geometry: {
            location: { lat: 50.4515320987023, lng: 30.46710425756818 },
          },
        },
        {
          name: "ул. Маршала Рыбалко, 10",
          geometry: {
            location: { lat: 50.455865180317375, lng: 30.474865602478555 },
          },
        },
        {
          name: "ул. Глубочицкая, 34-38",
          geometry: {
            location: { lat: 50.46216934860761, lng: 30.49572182656285 },
          },
        },
        {
          name: "ул. Верхний Вал",
          geometry: {
            location: { lat: 50.46521160027267, lng: 30.51130186625055 },
          },
        },
      ],
    },
    {
      id: "2",
      name: "Маршрут 2",
      transport_num: 10,
      avg_speed: "140 км/г",
      avg_time: "100 ч",
      country: "Україна",
      city: "Одеса",
      cost: "1024 грн",
      places: [
        {
          name: "Вокзальная пл., Киев",
          geometry: {
            location: { lat: 50.440862380753934, lng: 30.490304116401298 },
          },
        },
        {
          name: "ул. Симона Петлюры, 11-3",
          geometry: {
            location: { lat: 50.44406748682455, lng: 30.49776006513035 },
          },
        },
        {
          name: "бульвал Тараса Шевченка",
          geometry: {
            location: { lat: 50.448426839029004, lng: 30.484352041001035 },
          },
        },
        {
          name: "Берестейский проспект",
          geometry: {
            location: { lat: 50.448426839029004, lng: 30.484352041001035 },
          },
        },
        {
          name: "просп. Победы, 14",
          geometry: {
            location: { lat: 50.449120691231954, lng: 30.479955219518953 },
          },
        },
        {
          name: "ул. Богдана Гаврилишина, Киев, 02000",
          geometry: {
            location: { lat: 50.4515320987023, lng: 30.46710425756818 },
          },
        },
        {
          name: "ул. Маршала Рыбалко, 10",
          geometry: {
            location: { lat: 50.455865180317375, lng: 30.474865602478555 },
          },
        },
        {
          name: "ул. Глубочицкая, 34-38",
          geometry: {
            location: { lat: 50.46216934860761, lng: 30.49572182656285 },
          },
        },
        {
          name: "ул. Верхний Вал",
          geometry: {
            location: { lat: 50.46521160027267, lng: 30.51130186625055 },
          },
        },
      ],
    },
    {
      id: "3",
      name: "Маршрут 3",
      transport_num: 10,
      avg_speed: "140 км/г",
      avg_time: "100 ч",
      country: "Україна",
      city: "Одеса",
      cost: "1024 грн",
      places: [
        {
          name: "Вокзальная пл., Киев",
          geometry: {
            location: { lat: 50.440862380753934, lng: 30.490304116401298 },
          },
        },
        {
          name: "ул. Симона Петлюры, 11-3",
          geometry: {
            location: { lat: 50.44406748682455, lng: 30.49776006513035 },
          },
        },
        {
          name: "бульвал Тараса Шевченка",
          geometry: {
            location: { lat: 50.448426839029004, lng: 30.484352041001035 },
          },
        },
        {
          name: "Берестейский проспект",
          geometry: {
            location: { lat: 50.448426839029004, lng: 30.484352041001035 },
          },
        },
        {
          name: "просп. Победы, 14",
          geometry: {
            location: { lat: 50.449120691231954, lng: 30.479955219518953 },
          },
        },
        {
          name: "ул. Богдана Гаврилишина, Киев, 02000",
          geometry: {
            location: { lat: 50.4515320987023, lng: 30.46710425756818 },
          },
        },
        {
          name: "ул. Маршала Рыбалко, 10",
          geometry: {
            location: { lat: 50.455865180317375, lng: 30.474865602478555 },
          },
        },
        {
          name: "ул. Глубочицкая, 34-38",
          geometry: {
            location: { lat: 50.46216934860761, lng: 30.49572182656285 },
          },
        },
        {
          name: "ул. Верхний Вал",
          geometry: {
            location: { lat: 50.46521160027267, lng: 30.51130186625055 },
          },
        },
      ],
    },
    {
      id: "4",
      name: "Маршрут 4",
      transport_num: 10,
      avg_speed: "140 км/г",
      avg_time: "100 ч",
      country: "Україна",
      city: "Одеса",
      cost: "1024 грн",
      places: [
        {
          name: "Вокзальная пл., Киев",
          geometry: {
            location: { lat: 50.440862380753934, lng: 30.490304116401298 },
          },
        },
        {
          name: "ул. Симона Петлюры, 11-3",
          geometry: {
            location: { lat: 50.44406748682455, lng: 30.49776006513035 },
          },
        },
        {
          name: "бульвал Тараса Шевченка",
          geometry: {
            location: { lat: 50.448426839029004, lng: 30.484352041001035 },
          },
        },
        {
          name: "Берестейский проспект",
          geometry: {
            location: { lat: 50.448426839029004, lng: 30.484352041001035 },
          },
        },
        {
          name: "просп. Победы, 14",
          geometry: {
            location: { lat: 50.449120691231954, lng: 30.479955219518953 },
          },
        },
        {
          name: "ул. Богдана Гаврилишина, Киев, 02000",
          geometry: {
            location: { lat: 50.4515320987023, lng: 30.46710425756818 },
          },
        },
        {
          name: "ул. Маршала Рыбалко, 10",
          geometry: {
            location: { lat: 50.455865180317375, lng: 30.474865602478555 },
          },
        },
        {
          name: "ул. Глубочицкая, 34-38",
          geometry: {
            location: { lat: 50.46216934860761, lng: 30.49572182656285 },
          },
        },
        {
          name: "ул. Верхний Вал",
          geometry: {
            location: { lat: 50.46521160027267, lng: 30.51130186625055 },
          },
        },
      ],
    },
  ];
};

export const createRoute = (payload: any) => {
  console.log(payload);
};

export const getRoute = () => {
  return JSON.parse(window.localStorage.getItem(ROUTE_STORAGE_KEY) || "{}");
};
