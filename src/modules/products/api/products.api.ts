import { Product } from "../model/product";

export const getProducts = (): Product[] => {
  return [
    {
      id: 1,
      point: "Точка Цукерка",
      name: "Кава “Еспресо”",
      price: 60,
      tax: 25,
      taxIncluded: true,
      isFiscal: true,
      photo: require("@/assets/product-image.png"),
      code: "123",
      hasBonus: true,
    },
    {
      id: 1,
      point: "Точка Цукерка",
      name: "Кава “Еспресо”",
      price: 60,
      tax: 25,
      taxIncluded: true,
      isFiscal: true,
      photo: require("@/assets/product-image.png"),
      code: "123",
      hasBonus: true,
    },
  ];
};
