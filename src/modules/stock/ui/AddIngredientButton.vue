<template>
  <v-button @click="openModal" class="add-ingredient-button">
    <template #text> Додати інредієнт </template>
  </v-button>
  <v-modal ref="modal" min-width="50vw">
    <template #title>Додати інредієнт</template>
    <template #description>
      <p class="ingredient-modal__description">
        Оберіть інгредієнт зі списку або створіть новий
      </p>
    </template>
    <template #content>
      <AddIngredientForm />
    </template>
  </v-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import VModal from "@/components/Modal/VModal.vue";

import AddIngredientForm from "./forms/AddIngredientForm.vue";

const modal = ref<typeof VModal>(null);
const openModal = () => modal?.value.open();
</script>

<style lang="scss" scoped>
.ingredient-modal__description {
  font-size: 18px;
  margin: 12px 0;
  text-align: center;
}

.add-ingredient-button {
  margin-top: 24px;
}
</style>
