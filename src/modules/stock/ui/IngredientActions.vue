<template>
  <v-popover>
    <template #actions>
      <RouterLink :to="{ name: 'editBranch' }">
        <div class="popover-action">Редагувати</div>
      </RouterLink>
      <div class="popover-action">Видалити</div>
    </template>
  </v-popover>
</template>

<script setup lang="ts">
import VPopover from "@/components/popover/VPopover.vue";
</script>
