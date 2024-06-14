import { createColumnHelper } from "@tanstack/vue-table";
import { h } from "vue";

import { Ingredient } from "../model/ingredient";
import IngredientActions from "../ui/IngredientActions.vue";
import IngredientsQuantityField from "../ui/IngredientsQuantityField.vue";

export const createIngredientsTableColumns = () => {
  const columnHelper = createColumnHelper<Ingredient>();

  return [
    columnHelper.accessor("photo", {
      header: "Фото",
      cell: (info) => h("img", { src: info.getValue(), width: 80 }),
      sortDescFirst: true,
    }),
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
      header: (props) => props.column.id,
      sortDescFirst: true,
    }),
    columnHelper.accessor("name", {
      header: "Назва",
      cell: (info) => info.getValue(),
      sortDescFirst: true,
    }),

    columnHelper.accessor("quantity", {
      header: "Кількість",
      cell: (info) =>
        h(IngredientsQuantityField, { quantity: info.getValue() }),
      sortDescFirst: true,
    }),
    columnHelper.accessor("updatedAt", {
      header: "Останнє оновлення",
      cell: (info) => info.getValue(),
      sortDescFirst: true,
    }),
    columnHelper.display({
      cell: () => h(IngredientActions),
      header: "Дії",
    }),
  ];
};
