<template>
  <v-form
    class-names="product-form"
    :initial-values="defaultData"
    @submit="onSubmit"
  >
    <template #fields="{ values }">
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
      <form-field label="Фото:">
        <dropzone-field />
      </form-field>

      <div class="form-actions form-actions--fixed">
        <v-button type="submit">
          <template #text>Додати новий інгредієнт</template>
        </v-button>
      </div>
    </template>
  </v-form>
</template>
<script setup lang="ts">
import VForm from "@/components/form/VForm.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import DropzoneField from "@/components/fields/DropzoneField/DropzoneField.vue";

type IngredientFormProps = {
  initialData?: any;
};

const props = defineProps<IngredientFormProps>();
const emits = defineEmits<{ submit: [values: any] }>();

const defaultData = props.initialData || {
  name: "",
  quantity: "0",
};

const onSubmit = (values: any) => {
  emits("submit", values);
};
</script>

<style lang="scss">
.product-form {
  max-width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: 20px;
}
</style>
