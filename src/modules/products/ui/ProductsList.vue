<template>
  <div class="products-list">
    <ProductCard
      v-for="product of store.products"
      :key="product.name"
      :name="product.name"
      :price="product.price"
      :photo="product.photo"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import { onMounted } from "vue";
import { useProductsStore } from "../store/products.store";

const store = useProductsStore();

onMounted(() => {
  store.getProducts();
});
</script>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-direction: column;
  row-gap: 18px;
}
</style>
