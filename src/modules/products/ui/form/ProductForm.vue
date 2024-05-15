<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-form
    class-names="product-form"
    :initial-values="defaultData"
    @submit="onSubmit"
  >
    <template #fields="{ values }">
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
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

import { useToast } from "vue-toastification";

type ProductFormProps = {
  initialData?: any;
};

const props = defineProps<ProductFormProps>();
const emits = defineEmits<{ submit: [values: any] }>();
const toast = useToast();

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
.product-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.product-form-col {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
</style>
