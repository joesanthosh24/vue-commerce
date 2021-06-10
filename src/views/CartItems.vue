<template>
  <app-container>
    <h1>{{ $t("cart.items") }}</h1>
    <app-cart-container v-if="cartSize > 0" :items="items" />
    <p v-else class="no-items">
      {{ $t("cart.no_items") }}.
      <span class="add-items" @click="goToItems">{{
        $t("cart.add_items")
      }}</span>
    </p>
    <app-cart-total v-if="cartSize > 0" />
  </app-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Container from "../components/Container.vue";
import Item from "../components/Item.vue";
import CartItemsContainer from "../components/CartItemsContainer.vue";
import CartTotal from "../components/CartTotal.vue";

export default {
  name: "CartItems",
  components: {
    appContainer: Container,
    appItem: Item,
    appCartContainer: CartItemsContainer,
    appCartTotal: CartTotal,
  },
  methods: {
    goToItems() {
      this.$router.push("/items");
    },
  },
  computed: {
    ...mapGetters(["cartSize"]),
    ...mapState({
      items: "cartItems",
    }),
  },
};
</script>

<style scoped >
.no-items {
  margin-top: 20px;
}

.add-items {
  color: rgb(20, 72, 156);
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}

.items {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}
</style>