<template>
  <form-field label="Шаблони інгредієнтів">
    <select-field
      :options="options"
      name="syncTypes"
      input-placeholder="Оберіть шаблон"
      search-placeholder="Введіть назву шаблону"
      :has-search="false"
      v-model="model"
    />
  </form-field>
</template>
<script setup lang="ts">
import { defineModel, computed } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import { useIngredientTemplateStore } from "../store/ingredient-template.store";

const templatesStore = useIngredientTemplateStore();

const options = computed(() => {
  return templatesStore.ingredientTemplate.map((template) => ({
    label: template.name,
    value: template.id,
  }));
});

const model = defineModel();
</script>
