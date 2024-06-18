<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="false" />
    </template>
    <template #appTitle> Додати новий інгредієнт </template>
    <template #appContent>
      <IngredientForm />
    </template>
  </app-layout>
</template>
<script setup lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";

import IngredientForm from "../ui/forms/IngredientForm.vue";
</script>
