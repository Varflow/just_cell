<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="photo" alt="" />
    </div>
    <div class="product-row">
      <div class="product-info">
        <h4 class="product-name">{{ name }}</h4>
        <span class="product-price">
          Ціна: <span class="price">{{ price }} грн</span>
        </span>
      </div>
      <div class="product-actions">
        <img
          class="product-delete"
          src="@/assets/icons/product-delete-icon.svg"
          alt=""
        />
        <div class="product-links">
          <div class="product-edit">Редагувати</div>
          <div class="product-available">Переглянути наявність на точках</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type ProductCardProps = {
  name: string;
  price: number;
  photo: string;
};
defineProps<ProductCardProps>();
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  column-gap: 24px;
  padding: 24px;
}

.product-image {
  width: 120px;
  height: 120px;

  img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
}

.product-name {
  font-size: 18px;
  font-weight: 500;
  color: $accent-primary;
  margin-bottom: 20px;
}

.product-price {
  font-size: 18px;
  font-weight: 500;
  .price {
    font-size: 22px;
  }
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-row {
  display: flex;
  justify-content: space-between;
  flex: 1;
}

.product-actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: right;
}

.product-delete {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.product-edit {
  font-size: 16px;
  font-weight: 400;
  color: $accent-primary;
  text-decoration: underline;
  cursor: pointer;
}

.product-available {
  font-size: 16px;
  font-weight: 400;
  color: #40b3e0;
  text-decoration: underline;
  cursor: pointer;
}

.product-links {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
</style>
