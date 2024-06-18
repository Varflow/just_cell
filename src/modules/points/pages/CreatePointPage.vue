<template>
  <app-layout>
    <template #appTitle>Додати нову точку/відділення</template>
    <template #appContent>
      <div class="department-content">
        <v-tabs>
          <v-tab title="Фіскальна">
            <upload-fiscal-key @upload="onFiscalSubmit" />
          </v-tab>
          <v-tab title="Не фіскальна">
            <fiscal-form @upload="onNonFiscalSubmit" />
          </v-tab>
        </v-tabs>
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import UploadFiscalKey from "../ui/UploadFiscalKey.vue";
import FiscalForm from "../ui/FiscalForm.vue";
import VTabs from "@/components/tabs/VTabs.vue";
import VTab from "@/components/tabs/VTab.vue";

export default defineComponent({
  components: {
    AppLayout,
    UploadFiscalKey,
    FiscalForm,
    VTabs,
    VTab,
  },
  methods: {
    onFiscalSubmit(values: any) {
      console.log(values);
      this.$router.push({ name: "fiscalAdd" });
    },
    onNonFiscalSubmit(values: any) {
      console.log(values);
    },
  },
});
</script>
