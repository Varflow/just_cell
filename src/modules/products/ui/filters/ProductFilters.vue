<template>
  <div class="filters">
    <div class="filters-row">
      <div class="filters-item">
        <form-field :shadow="true" small label="Назва">
          <input-field name="name" placeholder="Назва" size="sm" />
        </form-field>
      </div>
      <div class="filters-item">
        <form-field :shadow="true" small label="Код">
          <input-field name="name" placeholder="Код" size="sm" />
        </form-field>
      </div>
      <div class="filters-item">
        <form-field :shadow="true" small label="Точка">
          <input-field name="name" placeholder="Точка" size="sm" />
        </form-field>
      </div>
      <div class="filters-actions">
        <v-button :has-max-width="false" type="button">
          <template #text>Фільтрувати</template>
        </v-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
</script>

<style lang="scss" scoped></style>
