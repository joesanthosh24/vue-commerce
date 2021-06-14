<template>
  <app-container>
    <div class="item">
      <img :src="item.imgUrl" :alt="item.name" />
      <app-item-table :item="item" />
    </div>
  </app-container>
</template>

<script>
import { itemsCollection } from "@/includes/firebase";

import Container from "@/components/Container.vue";
import ItemTable from "@/components/ItemTable.vue";

export default {
  name: "Item",
  components: {
    appContainer: Container,
    appItemTable: ItemTable,
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
          this.item = doc.data();
        }
      });
    });
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