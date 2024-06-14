<template>
  <v-tabs @change="onTabChange">
    <v-tab title="Товари">
      <BranchProductsTab />
    </v-tab>
    <v-tab title="Інгредієнти">
      <BranchIngredientsTab />
    </v-tab>
  </v-tabs>
</template>

<script setup lang="ts">
import VTabs from "@/components/tabs/VTabs.vue";
import VTab from "@/components/tabs/VTab.vue";

import BranchIngredientsTab from "./BranchIngredientsTab.vue";
import BranchProductsTab from "./BranchProductsTab.vue";

const emit = defineEmits<{ change: [tab: string] }>();

const onTabChange = (tab: string) => {
  emit("change", tab);
};
</script>
