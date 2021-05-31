<template>
  <div class="items">
    <h2>{{ category }}</h2>
    <ul class="products">
      <app-item v-for="item of items" :key="item.id" :item="item"> </app-item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "ItemCategory",
  components: {
    appItem: Item,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.items {
  display: flex;
  flex-direction: column;
}

.products {
  margin: 5px 10px 10px 0;
  padding-left: 0;
  display: flex;
  align-items: center;
  list-style-type: none;
  overflow-x: scroll;
}
</style>