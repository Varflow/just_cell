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
        <div class="marker-checkbox-container" v-if="hasAnimatedMarker">
          <checkbox-field
            label="Відображати переміщення ТЗ"
            name="iconVisible"
            v-model="showBusIcon"
          />
        </div>
        <place-item
          v-for="(place, index) in places"
          :key="place.name"
          :name="place.name"
          :index="index"
          :moveUpDisabled="index === 0"
          :moveDownDisabled="index === places.length - 1"
          :hasActions="hasPlaceActions"
          @move-up="moveUp"
          @move-down="moveDown"
          @remove="removeItem"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  initMap,
  renderRoute,
  toggleMarkerVisibily,
} from "../api/google-maps.api";
import { moveElement } from "@/utils/array";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import PlaceItem from "./PlaceItem.vue";

export default defineComponent({
  emits: ["update:modelValue"],
  props: [
    "modelValue",
    "hasAddressAutocomplete",
    "hasPlaceActions",
    "hasAnimatedMarker",
  ],
  components: {
    PlaceItem,
    CheckboxField,
  },
  data(): { showBusIcon: boolean; places: any[] } {
    return {
      places: [],
      showBusIcon: true,
    };
  },
  async mounted() {
    const map = this.$refs.map as HTMLDivElement;
    const input = this.$refs.placesAutocomplete as HTMLInputElement;

    await initMap(map, input, {
      onPlaceChanged: this.onAddressSelected,
    });
    setTimeout(() => {
      renderRoute({
        places: this.places,
        animatedMarker: this.hasAnimatedMarker,
      });
    }, 500);
  },

  watch: {
    modelValue: {
      handler(value) {
        this.places = value || [];
      },
      immediate: true,
    },
    showBusIcon: {
      handler(value) {
        toggleMarkerVisibily(value);
      },
    },
    places: {
      handler(value) {
        renderRoute({ places: value, animatedMarker: this.hasAnimatedMarker });
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

.marker-checkbox-container {
  padding-bottom: 10px;
  margin-bottom: 12px;
  border-bottom: 1px solid #ccc;
}
#map {
  width: 50%;
  height: 70vh;
}
</style>
