import { Ingredient, IngredientTemplate } from "../model/ingredient";

export const getBranchStock = (branchId: number): Ingredient[] => {
  return [
    {
      id: 1,
      name: "Вода",
      quantity: "10л",
      updatedAt: "2021-07-01T00:00:00",
      photo: require("@/assets/ingredients/water.png"),
    },
    {
      id: 2,
      name: "Кофе",
      quantity: "10кг",
      updatedAt: "2021-07-01T00:00:00",
      photo: require("@/assets/ingredients/coffe.jpg"),
    },
    {
      id: 3,
      name: "Стаканчики",
      quantity: "100шт",
      updatedAt: "2021-07-01T00:00:00",
      photo: require("@/assets/ingredients/glass.jpg"),
    },
  ];
};

export const getIngredientTemplates = (): IngredientTemplate[] => {
  return [
    {
      id: 1,
      name: "Американо",
      ingredients: [
        {
          name: "Вода",
          quantity: "10л",
          photo: require("@/assets/ingredients/water.png"),
        },
        {
          name: "Кофе",
          quantity: "10кг",
          photo: require("@/assets/ingredients/coffe.jpg"),
        },
        {
          name: "Стаканчики",
          quantity: "100шт",
          photo: require("@/assets/ingredients/glass.jpg"),
        },
      ],
    },
    {
      id: 2,
      name: "Капучино",
      ingredients: [
        {
          name: "Вода",
          quantity: "5л",
          photo: require("@/assets/ingredients/water.png"),
        },
        {
          name: "Кофе",
          quantity: "2кг",
          photo: require("@/assets/ingredients/coffe.jpg"),
        },
        {
          name: "Стаканчики",
          quantity: "100шт",
          photo: require("@/assets/ingredients/glass.jpg"),
        },
      ],
    },
  ];
};
