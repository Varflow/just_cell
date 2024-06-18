<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>

    <template #appTitle>Перегляд маршрутів</template>
    <template #appExtra>
      <create-route-button />
    </template>

    <template #appContent>
      <routes-table :data="routes" />
    </template>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import RoutesTable from "./RoutesTable.vue";
import CreateRouteButton from "./CreateRouteButton.vue";
import { RoutesActions } from "../store/routes.store";

export default defineComponent({
  components: {
    AppLayout,
    AppLoading,
    RoutesTable,
    CreateRouteButton,
  },
  computed: {
    loading() {
      return this.$store.state.terminals.loading;
    },
    routes() {
      console.log(this.$store.state.routes.routes);
      return this.$store.state.routes.routes;
    },
    hasRoutes() {
      return (
        this.$store.state.routes.routes &&
        this.$store.state.routes.routes.length > 0
      );
    },
  },

  mounted() {
    this.$store.dispatch(RoutesActions.GET_ROUTES);
  },
});
</script>
