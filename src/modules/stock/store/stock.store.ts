import { defineStore } from "pinia";
import { Ingredient } from "../model/ingredient";
import { getBranchStock } from "../api/stock.api";

export type StockState = {
  isLoading: boolean;
  ingredients: Ingredient[];
};

export const useStockStore = defineStore("stock", {
  state: (): StockState => ({
    isLoading: false,
    ingredients: [],
  }),
  actions: {
    async getBranchStock(branchId: number) {
      this.isLoading = true;
      this.ingredients = getBranchStock(branchId);
      this.isLoading = false;
    },
  },
});
