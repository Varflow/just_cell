<template lang="">
  <div class="timepicker-range-field">
    <timepicker-field :label="labelFrom" />
    <div class="timepicker-range__delimetr">-</div>
    <timepicker-field :label="labelTo" />
  </div>
</template>
<script>
import TimepickerField from "./TimepickerField.vue";
export default {
  props: ["labelFrom", "labelTo"],
  components: {
    TimepickerField,
  },
};
</script>
