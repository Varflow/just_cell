<template>
  <div v-if="currentTemplate">
    <div class="product-ingredients-fields">
      <div
        v-for="ingredient in currentTemplate.ingredients"
        :key="ingredient.name"
        class="product-ingredient-field"
      >
        <h3 class="product-ingredient-name">{{ ingredient.name }}</h3>
        <img
          :src="ingredient.photo"
          :alt="ingredient.name"
          class="product-ingredient-image"
        />
        <form-field label="К-сть">
          <input-field
            v-model="ingredient.quantity"
            name="point"
            type="text"
            placeholder="Напишіть назву інгредієнта"
          />
        </form-field>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import { useIngredientTemplateStore } from "@/modules/stock";

type IngredientFieldsListProps = {
  templateId: number;
};

const props = defineProps<IngredientFieldsListProps>();
const templatesStore = useIngredientTemplateStore();
const currentTemplate = computed(() =>
  templatesStore.getIngredientTemplateById(props.templateId)
);

watch(
  () => props.templateId,
  () => {
    templatesStore.setCurrentIngredientTemplate(currentTemplate.value);
  }
);
</script>

<style scoped lang="scss">
.product-ingredients-fields {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: 1fr;
  gap: 20px;

  padding: 24px;
  background-color: rgb(244 244 245);
  border-radius: 14px;

  margin-top: 20px;
}

.product-ingredient-field {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 10px;
}

.product-ingredient-image {
  width: 100%;
  height: 250px;
  object-fit: contain;
}

.product-ingredient-name {
  text-align: center;
}
</style>
