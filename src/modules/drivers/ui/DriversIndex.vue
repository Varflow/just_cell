<template>
  <app-layout>
    <template #appTitle>Водії</template>
    <template #appExtra>
      <div class="driver-actions-container">
        <input-field name="search" placeholder="Пошук водія" v-model="query" />
        <create-driver-button />
      </div>
    </template>
    <template #appContent>
      <div class="drivers-list">
        <driver-card
          v-for="driver in driversForView"
          :key="driver.name"
          :driver="driver"
        />
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import DriverCard from "./DriverCard.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CreateDriverButton from "./CreateDriverButton.vue";
import { DriversActions } from "../store/drivers.store";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    AppLayout,
    DriverCard,
    InputField,
    CreateDriverButton,
  },

  data() {
    return {
      query: "",
    };
  },

  computed: {
    loading(): boolean {
      return this.$store.state.drivers.loading;
    },
    driversForView(): any {
      return this.$store.state.drivers.driversForView;
    },
    hasDrivers(): boolean {
      return (
        this.$store.state.drivers.driversForView &&
        this.$store.state.drivers.driversForView.length > 0
      );
    },
  },

  mounted() {
    this.$store.dispatch(DriversActions.GET_DRIVERS);
  },

  watch: {
    query: {
      handler(value: string) {
        this.searhDriver(value);
      },
    },
  },

  methods: {
    searhDriver(query: string) {
      this.$store.dispatch(DriversActions.SEARCH_DRIVER, { query });
    },
  },
});
</script>
<style lang="scss">
.drivers-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.driver-actions-container {
  display: flex;
  align-items: center;
  column-gap: 8px;
}
</style>
