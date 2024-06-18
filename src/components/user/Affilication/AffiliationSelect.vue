<template>
  <form-field label="Приналежність*:" :error="error">
    <select-field
      :options="affilications"
      name="affilications"
      input-placeholder="Оберіть компанію"
      search-placeholder="Введіть компанію"
      :has-search="false"
      :model-value="modelValue"
      @update:model-value="select"
    >
      <template #extra>
        <affiliation-form @success="onAdd" />
      </template>
    </select-field>
  </form-field>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";

import AffiliationForm from "./AffiliationForm.vue";

export default defineComponent({
  props: {
    modelValue: String,
    error: String,
  },
  emits: ["update:modelValue"],
  components: {
    FormField,
    SelectField,
    AffiliationForm,
  },

  data() {
    return {
      affilications: [{ value: "1", label: "Company 1" }],
    };
  },

  methods: {
    select(value: string) {
      this.$emit("update:modelValue", value);
    },
    onAdd(name: string) {
      this.affilications.push({ value: name, label: name });
    },
  },
});
</script>
