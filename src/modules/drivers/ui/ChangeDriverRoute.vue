<template>
  <v-button :hasMaxWidth="false" @click="open">
    <template #text> Змінити маршрут </template>
  </v-button>
  <v-modal ref="modal" max-width="50vw" min-width="30vw" min-height="50vh">
    <template #title>Змінити маршрут </template>
    <template #content="{ close }">
      <v-form
        :initial-values="{ route: '' }"
        @submit="
            (payload: any) => {
              submit(payload, close);
            }
          "
      >
        <template #fields="{ values }">
          <div class="driver-form-container">
            <route-select-field v-model="values.route" />
          </div>
          <div class="modal-actions">
            <v-button :has-max-width="false" variant="success" type="submit">
              <template #text>Змінити</template>
            </v-button>
          </div>
        </template>
      </v-form>
    </template>
  </v-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VModal from "@/components/Modal/VModal.vue";
import VForm from "@/components/form/VForm.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import { RouteSelectField } from "@/modules/routes";
import { DriversActions } from "../store/drivers.store";
import { useToast } from "vue-toastification";
import { TransportsActions } from "@/modules/transports/store/transports.store";
import { RouterActions } from "@/store/modules/router";
import { RoutesActions } from "@/modules/routes/store/routes.store";

export default defineComponent({
  components: {
    VModal,
    VForm,
    VButton,
    RouteSelectField,
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  mounted() {
    this.$store.dispatch(RoutesActions.GET_ROUTES);
  },

  methods: {
    open() {
      const modal = this.$refs.modal as typeof VModal;
      modal.open();
    },
    submit(payload: any, close: any) {
      this.$store.dispatch(DriversActions.CHANGE_ROUTE, {
        payload,
        toast: this.toast,
      });
      close();
    },
  },
});
</script>

<style lang="scss" scoped>
.driver-form-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
</style>
