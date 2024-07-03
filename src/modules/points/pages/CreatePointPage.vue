<template>
  <app-layout>
    <template #appTitle>Додати нову точку/відділення</template>
    <template #appContent>
      <div class="department-content">
        <v-tabs>
          <v-tab title="Фіскальна">
            <upload-fiscal-key />
          </v-tab>
          <v-tab title="Не фіскальна">
            <fiscal-form />
          </v-tab>
        </v-tabs>
      </div>
    </template>
  </app-layout>
</template>
<script setup lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import UploadFiscalKey from "../ui/UploadFiscalKey.vue";
import FiscalForm from "../ui/FiscalForm.vue";
import VTabs from "@/components/tabs/VTabs.vue";
import VTab from "@/components/tabs/VTab.vue";
</script>
