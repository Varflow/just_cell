<template>
  <v-table
    :data="data"
    :columns="columns"
    :has-pagination="false"
    :total="data.length"
    :empty="data.length === 0"
    :striped="true"
  />
</template>

<script setup lang="ts">
import VTable from "@/components/table/VTable.vue";
import { Product } from "../model/product";
import { createProductsTableColumns } from "../lib/products.columns";

type ProductsTableProps = {
  data: Product[];
};

defineProps<ProductsTableProps>();

const columns = createProductsTableColumns();
</script>
