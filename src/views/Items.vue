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

import { itemsCollection } from "@/includes/firebase";

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
      isLoggedIn: (state) => state.auth.userLoggedIn,
    }),
  },
  async created() {
    await itemsCollection.onSnapshot((items) => {
      items.docs.forEach((doc) => {
        const { category, description, imgUrl, name, price } = doc.data();
        const id = doc.id;

        if (!this.items[category]) {
          this.items[category] = {};
          this.items[category].category = category;
          this.items[category].products = [];
        }

        this.items[category].products.push({
          description,
          imgUrl,
          name,
          price,
          id,
        });
      });
    });
  },
};
</script>

<style>
</style>