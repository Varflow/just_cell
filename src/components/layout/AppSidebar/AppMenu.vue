<template>
  <div class="app-menu">
    <div
      v-for="menuGroup in menu"
      :key="menuGroup.title"
      class="app-menu__group"
      :class="{ active: activeIndex === menuGroup.index }"
    >
      <div class="app-menu__group-parent" @click="open(menuGroup.index)">
        <div class="app-menu__item app-menu__item--parent">
          <div class="app-menu__item-info">
            <div
              class="app-menu__item-icon app-menu__item-icon--parent"
              v-if="menuIcons && menuIcons[menuGroup.title]"
              :style="{maskImage: `url(${menuIcons[menuGroup.title]!})`, WebkitMaskImage: `url(${menuIcons[menuGroup.title]!})`}"
            ></div>
            {{ menuGroup.title }}
          </div>
          <div class="app-menu-icon">
            <img src="@/assets/icons/chevron-down.svg" alt="Open" />
          </div>
        </div>
      </div>
      <div class="app-menu__group-children">
        <div
          class="app-menu__child"
          v-for="(child, index) in menuGroup.children"
          :key="child.NAME"
        >
          <app-submenu
            :submenu="child"
            :index="index"
            v-if="Boolean(child.children)"
          />
          <router-link
            :to="{ path: `/${child.LINK}` }"
            :class="{ 'app-menu__item--active': $route.path === child.LINK }"
            class="app-menu__item"
            v-else
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
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  getMenu,
  getMenuIcons,
  MenuIcons,
  MenuView,
} from "@/api/menu/menu.api";
import AppSubmenu from "./AppSubmenu.vue";

export default defineComponent({
  components: {
    AppSubmenu,
  },
  data(): {
    activeIndex: number;
    menu: MenuView[];
    menuIcons: MenuIcons | null;
  } {
    return {
      activeIndex: -1,
      menu: [] as MenuView[],
      menuIcons: null,
    };
  },

  mounted() {
    this.menu = getMenu();
    this.menuIcons = getMenuIcons();
    this.activeIndex = JSON.parse(
      window.localStorage.getItem("activeMenu") || "-1"
    );
  },

  watch: {
    activeIndex() {
      if (this.activeIndex < 0) {
        window.localStorage.setItem("activeSubmenu", "-1");
      }
      window.localStorage.setItem(
        "activeMenu",
        JSON.stringify(this.activeIndex)
      );
    },
  },

  methods: {
    open(index: number) {
      if (this.activeIndex === index) {
        this.activeIndex = -1;
      } else {
        this.activeIndex = index;
      }
    },
  },
});
</script>
<style lang=""></style>
