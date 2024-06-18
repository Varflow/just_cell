<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>

    <template #appTitle>Перегляд транспортних засобів</template>
    <template #appExtra>
      <create-transport-button />
    </template>
    <template #appContent>
      <transports-table :data="transports" :hasRouteColumn="true" />
    </template>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import TransportsTable from "./TransportsTable.vue";
import CreateTransportButton from "./CreateTransportButton.vue";

import { TransportsActions } from "../store/transports.store";

export default defineComponent({
  components: {
    AppLayout,
    AppLoading,
    TransportsTable,
    CreateTransportButton,
  },
  computed: {
    loading() {
      return this.$store.state.terminals.loading;
    },
    transports() {
      return this.$store.state.transports.transports;
    },
    hasTransports() {
      return (
        this.$store.state.transports.transports &&
        this.$store.state.transports.transports.length > 0
      );
    },
  },

  mounted() {
    this.$store.dispatch(TransportsActions.GET_TRANSPORTS);
  },
});
</script>
