<template>
  <v-button :hasMaxWidth="false" @click="open">
    <template #text> Змінити ТС </template>
  </v-button>
  <v-modal ref="modal" max-width="50vw" min-width="30vw" min-height="50vh">
    <template #title>Змінити ТС </template>
    <template #content="{ close }">
      <v-form
        :initial-values="{ transport_number: '' }"
        @submit="
            (payload: any) => {
              submit(payload, close);
            }
          "
      >
        <template #fields="{ values }">
          <div class="driver-form-container">
            <transport-select-field v-model="values.transport_number" />
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
import { TransportSelectField } from "@/modules/transports";
import { DriversActions } from "../store/drivers.store";
import { useToast } from "vue-toastification";
import { TransportsActions } from "@/modules/transports/store/transports.store";

export default defineComponent({
  components: {
    VModal,
    VForm,
    VButton,
    TransportSelectField,
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  mounted() {
    this.$store.dispatch(TransportsActions.GET_TRANSPORTS);
  },

  methods: {
    open() {
      const modal = this.$refs.modal as typeof VModal;
      modal.open();
    },
    submit(payload: any, close: any) {
      this.$store.dispatch(DriversActions.CHANGE_TRANSPORT, {
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
