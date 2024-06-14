export type Ingredient = {
  id: number;
  name: string;
  quantity: string;
  photo: string;
  updatedAt: string;
};

export type IngredientTemplateFields = {
  name: string;
  quantity: string;
  photo: string;
};

export type IngredientTemplate = {
  id: number;
  name: string;
  ingredients: IngredientTemplateFields[];
};
