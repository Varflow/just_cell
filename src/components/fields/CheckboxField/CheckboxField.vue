<template>
  <input
    type="checkbox"
    class="checkbox-field__input"
    :checked="modelValue || checked"
    :name="name"
    :disabled="disabled"
  />

  <div
    class="checkbox-field"
    :class="{
      'checkbox-field--checked': checked,
      'checkbox-field--disabled': disabled,
      [`checkbox-field--${direction}`]: true,
      [`checkbox-field--${variant}`]: true,
      [`checkbox-field--${size}`]: true,
    }"
    :style="{
      justifyContent:
        justify === 'space-between' ? 'space-between' : 'flex-start',
    }"
    @click="check"
  >
    <label
      v-if="Boolean(label)"
      for="#checkbox-field"
      class="checkbox-field__label"
      >{{ label }}</label
    >
    <div id="checkbox-field" class="checkbox-field__box">
      <img v-if="checked" src="@/assets/icons/check-icon.svg" alt="Checked" />
    </div>
  </div>
  <div class="form-field__error" v-if="hasError">
    {{ error }}
  </div>
</template>

<script setup lang="ts">
interface CheckboxFieldProps {
  name: string;
  label?: string;
  defaultChecked?: boolean;
  direction?: "right" | "left";
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  modelValue?: boolean;
  disabled?: any;
  error?: string;
  justify?: "space-between" | "none";
}

withDefaults(defineProps<CheckboxFieldProps>(), {
  direction: "right",
  variant: "primary",
  size: "md",
  justify: "space-between",
});
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["change", "update:modelValue"],
  data() {
    return {
      checked: (this.$props as any).modelValue,
    };
  },

  computed: {
    hasError(): boolean {
      return Boolean((this.$props as any).error);
    },
  },

  watch: {
    modelValue: {
      handler(value: any) {
        if (typeof value === "string") {
          this.checked = JSON.parse(value);
        } else {
          this.checked = value;
        }
      },
      immediate: true,
    },
  },

  methods: {
    check() {
      this.checked = !this.checked;
      this.$emit("change", this.checked);
      this.$emit("update:modelValue", this.checked);
    },
  },
});
</script>
<style lang=""></style>
