<template>
  <v-form :initialValues="initialValues" @submit="onSubmit">
    <template #fields="{ values }">
      <div class="app-layout-form__row">
        <div class="app-layout-form">
          <form-field shadow label="Додати ключ для підпису*:">
            <file-field
              name="file"
              label="Ключ для підпису*:"
              v-model="values.file"
            />
          </form-field>
          <form-field shadow label="Фіскальний номер реєстратора*:">
            <input-field name="name" v-model="values.fiscal_num" />
          </form-field>
          <form-field shadow label="Пароль ключа*:">
            <password-field name="password" v-model="values.fiscal_pass" />
          </form-field>
        </div>
      </div>
      <v-button type="submit">
        <template #text>Додати</template>
      </v-button>
    </template>
  </v-form>
</template>

<script setup lang="ts">
import { reactive, defineEmits } from "vue";

import VForm from "@/components/form/VForm.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import FileField from "@/components/fields/FileField/FileField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

import { PointsRequest } from "../model/points-request";
import { usePointsStore } from "../store/points.store";

const initialValues = reactive({ file: null, fiscal_num: "", fiscal_pass: "" });

const onSubmit = (values: PointsRequest) => {
  const pointsStore = usePointsStore();

  pointsStore.uploadFiscalKey(values);
};

defineEmits(["upload"]);
</script>
