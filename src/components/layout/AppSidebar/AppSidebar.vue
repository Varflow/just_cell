<template>
  <aside class="app-sidebar" :class="{ opened: menuOpened }">
    <app-menu />
  </aside>
</template>
<script lang="ts">
import AppMenu from "./AppMenu.vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    menuOpened: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    AppMenu,
  },

  watch: {
    menuOpened: {
      immediate: true,
      deep: true,
      handler(opened) {
        if (opened) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      },
    },
  },
});
</script>
<style lang=""></style>
