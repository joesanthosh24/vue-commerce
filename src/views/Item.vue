<template>
  <app-container>
    <div class="item">
      <img :src="item.imgUrl" :alt="item.name" />
      <app-item-table :item="item" />
    </div>
    <app-button
      mt="15"
      pt="10"
      pb="10"
      pl="20"
      pr="20"
      br="20"
      :primary="true"
      @click="addItemToCart(item)"
    >
      <i class="fas fa-cart-plus white space-right-sm"></i>
      {{ $t("shop_item.add") }}
    </app-button>
  </app-container>
</template>

<script>
import { mapActions } from "vuex";

import { itemsCollection } from "@/includes/firebase";

import Container from "@/components/Container.vue";
import ItemTable from "@/components/ItemTable.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Item",
  components: {
    appContainer: Container,
    appItemTable: ItemTable,
    appButton: Button,
  },
  data() {
    return {
      item: {},
    };
  },
  async created() {
    await itemsCollection.onSnapshot((items) => {
      items.docs.forEach((doc) => {
        if (doc.id === this.$route.params.id) {
          this.item = { ...doc.data(), id: doc.id };
        }
      });
    });
  },
  methods: {
    ...mapActions(["addItemToCart"]),
  },
};
</script>

<style scoped>
.item {
  text-align: center;
}

.item > img {
  width: 100%;
  height: 500px;
}
</style>