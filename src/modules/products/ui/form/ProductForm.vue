<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-form
    class-names="product-form-container"
    :initial-values="defaultData"
    @submit="onSubmit"
  >
    <template #fields="{ values }">
      <VTabs>
        <VTab title="Загальна інформація">
          <ProductInfoForm :values="values" />
        </VTab>
        <VTab title="Інгредієнти">
          <ProductIngredientsForm :values="values" />
        </VTab>
      </VTabs>

      <div class="form-actions form-actions--fixed">
        <v-button type="submit">
          <template #text>Додати новий товар</template>
        </v-button>
      </div>
    </template>
  </v-form>
</template>
<script setup lang="ts">
import VForm from "@/components/form/VForm.vue";
import VTabs from "@/components/tabs/VTabs.vue";
import VTab from "@/components/tabs/VTab.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

import ProductInfoForm from "./ProductInfoForm.vue";
import ProductIngredientsForm from "./ProductIngredientsForm.vue";

type ProductFormProps = {
  initialData?: any;
};

const props = defineProps<ProductFormProps>();
const emits = defineEmits<{ submit: [values: any] }>();

const defaultData = props.initialData || {
  point: "",
  name: "",
  price: 0,
  tax: "",
  taxIncluded: false,
  isFiscal: false,
  photo: "",
  code: "",
  hasBonus: false,
};

const onSubmit = (values: any) => {
  emits("submit", values);
};
</script>

<style lang="scss">
.product-form-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
