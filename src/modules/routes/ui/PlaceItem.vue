<template>
  <div class="place-item">
    <span class="place-item__text">{{ name }}</span>
    <div class="place-item__actions" v-if="hasActions">
      <div
        class="place-item__action"
        :class="moveUpDisabled ? 'place-item__disabled' : ''"
        @click="$emit('move-up', index)"
      >
        <img src="@/assets/icons/arrow-long-up.svg" alt="" />
      </div>
      <div
        class="place-item__action"
        :class="moveDownDisabled ? 'place-item__disabled' : ''"
        @click="$emit('move-down', index)"
      >
        <img src="@/assets/icons/arrow-long-down.svg" alt="" />
      </div>
      <div class="place-item__action" @click="$emit('remove', index)">
        <img src="@/assets/icons/trash.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["move-up", "move-down", "remove"],
  props: ["name", "index", "moveUpDisabled", "moveDownDisabled", "hasActions"],
});
</script>

<style lang="scss" scoped>
.place-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px;
  background-color: #fff;
  border-radius: 8px;

  &__disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &__text {
    font-size: 16px;
  }

  &__actions {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }

  &__action {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border-radius: 4px;
    border: 1px solid $accent-primary;

    cursor: pointer;

    img {
      width: 24px;
    }
  }
}
</style>
