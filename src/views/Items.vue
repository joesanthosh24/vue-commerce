<template>
  <app-container>
    <app-item-category
      v-for="item of items"
      :key="item.category"
      :category="item.category"
      :items="item.products"
      :disableAddButton="!isLoggedIn"
    >
    </app-item-category>
  </app-container>
</template>

<script>
import { mapState } from "vuex";

import store from "@/store";

import Container from "@/components/Container.vue";
import ItemCategory from "@/components/ItemCategory.vue";

export default {
  name: "Items",
  components: {
    appContainer: Container,
    appItemCategory: ItemCategory,
  },
  data() {
    return {
      items: {},
    };
  },
  computed: {
    ...mapState({
      isLoggedIn: "userLoggedIn",
    }),
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.userLoggedIn) {
      console.log(store.getters.userLoggedIn);
      next();
    } else {
      next({ name: "Home" });
    }
  },
  created() {
    console.log(store.getters.shopItems);
    this.items = store.getters.shopItems;
  },
};
</script>

<style>
</style>