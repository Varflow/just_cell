<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="product-ingredients-form">
    <IngredientTemplatesSelect v-model="templateId" />
    <IngredientFieldsList :template-id="templateId" />
    <AddIngredientButton />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {
  IngredientTemplatesSelect,
  IngredientFieldsList,
  useIngredientTemplateStore,
  AddIngredientButton,
} from "@/modules/stock";

type ProductIngredientsFormProps = {
  values: any;
};

const props = defineProps<ProductIngredientsFormProps>();

const templateId = ref(props.values.templateId);
const templatesStore = useIngredientTemplateStore();

onMounted(() => {
  templatesStore.fetchIngredientTemplates();
});
</script>

<style lang="scss" scoped>
.product-ingredients-form {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
}
</style>
