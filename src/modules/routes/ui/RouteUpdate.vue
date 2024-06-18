<template>
  <app-layout>
    <template #appTitle>Редагувати маршрут</template>

    <template #appLoading>
      <app-loading :loading="false" />
    </template>
    <template #appContent>
      <route-form
        @submit="createTransport"
        :defaultValues="route"
        v-if="route"
      />
    </template>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import RouteForm from "./RouteForm.vue";

import { RoutesActions } from "@/modules/routes/store/routes.store";
import { useToast } from "vue-toastification";

export default defineComponent({
  inject: ["rules"],
  components: {
    AppLayout,
    AppLoading,
    RouteForm,
  },

  data(): any {
    return {
      canEdit: false,
    };
  },

  computed: {
    loading(): boolean {
      return this.$store.state.routes.loading;
    },
    route() {
      console.log(this.$store.state.routes);
      return this.$store.state.routes.route;
    },
  },

  async mounted() {
    this.$store.dispatch(RoutesActions.GET_ROUTE);
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  methods: {
    createTransport(payload: any) {
      this.$store.dispatch(RoutesActions.CREATE_ROUTE, {
        payload,
        toast: this.toast,
      });
    },
  },
});
</script>
