import { createColumnHelper } from "@tanstack/vue-table";
import { h } from "vue";

import { Product } from "../model/product";
import ProductActions from "../ui/ProductActions.vue";

export const createProductsTableColumns = () => {
  const columnHelper = createColumnHelper<Product>();

  return [
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

    columnHelper.accessor("price", {
      header: "Ціна",
      cell: (info) => info.getValue(),
      sortDescFirst: true,
    }),
    columnHelper.accessor("taxIncluded", {
      header: "Податок включено",
      cell: (info) => (info.getValue() ? "Так" : "Ні"),
      sortDescFirst: true,
    }),
    columnHelper.accessor("tax", {
      header: "Податок",
      cell: (info) => info.getValue(),
      sortDescFirst: true,
    }),
    columnHelper.accessor("isFiscal", {
      header: "Чи фіскальний",
      cell: (info) => (info.getValue() ? "Так" : "Ні"),
      sortDescFirst: true,
    }),
    columnHelper.display({
      cell: () => h(ProductActions),
      header: "Дії",
    }),
  ];
};
