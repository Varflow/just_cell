<template>
  <div class="map-container">
    <div id="map" ref="map"></div>
    <div class="places-container">
      <input
        type="text"
        ref="placesAutocomplete"
        class="form-field__input--default"
        v-if="hasAddressAutocomplete"
      />
      <div class="places-list">
        <place-item
          v-for="(place, index) in places"
          :key="place.name"
          :name="place.name"
          :index="index"
          @move-up="moveUp"
          @move-down="moveDown"
          @remove="removeItem"
          :moveUpDisabled="index === 0"
          :moveDownDisabled="index === places.length - 1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { initMap, renderRoute } from "../api/google-maps.api";
import { moveElement } from "@/utils/array";
import PlaceItem from "./PlaceItem.vue";

export default defineComponent({
  emits: ["update:modelValue"],
  props: ["modelValue", "hasAddressAutocomplete"],
  components: {
    PlaceItem,
  },
  data(): { places: any[] } {
    return {
      places: [],
    };
  },
  mounted() {
    const map = this.$refs.map as HTMLDivElement;
    const input = this.$refs.placesAutocomplete as HTMLInputElement;

    initMap(map, input, { onPlaceChanged: this.onAddressSelected });
    renderRoute(this.places);
  },

  watch: {
    modelValue: {
      handler(value) {
        this.places = value || [];
      },
      immediate: true,
    },
    places: {
      handler(value) {
        console.log(value);
        renderRoute(value);
      },
      // immediate: true,
      deep: true,
    },
  },

  methods: {
    onAddressSelected(place: any) {
      this.places = [...this.places, place];
      this.$emit("update:modelValue", this.places);
    },
    moveUp(currentIndex: number) {
      console.log(currentIndex);

      this.places = moveElement(this.places, currentIndex, currentIndex - 1);
    },
    moveDown(currentIndex: number) {
      this.places = moveElement(this.places, currentIndex, currentIndex + 1);
    },
    removeItem(currentIndex: number) {
      this.places = this.places.filter((_, index) => index !== currentIndex);
    },
  },
});
</script>

<style lang="scss" scoped>
.map-container {
  display: flex;
  column-gap: 12px;
}
.places-container {
  width: 50%;
}

.places-list {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.pac-target-input {
  margin-bottom: 12px;
}
#map {
  width: 50%;
  height: 70vh;
}
</style>
