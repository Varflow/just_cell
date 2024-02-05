<template lang="">
  <div class="terminal-form__container">
    <v-form
      action="#"
      class="terminal-form"
      :initial-values="initialValues"
      @submit="onSubmit"
    >
      <template #fields="{ values }">
        <form-field label="ФІО">
          <input-field
            v-model="values.name"
            name="name"
            type="text"
            placeholder="Введіть ФІО водія"
          />
        </form-field>
        <form-field label="Табельний номер">
          <input-field
            v-model="values.tabulation_number"
            name="name"
            type="text"
            placeholder="Введіть табельний номер"
          />
        </form-field>
        <route-select-field v-model="values.route" />
        <transport-select-field v-model="values.transport_number" />
        <timepicker-range v-model="values.session_open_time" />
        <form-field label="Телефон">
          <input-field
            v-model="values.phone"
            name="name"
            type="text"
            placeholder="Введіть телефон"
          />
        </form-field>
        <form-field label="Додадкова інформація">
          <textarea-field
            v-model="values.add_data"
            name="name"
            type="text"
            placeholder="Введіть державний номер ТС"
          />
        </form-field>
        <div class="form-actions form-actions--fixed">
          <v-button type="submit" :loading="loading">
            <template #text>Додати водія</template>
          </v-button>
        </div>
      </template>
    </v-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";

import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import VForm from "@/components/form/VForm.vue";
import TimepickerRange from "@/components/fields/TimepickerField/TimepickerRange.vue";
import TextareaField from "@/components/fields/TextareaField/TextareaField.vue";
import { TransportSelectField } from "@/modules/transports/";

import { RouteSelectField } from "@/modules/routes";

const defaultConfigData = {
  id: "",
  name: "",
  route: "",
  phone: "",
  transport_number: "",
  tabulation_number: "",
  open_session_time: "",
  add_data: "",
};

export default defineComponent({
  props: ["defaultValues"],
  emits: ["submit"],

  components: {
    FormField,
    InputField,
    VButton,
    VForm,
    RouteSelectField,
    TimepickerRange,
    TransportSelectField,
    TextareaField,
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  data(): { initialValues: any } {
    return {
      initialValues: this.defaultValues || defaultConfigData,
    };
  },

  watch: {
    defaultValues(value) {
      this.initialValues = { ...this.initialValues, ...value };
    },
  },

  computed: {
    loading(): boolean {
      return false;
      // return this.$store.state.transport.loading;
    },
  },

  methods: {
    onSubmit(payload: any) {
      this.$emit("submit", payload);
    },
  },
});
</script>
<style lang="scss">
.schedule-container {
  width: 40%;
}
</style>
