<template>
  <app-layout>
    <template #appExtra> </template>
    <template #appTitle>Точки</template>

    <template #appContent>
      <BranchesList />
    </template>
  </app-layout>
</template>
<script lang="ts" setup>
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import BranchesList from "../ui/BranchesList.vue";
</script>
