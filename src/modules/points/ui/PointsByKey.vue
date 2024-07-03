<template>
  <div class="points-list__empty" v-if="points?.length <= 0">
    <h2 class="points-list__empty-title">Немає відділень</h2>
  </div>
  <div class="" v-if="points?.length > 0">
    <div class="points-list">
      <div class="point-card" v-for="(point, index) of points" :key="point.id">
        <h4 class="point-card__name">Точка {{ point.id }}</h4>
        <div class="point-card__checkbox">
          <checkbox-field
            label="Обрати точку"
            name="point"
            direction="left"
            v-model="selectedPoints[index].selected"
          />
        </div>
        <edit-fiscal-point-modal />
      </div>
    </div>
    <div class="points-list__actions">
      <v-button type="button" @click="onAddPoints">
        <template #text>Додати точки</template>
      </v-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import EditFiscalPointModal from "./EditFiscalPointModal.vue";

import { usePointsStore } from "../store/points.store";

const pointsStore = usePointsStore();

const points = reactive(pointsStore.pointsByKey);
const selectedPoints = reactive(
  pointsStore.pointsByKey.map((p) => ({ ...p, selected: false }))
);

const onAddPoints = () => {
  const selectedPointsIds = selectedPoints
    .filter((point) => point.selected)
    .map((point) => point.id);

  pointsStore.addPointsWithIds({ points: selectedPointsIds });
};
</script>

<style lang="scss" scoped>
@import "./points.scss";
</style>
