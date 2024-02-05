import { Driver } from "../models/driver";

export const getDrivers = (): Driver[] => {
  return [
    {
      name: "Тестов Тест Тестович",
      tabulation_number: "12312312312",
      route: "Маршрут 1",
      transport_number: "1231231232",
      session_open_time: "12:20",
      phone: "+3809812312312",
      call_message: "Telegram",
      money: "1000 грн",
      add_data: "",
      avatar: require("@/assets/avatar.png"),
    },
    {
      name: "Николай Иваненко",
      tabulation_number: "12312312312",
      route: "Маршрут 1",
      transport_number: "1231231232",
      session_open_time: "12:20",
      phone: "+3809812312312",
      call_message: "Telegram",
      money: "1000 грн",
      add_data: "",
      avatar: require("@/assets/avatar.png"),
    },
    {
      name: "Дмитрий Капиш",
      tabulation_number: "12312312312",
      route: "Маршрут 1",
      transport_number: "1231231232",
      session_open_time: "12:20",
      phone: "+3809812312312",
      call_message: "Telegram",
      money: "1000 грн",
      add_data: "",
      avatar: require("@/assets/avatar.png"),
    },
    {
      name: "Василий Алексеев",
      tabulation_number: "12312312312",
      route: "Маршрут 1",
      transport_number: "1231231232",
      session_open_time: "12:20",
      phone: "+3809812312312",
      call_message: "Telegram",
      money: "1000 грн",
      add_data: "",
      avatar: require("@/assets/avatar.png"),
    },
    {
      name: "Тестов Тест Тестович",
      tabulation_number: "12312312312",
      route: "Маршрут 1",
      transport_number: "1231231232",
      session_open_time: "12:20",
      phone: "+3809812312312",
      call_message: "Telegram",
      money: "1000 грн",
      add_data: "",
      avatar: require("@/assets/avatar.png"),
    },
  ];
};

export const createDriver = (payload: any) => {
  console.log(payload);
};

export const changeDriverTransport = (payload: any) => {
  console.log(payload);
};

export const changerDriverRoute = (payload: any) => {
  console.log(payload);
};
