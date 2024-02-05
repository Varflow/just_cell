<template>
  <app-layout>
    <template #appTitle>Додати водія</template>

    <template #appLoading>
      <app-loading :loading="false" />
    </template>
    <template #appContent>
      <driver-form @submit="createDriver" />
    </template>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import DriverForm from "./DriverForm.vue";

import { useToast } from "vue-toastification";
import { DriversActions } from "../store/drivers.store";
import { TransportsActions } from "@/modules/transports/store/transports.store";

export default defineComponent({
  inject: ["rules"],
  components: {
    AppLayout,
    AppLoading,
    DriverForm,
  },

  data(): any {
    return {
      canEdit: false,
    };
  },

  computed: {
    loading(): boolean {
      return this.$store.state.transport.loading;
    },
    // configData(): OfflineTerminalPayload {
    //   return this.$store.state.terminals.terminalConfig;
    // },
  },

  async mounted() {
    this.$store.dispatch(DriversActions.GET_DRIVERS);
    this.$store.dispatch(TransportsActions.GET_TRANSPORTS);
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  methods: {
    createDriver(payload: any) {
      this.$store.dispatch(DriversActions.CREATE_DRIVER, {
        payload,
        toast: this.toast,
      });
    },
  },
});
</script>

<style scoped></style>
