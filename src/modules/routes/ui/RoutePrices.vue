<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form-field label="Cітка цін">
    <div class="container">
      <div class="record" v-for="(field, index) of records" :key="index">
        <div class="record-item">
          <select-field
            :options="options"
            :hasSearch="false"
            inputPlaceholder="З точки"
            v-model="field.from"
          />
        </div>
        <div class="record-item">
          <select-field
            :options="options"
            :hasSearch="false"
            v-model="field.to"
            inputPlaceholder="По точку"
          />
        </div>
        <div class="record-item">
          <input-field v-model="field.cost" placeholder="Ціна" />
        </div>
        <div v-if="canRemove" class="button" @click="remove(index)">-</div>
        <div
          v-if="canAdd && records.length - 1 === index"
          class="button"
          @click="add"
        >
          +
        </div>
      </div>
    </div>
  </form-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";

export default defineComponent({
  props: ["label", "values", "name", "places"],
  components: {
    FormField,
    SelectField,
    InputField,
  },

  data() {
    return {
      records: [{ from: "", to: "", cost: "" }],
      options: [],
      canAdd: true,
      canRemove: false,
    };
  },

  watch: {
    places: {
      handler(value) {
        if (!value || !value.length) {
          return;
        }
        this.options = value.map((place: any) => ({
          value: place.name,
          label: place.name,
        }));
      },
      //   immediate: true,
    },

    "records.length": {
      handler(length) {
        this.canRemove = length > 1;
      },
      immediate: true,
    },
  },

  methods: {
    add() {
      this.records.push({ from: "", to: "", cost: "" });
    },
    remove(index: number) {
      this.records = this.records.filter((_, item) => item !== index);
    },
  },
});
</script>

<style scoped lang="scss">
.button {
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: #ff7a2e;
  font-size: 18px;
  color: #fff;

  cursor: pointer;
}

.record {
  display: flex;
  align-items: center;
  column-gap: 8px;

  &-item {
    width: 300px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
</style>
