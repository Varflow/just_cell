<template>
  <v-form
    class-names="add-ingredient-form"
    :initial-values="defaultData"
    @submit="onSubmit"
  >
    <template #fields="{ values }">
      <div class="ingredient-select__container">
        <IngredientsSelect v-model="values.id" />
        <p class="ingredient-divider">aбо</p>
      </div>
      <form-field label="Назва:">
        <input-field
          v-model="values.name"
          name="point"
          type="text"
          placeholder="Введіть назву інгредієнта"
        />
      </form-field>
      <form-field label="К-сть:">
        <input-field
          v-model="values.point"
          name="point"
          type="text"
          placeholder="Введіть к-сть"
        />
      </form-field>
      <form-field label="Фото">
        <DropzoneField />
      </form-field>

      <v-button type="submit">
        <template #text>Додати новий інгредієнт</template>
      </v-button>
    </template>
  </v-form>
</template>
<script setup lang="ts">
import VForm from "@/components/form/VForm.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

import IngredientsSelect from "../IngredientsSelect.vue";
import DropzoneField from "@/components/fields/DropzoneField/DropzoneField.vue";

const emits = defineEmits<{ submit: [values: any] }>();

const defaultData = {
  id: "",
  name: "",
  quantity: "0",
};

const onSubmit = (values: any) => {
  emits("submit", values);
};
</script>

<style lang="scss">
.add-ingredient-form {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 12px;
  padding: 0 12px;
}

.ingredient-divider {
  font-size: 16px;
  font-weight: 500;
  color: #848484;

  margin-top: 24px;
  margin-bottom: 12px;
}
</style>
