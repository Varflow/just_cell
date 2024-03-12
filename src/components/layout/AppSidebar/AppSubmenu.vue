<template>
  <div class="app-menu__subgroup" :class="{ active: opened }">
    <div class="app-menu__group-parent" @click="open">
      <div class="app-menu__item app-menu__item--parent">
        <div class="app-menu__item-info">
          <div
            class="app-menu__item-icon"
            v-if="menuIcons && menuIcons[submenu.NAME]"
            :style="{maskImage: `url(${menuIcons[submenu.NAME]!})`, WebkitMaskImage: `url(${menuIcons[submenu.NAME]!})`}"
          ></div>

          {{ submenu.NAME }}
        </div>
        <div class="app-menu-subicon">
          <img src="@/assets/icons/chevron-down.svg" alt="Open" />
        </div>
      </div>
    </div>
    <div class="app-menu__subgroup-subchildren">
      <router-link
        v-for="child in submenu.children"
        :key="child.NAME"
        :to="{
          path: `/${child.LINK}`,
          query: { alloc_type: child.alloc_type || '' },
        }"
        class="app-menu__item"
      >
        <div class="app-menu__item-info">
          <div
            class="app-menu__item-icon"
            v-if="menuIcons && menuIcons[child.NAME]"
            :style="{maskImage: `url(${menuIcons[child.NAME]!})`, WebkitMaskImage: `url(${menuIcons[child.NAME]!})`}"
          ></div>

          {{ child.NAME }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { MenuIcons, getMenuIcons } from "@/api/menu/menu.api";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["submenu", "index"],
  data(): { opened: boolean; menuIcons: MenuIcons | null } {
    return {
      opened: false,
      menuIcons: null,
    };
  },

  mounted() {
    const activeSubmenuIndex = JSON.parse(
      window.localStorage.getItem("activeSubmenu") || "-1"
    );

    this.menuIcons = getMenuIcons();
    this.opened = activeSubmenuIndex === this.index;
  },

  methods: {
    open() {
      if (this.opened) {
        window.localStorage.setItem("activeSubmenu", "-1");
      } else {
        window.localStorage.setItem("activeSubmenu", this.index);
      }
      this.opened = !this.opened;
    },
  },
});
</script>

<style scoped></style>
