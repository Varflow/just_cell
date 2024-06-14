import { defineStore } from "pinia";
import { Product } from "../model/product";
import { getProducts } from "../api/products.api";

export const useProductsStore = defineStore("products", {
  state: () => ({ products: [] as Product[], isLoading: false }),

  actions: {
    getProducts() {
      this.isLoading = true;
      this.products = getProducts();
      this.isLoading = false;
    },
    getProductsByBranch(branchId: number) {
      this.isLoading = true;
      this.products = getProducts();
      this.isLoading = false;
    },
  },
});
