<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>

    <template #appTitle>Перегляд маршрута</template>
    <template #appExtra>
      <update-route-button />
    </template>

    <template #appContent>
      <transports-table :data="transports" />
      <div class="maps-container">
        <h3 class="maps-container__title">Маршрут</h3>
        <v-map
          :modelValue="route.places"
          v-if="route"
          :hasAddressAutocomplete="false"
        />
      </div>
    </template>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import { RoutesActions } from "../store/routes.store";
import TransportsTable from "@/modules/transports/ui/TransportsTable.vue";
import { TransportsActions } from "@/modules/transports/store/transports.store";
import UpdateRouteButton from "./UpdateRouteButton.vue";
import VMap from "./VMap.vue";

export default defineComponent({
  components: {
    AppLayout,
    AppLoading,
    TransportsTable,
    VMap,
    UpdateRouteButton,
  },
  computed: {
    loading() {
      return this.$store.state.transports.loading;
    },
    route() {
      console.log(this.$store.state.routes);
      return this.$store.state.routes.route;
    },
    transports() {
      return this.$store.state.transports.transports;
    },
    hasRoutes() {
      return (
        this.$store.state.routes.routes &&
        this.$store.state.routes.routes.length > 0
      );
    },
  },

  mounted() {
    this.$store.dispatch(RoutesActions.GET_ROUTE);
    this.$store.dispatch(TransportsActions.GET_TRANSPORTS);
  },
});
</script>

<style lang="scss" scoped>
.maps-container {
  margin-top: 48px;

  &__title {
    font-size: 24px;
    margin-bottom: 16px;
  }
}
</style>
