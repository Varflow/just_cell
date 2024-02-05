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
      places: [
        {
          name: "Академика Вильмса",
          geometry: { location: { lat: 46.3903379, lng: 30.7297726 } },
        },
        {
          name: "Площадь Толбухина",
          geometry: { location: { lat: 46.4300144, lng: 30.7253984 } },
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
      places: [
        {
          name: "Академика Вильмса",
          geometry: { location: { lat: 46.3903379, lng: 30.7297726 } },
        },
        {
          name: "Площадь Толбухина",
          geometry: { location: { lat: 46.4300144, lng: 30.7253984 } },
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
      places: [
        {
          name: "Академика Вильмса",
          geometry: { location: { lat: 46.3903379, lng: 30.7297726 } },
        },
        {
          name: "Площадь Толбухина",
          geometry: { location: { lat: 46.4300144, lng: 30.7253984 } },
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
      places: [
        {
          name: "Академика Вильмса",
          geometry: { location: { lat: 46.3903379, lng: 30.7297726 } },
        },
        {
          name: "Площадь Толбухина",
          geometry: { location: { lat: 46.4300144, lng: 30.7253984 } },
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
