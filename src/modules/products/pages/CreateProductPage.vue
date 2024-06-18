<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="false" />
    </template>
    <template #appTitle> Додати новий товар </template>
    <template #appContent>
      <ProductForm />
    </template>
  </app-layout>
</template>
<script setup lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";

import ProductForm from "../ui/form/ProductForm.vue";
</script>
