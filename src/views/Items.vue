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
      shopItems: "shopItems",
    }),
  },
  created() {
    this.items = this.shopItems;
  },
};
</script>

<style>
</style>