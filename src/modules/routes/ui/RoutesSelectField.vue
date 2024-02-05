<template>
  <form-field label="Маршрут" :error="error">
    <select-field
      :options="routes"
      name="syncTypes"
      input-placeholder="Оберіть маршрут"
      search-placeholder="Введіть назву маршрута"
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
import { Route } from "../models/routes";

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
      const route: Route[] = this.$store.state.routes.routes;

      if (!route) {
        return [];
      }

      const routes = route.map((route) => ({
        value: route.id,
        label: route.name,
      }));

      routes.push({ label: "Не вибрано", value: "" });

      return routes;
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
