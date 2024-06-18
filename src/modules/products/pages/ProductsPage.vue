<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="false" />
    </template>
    <template #appTitle> Точка “Цукерка” </template>
    <template #appExtra>
      <ProductsActions />
    </template>
    <template #appContent>
      <ProductFilters />
      <ProductsList />
    </template>
  </app-layout>
</template>
<script setup lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";

import ProductsActions from "../ui/ProductsActions.vue";
import ProductFilters from "../ui/filters/ProductFilters.vue";
import ProductsList from "../ui/ProductsList.vue";
</script>
