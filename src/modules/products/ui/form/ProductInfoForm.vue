<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="product-form-col">
    <form-field label="Точка (-и)*:">
      <input-field
        v-model="values.point"
        name="point"
        type="text"
        placeholder="Оберіть одну або декілька точок"
      />
    </form-field>
    <form-field label="Назва товару/послуги*:">
      <input-field
        v-model="values.name"
        name="point"
        type="text"
        placeholder="Напишіть назву товару "
      />
    </form-field>
    <form-field label="Ціна за одиницю*:">
      <input-field
        v-model="values.price"
        name="point"
        type="number"
        placeholder="00.00"
      />
    </form-field>
    <checkbox-field
      v-model="values.taxIncluded"
      name="taxIncluded"
      label="Податок включений у вартість*:"
    />
    <checkbox-field
      v-model="values.isFiscal"
      name="taxIncluded"
      label="Фіскалізувати*:"
    />
    <checkbox-field
      v-model="values.hasBonus"
      name="taxIncluded"
      label="Бонус з продажів*:"
    />
  </div>
</template>

<script setup lang="ts">
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";

type ProductInfoFormProps = {
  values: any;
};

defineProps<ProductInfoFormProps>();
</script>
<style scoped lang="scss">
.product-form-col {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
</style>
