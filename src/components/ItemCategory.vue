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
  width: 100%;
  padding-left: 0;
  display: grid;
  grid-template-columns: 310px 310px 310px 310px 310px;
  list-style-type: none;
  gap: 50px;
}

@media screen and (max-width: 1900px) {
  .products {
    gap: 40px;
  }
}

@media screen and (max-width: 1800px) {
  .products {
    gap: 20px;
  }
}

@media screen and (max-width: 1750px) {
  .products {
    gap: 40px;
    grid-template-columns: 335px 335px 335px 335px;
  }
}

@media screen and (max-width: 1606px) {
  .products {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

@media screen and (max-width: 767px) {
  .products {
    display: flex;
    flex-direction: column;
  }

  .items {
    margin-top: 40px;
  }
}
</style>