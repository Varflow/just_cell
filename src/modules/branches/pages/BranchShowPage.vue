<template>
  <app-layout>
    <template #appExtra>
      <CreateProductButton v-if="currentTab === 'Товари'" />
      <CreateIngredientButton v-if="currentTab === 'Інгредієнти'" />
    </template>
    <template #appTitle>Точка</template>

    <template #appContent>
      <BranchTabs @change="onTabChange" />
    </template>
  </app-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";

import { CreateProductButton } from "@/modules/products";
import { CreateIngredientButton } from "@/modules/stock";

import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import BranchTabs from "../ui/BranchTabs.vue";

const currentTab = ref("Товари");

const onTabChange = (tab: string) => {
  currentTab.value = tab;
};
</script>
