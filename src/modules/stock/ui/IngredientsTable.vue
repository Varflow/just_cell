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
import { Ingredient } from "../model/ingredient";
import { createIngredientsTableColumns } from "../lib/ingredients.columns";

type IngredientsTableProps = {
  data: Ingredient[];
};

defineProps<IngredientsTableProps>();

const columns = createIngredientsTableColumns();
</script>

<style scoped></style>
