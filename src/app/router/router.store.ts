import { defineStore } from "pinia";

export const useRouterStore = defineStore("router", {
  state: () => ({
    loading: false,
  }),
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading;
    },
  },
});
