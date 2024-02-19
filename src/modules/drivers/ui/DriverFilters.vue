<template>
  <div class="driver-filters">
    <div class="filter-item">
      <form-field label="Пошук за ФІО">
        <input-field placeholder="Пошук за ФІО" />
      </form-field>
    </div>
    <div class="filter-item">
      <form-field label="Пошук за Табельним номером">
        <input-field placeholder="Пошук за Табельним номером" />
      </form-field>
    </div>
    <div class="filter-item">
      <form-field label="Пошук за ТС">
        <input-field placeholder="Пошук за ТС" />
      </form-field>
    </div>
    <div class="filter-item">
      <routes-select-field />
    </div>
    <div class="filter-item filter-checkbox-item">
      <checkbox-field label="Зараз на рейсах" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import RoutesSelectField from "@/modules/routes/ui/RoutesSelectField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";

export default defineComponent({
  components: { CheckboxField, FormField, InputField, RoutesSelectField },
});
</script>

<style lang="scss" scoped>
.driver-filters {
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 48px;
}
.filter-item {
  flex: 1 1 auto;
}
.filter-checkbox-item {
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 12px;
}
</style>
