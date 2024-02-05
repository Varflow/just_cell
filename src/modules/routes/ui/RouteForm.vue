<template lang="">
  <div class="terminal-form__container">
    <v-form
      action="#"
      class="terminal-form"
      :initial-values="initialValues"
      @submit="onSubmit"
    >
      <template #fields="{ values }">
        <route-select-field v-model="values.route" />
        <form-field label="Назва ТС">
          <input-field
            v-model="values.name"
            name="name"
            type="text"
            placeholder="Введіть назву маршрута"
          />
        </form-field>
        <form-field label="Держава">
          <input-field
            v-model="values.country"
            name="name"
            type="text"
            placeholder="Введіть державу"
          />
        </form-field>
        <form-field label="Місто">
          <input-field
            v-model="values.city"
            name="name"
            type="text"
            placeholder="Введіть місто"
          />
        </form-field>
        <form-field label="Вартість проїзду">
          <input-field
            v-model="values.cost"
            name="name"
            type="text"
            placeholder="Введіть вартість проїзду"
          />
        </form-field>
        <v-map v-model="values.places" :hasAddressAutocomplete="true" />
        <route-prices :places="values.places" />
        <div class="form-actions form-actions--fixed">
          <v-button type="submit" :loading="loading">
            <template #text>Додати ТС</template>
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
import VMap from "./VMap.vue";
import RoutePrices from "./RoutePrices.vue";

import { RouteSelectField } from "@/modules/routes";

const defaultConfigData = {
  id: "",
  route: "",
  name: "",
  terminal_num: "",
  transport_num: "",
  drive_time: "",
  notify: [],
  next_to_date: "",
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
    RoutePrices,
    VMap,
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
