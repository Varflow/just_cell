import { Branch } from "../model/branch";

export const getBranches = (): Branch[] => {
  return [
    { id: 1, name: "Точка 1" },
    { id: 2, name: "Точка 2" },
    { id: 3, name: "Точка 3" },
    { id: 4, name: "Точка 4" },
    { id: 5, name: "Точка 5" },
  ];
};
