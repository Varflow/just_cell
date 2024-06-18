<template>
  <div class="products-actions">
    <RouterLink :to="{ name: 'createProduct' }">
      <VButton>
        <template #text>Додати товар</template>
      </VButton></RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
</script>
