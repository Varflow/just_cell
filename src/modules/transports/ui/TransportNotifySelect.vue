<template>
  <form-field label="Повідомляти про" :error="error">
    <select-field-multiple
      :options="notifications"
      name="syncTypes"
      input-placeholder="Оберіть зі списку"
      search-placeholder="Введіть назву маршрута"
      :has-search="false"
      :model-value="value"
      @update:model-value="select"
    />
  </form-field>
</template>
<script lang="ts">
import FormField from "@/components/fields/FormField/FormField.vue";
import SelectFieldMultiple from "@/components/fields/SelectField/SelectFieldMultiple.vue";

import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
    error: String,
  },
  emits: ["update:modelValue"],
  components: {
    FormField,
    SelectFieldMultiple,
  },

  data() {
    return { value: "" };
  },

  computed: {
    notifications(): { value: string; label: string }[] {
      const notifications = [
        {
          label: "Відхилення від маршруту",
          value: "1",
        },
        {
          label: "Перевищення швидкості",
          value: "2",
        },
        {
          label: "Тривала зупинка",
          value: "3",
        },
      ];

      return notifications;
    },
  },

  watch: {
    modelValue: {
      handler(value: string) {
        if (Number.isNaN(parseInt(value))) {
          this.value =
            this.notifications.find(
              (notification) => notification.label === value
            )?.value || "";
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
