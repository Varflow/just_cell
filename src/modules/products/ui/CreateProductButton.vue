<template>
  <RouterLink :to="{ name: 'createProduct' }" class="btn btn-primary">
    <VButton>
      <template #text> Додади товар </template>
    </VButton>
  </RouterLink>
</template>

<script setup lang="ts">
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
</script>

<style scoped></style>
