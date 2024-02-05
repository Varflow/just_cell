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
            placeholder="Введіть назву ТС"
          />
        </form-field>
        <form-field label="Державний номер ТС">
          <input-field
            v-model="values.transport_num"
            name="name"
            type="text"
            placeholder="Введіть державний номер ТС"
          />
        </form-field>
        <form-field label="Час перебування на маршруті">
          <div class="schedule-container">
            <schedule-field v-model="values.drive_time" />
            <timepicker-range v-model="values.drive_time" />
          </div>
        </form-field>
        <terminals-select label="Валідатор" v-model="values.terminal_num" />
        <transport-notify-select v-model="values.notify" />
        <form-field label="Наступний ТО">
          <datepicker-field v-model="values.next_to_date" />
        </form-field>
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
import ScheduleField from "@/components/fields/ScheduleField/ScheduleField.vue";
import TimepickerRange from "@/components/fields/TimepickerField/TimepickerRange.vue";
import TerminalsSelect from "@/components/terminals/fields/TerminalsSelect.vue";
import TransportNotifySelect from "./TransportNotifySelect.vue";
import DatepickerField from "@/components/fields/DatepickerField/DatepickerField.vue";

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
    ScheduleField,
    TimepickerRange,
    TerminalsSelect,
    TransportNotifySelect,
    DatepickerField,
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
