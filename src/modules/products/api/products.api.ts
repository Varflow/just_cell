import { Product } from "../model/product";

export const getProducts = (): Product[] => {
  return [
    {
      point: "Точка Цукерка",
      name: "Кава “Еспресо”",
      price: 60,
      tax: null,
      taxIncluded: true,
      isFiscal: true,
      photo: require("@/assets/product-image.png"),
      code: "123",
      hasBonus: true,
    },
    {
      point: "Точка Цукерка",
      name: "Кава “Еспресо”",
      price: 60,
      tax: null,
      taxIncluded: true,
      isFiscal: true,
      photo: require("@/assets/product-image.png"),
      code: "123",
      hasBonus: true,
    },
  ];
};
