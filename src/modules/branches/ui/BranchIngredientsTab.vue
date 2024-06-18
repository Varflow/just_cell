<template>
  <IngredientsTable :data="ingredients" />
</template>

<script setup lang="ts">
import { IngredientsTable, useStockStore } from "@/modules/stock";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const stockStore = useStockStore();
const { ingredients } = storeToRefs(stockStore);
const { getBranchStock } = stockStore;

onMounted(() => {
  getBranchStock(1);
});
</script>
