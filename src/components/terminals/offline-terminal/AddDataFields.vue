<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div v-if="field?.type === 'text'">
    <form-field :label="field.info">
      <input-field
        name="max_offline_sum"
        type="text"
        v-model="values.value"
        :placeholder="field.info"
        :disabled="!JSON.parse(field.can_user_edit)"
      />
    </form-field>
  </div>
  <div v-if="field?.type === 'tag'">
    <form-field :label="field.info">
      <input-field
        name="max_offline_sum"
        type="text"
        v-model="values.value"
        :placeholder="field.info"
        :disabled="!JSON.parse(field.can_user_edit)"
      />
    </form-field>
  </div>
  <div v-if="field?.type === 'bool'">
    <checkbox-field
      name="is_default_offline"
      v-model="values.value"
      :label="field.info"
      :disabled="!JSON.parse(field.can_user_edit)"
    />
  </div>
  <div v-if="field?.type === 'select'">
    <field-select
      name="is_default_offline"
      v-model="values.value"
      :label="field.info"
      :data="field.data"
    />
  </div>
  <div v-if="field?.type === 'array_text'">
    <array-field
      :name="field.field_name"
      :label="field.info"
      :min="field.data.min"
      :max="field.data.max"
      :values="values"
      :disabled="!JSON.parse(field.can_user_edit)"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import FieldSelect from "./FieldSelect.vue";
import ArrayField from "./ArrayField.vue";

export default defineComponent({
  props: ["fieldData", "values"],
  components: {
    FormField,
    InputField,
    CheckboxField,
    FieldSelect,
    ArrayField,
  },

  data() {
    return { field: null, fieldValues: {} };
  },

  watch: {
    fieldData: {
      handler(value) {
        this.field = value;
      },
      immediate: true,
    },
    values: {
      handler(value) {
        console.log(value);
        if (!value || !value.length) {
          return;
        }
        this.fieldValues = value;
      },
      immediate: true,
    },
  },
});
</script>
