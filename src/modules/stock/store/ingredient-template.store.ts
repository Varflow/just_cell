import { defineStore } from "pinia";
import { IngredientTemplate } from "../model/ingredient";
import { getIngredientTemplates } from "../api/stock.api";

export type IngredientTemplateState = {
  isLoading: boolean;
  ingredientTemplate: IngredientTemplate[];
  currentIngredientTemplate: IngredientTemplate | null;
};

export const useIngredientTemplateStore = defineStore("ingredient-template", {
  state: (): IngredientTemplateState => ({
    isLoading: false,
    ingredientTemplate: [],
    currentIngredientTemplate: null,
  }),

  actions: {
    async fetchIngredientTemplates() {
      this.isLoading = true;
      this.ingredientTemplate = getIngredientTemplates();
      this.isLoading = false;
    },
    setCurrentIngredientTemplate(template: IngredientTemplate) {
      this.currentIngredientTemplate = template;
    },
    addFieldsToTemplate(fields: any) {
      if (this.currentIngredientTemplate) {
        this.currentIngredientTemplate = {
          ...this.currentIngredientTemplate,
          fields: fields,
        };
      }
    },
  },

  getters: {
    getIngredientTemplateById: (state) => (id: number) => {
      return state.ingredientTemplate.find((it) => it.id === id);
    },
  },
});
