<template>
  <v-form :initialValues="initialValues" @submit="onSubmit">
    <template #fields="{ values }">
      <div class="app-layout-form__row">
        <div class="app-layout-form">
          <form-field shadow label="Додати ключ для підпису*:">
            <file-field
              name="file"
              label="Ключ для підпису*:"
              v-model="values.key"
            />
          </form-field>
          <form-field shadow label="Фіскальний номер реєстратора*:">
            <input-field name="name" v-model="values.num" />
          </form-field>
          <form-field shadow label="Пароль ключа*:">
            <password-field name="password" v-model="values.pass" />
          </form-field>
        </div>
      </div>
      <v-button type="submit">
        <template #text>Додати</template>
      </v-button>
    </template>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VForm from "@/components/form/VForm.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import FileField from "@/components/fields/FileField/FileField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  emits: ["upload"],
  components: {
    InputField,
    FormField,
    VForm,
    VButton,
    FileField,
    PasswordField,
  },

  data() {
    return {
      initialValues: {
        key: null,
        num: "",
        pass: "",
        time: "00:00",
        schedule: "",
      },
    };
  },

  methods: {
    onSubmit() {
      this.$router.push({ name: "fiscalAdd" });
    },
  },
});
</script>
