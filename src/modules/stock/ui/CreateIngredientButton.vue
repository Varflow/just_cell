<template>
  <RouterLink :to="{ name: 'createIngredient' }" class="btn btn-primary">
    <VButton>
      <template #text> Додати інгредієнт </template>
    </VButton>
  </RouterLink>
</template>

<script setup lang="ts">
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
</script>
