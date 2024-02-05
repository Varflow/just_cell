<template lang="">
  <div class="driver-card">
    <div class="driver-card__header">
      <h4 class="driver-card__username">{{ driver.name }}</h4>
    </div>
    <div class="driver-card__info">
      <div class="driver-card__item">
        <h5 class="driver-card__label">Телефон</h5>
        <a :href="`tel:${driver.phone}`">
          {{ driver.phone }}
        </a>
      </div>
      <div class="driver-card__item">
        <h5 class="driver-card__label">Табельний номер</h5>
        {{ driver.tabulation_number }}
      </div>
      <div class="driver-card__item">
        <h5 class="driver-card__label">Маршрут</h5>
        {{ driver.route }}
      </div>
      <div class="driver-card__item">
        <h5 class="driver-card__label">№ ТС</h5>
        {{ driver.transport_number }}
      </div>
      <div class="driver-card__item">
        <h5 class="driver-card__label">Час відкриття зміни</h5>
        {{ driver.session_open_time }}
      </div>
      <div class="driver-card__item">
        <h5 class="driver-card__label">Виторг</h5>
        {{ driver.money }}
      </div>
      <div class="driver-card__item" v-if="driver.add_data">
        <h5 class="driver-card__label">Додаткова інформація</h5>
        {{ driver.add_data }}
      </div>
      <div class="driver-card__item">
        <h5 class="driver-card__label">Швидкий зв'язок</h5>
        {{ driver.call_message }}
      </div>
    </div>
    <div class="driver-card__actions">
      <v-button :hasMaxWidth="false">
        <template #text> Закрити зміну </template>
      </v-button>
      <change-driver-transport />
      <change-driver-route />
    </div>
  </div>
</template>
<script setup lang="ts">
interface DriverCardProps {
  driver: Driver;
}

defineProps<DriverCardProps>();
</script>
<script lang="ts">
import { defineComponent } from "vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import ChangeDriverTransport from "./ChangeDriverTransport.vue";
import ChangeDriverRoute from "./ChangeDriverRoute.vue";
import { Driver } from "../models/driver";

export default defineComponent({
  components: {
    VButton,
    ChangeDriverTransport,
    ChangeDriverRoute,
  },
});
</script>
<style lang=""></style>
