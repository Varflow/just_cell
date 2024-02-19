<template>
  <app-layout>
    <template #appContent>
      <div class="not-found-container">
        <h1 class="not-found-title">Вибачте, ведуться технічні роботи</h1>
      </div>
    </template>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";

export default defineComponent({
  components: {
    AppLayout,
  },
  mounted() {
    window.localStorage.removeItem("activeMenu");
  },
});
</script>

<style lang="scss" scoped>
.not-found-container {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
