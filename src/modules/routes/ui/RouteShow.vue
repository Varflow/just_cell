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
      <div class="route-info-container">
        <div class="route-info-item">
          <h4 class="route-info-item__title">Держава</h4>
          <p class="route-info-item__value">{{ route?.country }}</p>
        </div>
        <div class="route-info-item">
          <h4 class="route-info-item__title">Місто</h4>
          <p class="route-info-item__value">{{ route?.city }}</p>
        </div>
        <div class="route-info-item">
          <h4 class="route-info-item__title">Вартість проїзду</h4>
          <p class="route-info-item__value">{{ route?.cost }}</p>
        </div>
      </div>
      <div class="maps-container">
        <h3 class="maps-container__title">Маршрут</h3>
        <v-map
          v-if="route"
          :modelValue="route.places"
          :hasAddressAutocomplete="false"
          :hasPlaceActions="false"
          :has-animated-marker="true"
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
  &__title {
    font-size: 24px;
    margin-bottom: 16px;
  }
}

.route-info-container {
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  margin: 48px 0;

  .route-info-item {
    display: flex;
    align-items: center;
    column-gap: 8px;

    &__title {
      font-size: 18px;
    }

    &__value {
      font-size: 16px;
    }
  }
}
</style>
