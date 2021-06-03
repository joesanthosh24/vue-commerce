<template>
  <div class="cart-container">
    <div class="border"></div>
    <div class="items">
      <app-cart-item
        class="item"
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  name: "CartItemsContainer",
  props: ["items"],
  components: {
    appCartItem: CartItem,
  },
};
</script>

<style scoped>
.cart-container {
  margin-top: 10px;
}

.border {
  height: 5px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: 15px;
}

.items {
  display: flex;
  flex-direction: column;
}
</style>