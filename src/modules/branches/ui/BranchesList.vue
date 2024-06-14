<template>
  <div class="branches-list">
    <BranchCard
      v-for="branch of branches"
      v-bind:key="branch.id"
      :branch="branch"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useBranchesStore } from "../store/branches.store";
import BranchCard from "./BranchCard.vue";
import { storeToRefs } from "pinia";

const branchesStore = useBranchesStore();
const { branches } = storeToRefs(branchesStore);

onMounted(() => {
  branchesStore.getBranches();
});
</script>

<style lang="scss" scoped>
.branches-list {
  display: grid;
  grid-template-columns: 1f;
  grid-template-rows: repeat(auto-fill, 1fr);
  row-gap: 20px;
}
</style>
