import { createApp } from "vue";
import toasts from "vue-toastification";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { store } from "./store";

import "vue-toastification/dist/index.css";
import "@/styles/index.scss";

const toastOptions = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  filterBeforeCreate: (toast: any, toasts: any[]) => {
    const existingToast = toasts.find((t) =>
      t.content.match(`^${toast.content}?`)
    );
    if (existingToast) {
      return false;
    }
    return toast;
  },
};

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(store);
app.use(toasts, toastOptions);
app.use(pinia);

app.directive("click-outside", {
  mounted: function (el, binding) {
    el.onOutsideClick = (event: Event) => {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener("click", el.onOutsideClick);
  },
  beforeUnmount: function (el) {
    document.body.removeEventListener("click", el.onOutsideClick);
  },
});

app.mount("#app");
