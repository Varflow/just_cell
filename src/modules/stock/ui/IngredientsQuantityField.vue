<template>
  <div v-show="!isEditing" class="quantity-field">
    {{ quantity }}
    <img src="@/assets/icons/edit-icon.svg" alt="Edit" @click="startEditing" />
  </div>
  <input
    v-show="isEditing"
    autofocus
    v-model="fieldValue"
    @blur="stopEditing"
    class="form-field__input"
    ref="input"
  />
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";

type IngredientQuantityFieldProps = {
  quantity: string;
};
const props = defineProps<IngredientQuantityFieldProps>();
const fieldValue = computed(() => {
  const regex = /\d+/g;
  const quantity = props.quantity;
  const numbers = quantity.match(regex);
  return numbers ? numbers.join("") : "";
});
const isEditing = ref(false);
const input = ref(null);

const startEditing = () => {
  isEditing.value = true;
  nextTick(() => {
    input.value.focus();
  });
};

const stopEditing = () => {
  isEditing.value = false;
};
</script>

<style scoped lang="scss">
.quantity-field {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 14px;
}
</style>
