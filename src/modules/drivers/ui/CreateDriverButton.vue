<template>
  <router-link :to="{ name: 'createDriver' }" class="driver-create-btn">
    <v-button :hasMaxWidth="true">
      <template #text>Додати водія</template>
    </v-button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Rules } from "@/contants/rules";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    VButton,
  },
  setup() {
    return { Rules };
  },
});
</script>

<style scoped lang="scss">
.driver-create-btn {
  width: 100%;
}
</style>
