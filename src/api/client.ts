import axios from "axios";
import { ApiRoutes } from "./routes";

import { useToast } from "vue-toastification";
import router from "@/app/router";

const toast = useToast();

export const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.response.use(
  function (response) {
    const { code, msg } = response.data;
    const isLogout = response.config.url === ApiRoutes.LOGOUT;
    const isRoot = router.currentRoute.value.path === "/";

    if (code === undefined && !isLogout) {
      toast.error("Помилка відповіді сервера");
    }

    if (code === -3 && !isRoot) {
      toast.error(msg);
    }

    if (code !== 0 && code !== -3 && msg) {
      toast.error(msg);
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
