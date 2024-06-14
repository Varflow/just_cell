<template>
  <form-field label="Інгредієнтів">
    <select-field
      :options="options"
      name="syncTypes"
      input-placeholder="Оберіть інгредієнт"
      search-placeholder="Введіть назву інгредієнта"
      :has-search="false"
      v-model="model"
    />
  </form-field>
</template>
<script setup lang="ts">
import { defineModel, computed, onMounted } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import { useStockStore } from "../store/stock.store";

const stockStore = useStockStore();

const options = computed(() => {
  return stockStore.ingredients.map((ingredient) => ({
    icon: ingredient.photo,
    label: ingredient.name,
    value: ingredient.id,
  }));
});

onMounted(() => {
  stockStore.getBranchStock(1);
});

const model = defineModel();
</script>
