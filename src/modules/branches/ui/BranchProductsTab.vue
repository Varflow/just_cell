<template>
  <ProductsTable :data="products" />
</template>

<script setup lang="ts">
import { ProductsTable, useProductsStore } from "@/modules/products";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const stockStore = useProductsStore();
const { products } = storeToRefs(stockStore);
const { getProductsByBranch } = stockStore;

onMounted(() => {
  getProductsByBranch(1);
});
</script>
<style scoped></style>
