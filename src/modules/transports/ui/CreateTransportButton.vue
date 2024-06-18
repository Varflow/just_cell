<template>
  <router-link :to="{ name: 'createTransport' }" class="terminal-create-btn">
    <v-button :hasMaxWidth="false">
      <template #text>Додати ТС</template>
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
