<template>
  <form-field label="ТС" :error="error">
    <select-field
      :options="routes"
      name="syncTypes"
      input-placeholder="Оберіть ТС"
      search-placeholder="Введіть ТС"
      :has-search="true"
      :model-value="value"
      @update:model-value="select"
    />
  </form-field>
</template>
<script lang="ts">
import FormField from "@/components/fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";

import { defineComponent } from "vue";
import { Transport } from "../models/transport";

export default defineComponent({
  props: {
    modelValue: String,
    error: String,
  },
  emits: ["update:modelValue"],
  components: {
    FormField,
    SelectField,
  },

  data() {
    return { value: "" };
  },

  computed: {
    routes(): { value: string; label: string }[] {
      const transports: Transport[] = this.$store.state.transports.transports;

      if (!transports) {
        return [];
      }

      const options = transports.map((transport) => ({
        value: transport.id,
        label: transport.transport_num,
      }));

      options.push({ label: "Не вибрано", value: "" });

      return options;
    },
  },

  watch: {
    modelValue: {
      handler(value: string) {
        if (Number.isNaN(parseInt(value))) {
          this.value =
            this.routes.find((route) => route.label === value)?.value || "";
          this.$emit("update:modelValue", this.value);
          return;
        }

        this.value = value;
        return;
      },
      immediate: true,
    },
  },

  methods: {
    select(value: string) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
