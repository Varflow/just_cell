<template>
  <form-field
    :label="label || 'Термінали на які не поширюється знижка'"
    :error="error"
  >
    <select-field
      :options="terminals"
      name="terminal"
      input-placeholder="Оберіть термінал"
      search-placeholder="Введіть назву терміналу"
      has-searh
      :model-value="modelValue"
      @update:model-value="select"
    />
  </form-field>
</template>
<script lang="ts">
import FormField from "../../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectFieldMultiple.vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
    error: String,
    label: {
      type: String,
      required: false,
    },
  },
  emits: ["update:modelValue"],
  components: {
    FormField,
    SelectField,
  },

  computed: {
    terminals(): { value: string; label: string }[] {
      return [
        { value: "1", label: "Terminal 1" },
        { value: "2", label: "Terminal 2" },
      ];
    },
  },

  methods: {
    select(value: string) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
