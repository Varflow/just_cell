<template>
  <RouterLink :to="{ name: 'branch', params: { id: branch.id } }">
    <div class="branch-card">
      <h3 class="branch-card__title">{{ branch.name }}</h3>
      <img src="@/assets/icons/chevron-right.svg" class="branch-card__icon" />
    </div>
  </RouterLink>
</template>

<script lang="ts" setup>
import { Branch } from "../model/branch";

type BranchCardProps = {
  branch: Branch;
};

defineProps<BranchCardProps>();
</script>

<style lang="scss" scoped>
.branch-card {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;

  cursor: pointer;

  &__title {
    font-size: 16px;
    font-weight: 700;
    color: $accent-primary;
  }
}
</style>
