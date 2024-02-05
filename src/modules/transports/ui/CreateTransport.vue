<template>
  <app-layout>
    <template #appTitle>Додати ТС</template>
    <!-- <template #appSubtitle v-if="!canEdit"
        >Ви не маєте прав для редагування налаштувань терміналу</template
      > -->
    <template #appLoading>
      <app-loading :loading="false" />
    </template>
    <template #appContent>
      <transport-form @submit="createTransport" />
    </template>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import TransportForm from "./TransportForm.vue";

import { RoutesActions } from "@/modules/routes/store/routes.store";
import { TransportsActions } from "../store/transports.store";
import { useToast } from "vue-toastification";

export default defineComponent({
  inject: ["rules"],
  components: {
    AppLayout,
    AppLoading,
    TransportForm,
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
    this.$store.dispatch(RoutesActions.GET_ROUTES);
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  methods: {
    createTransport(payload: any) {
      this.$store.dispatch(TransportsActions.CREATE_TRANSPORT, {
        payload,
        toast: this.toast,
      });
    },
  },
});
</script>

<style scoped></style>
