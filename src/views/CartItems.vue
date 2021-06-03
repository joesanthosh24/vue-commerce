<template>
  <app-container>
    <h1>Cart Items</h1>
    <div v-if="cartSize > 0" class="items">
      <p v-for="item in items" :key="item.id">{{ item.name }}</p>
    </div>
    <p v-else class="no-items">
      No Items in Cart.
      <span class="add-items" @click="goToItems">Add Items</span>
    </p>
  </app-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Container from "../components/Container.vue";
import Item from "../components/Item.vue";

export default {
  name: "CartItems",
  components: {
    appContainer: Container,
    appItem: Item,
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