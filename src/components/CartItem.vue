<template>
  <div class="item">
    <div class="itemImg">
      <img :src="item.imgUrl" :alt="item.name" />
    </div>
    <div class="itemContent">
      <div class="itemName">{{ item.name }}</div>
      <div>${{ item.price }}</div>
      <div class="itemAmount">
        <i class="fas fa-chevron-up" @click="increment(item)"></i>
        <span>{{ item.amount }}</span>
        <i class="fas fa-chevron-down" @click="decrement(item)"></i>
      </div>
      <div class="itemDelete">
        <i class="fas fa-times" @click="deleteItem(item)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CartItem",
  props: ["item"],
  methods: {
    ...mapActions({
      increment: "increaseAmount",
      decrement: "decreaseAmount",
      deleteItem: "removeItemFromCart",
    }),
  },
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-bottom: 25px;
  padding-top: 25px;
  align-items: center;
  border-bottom: 1px solid lightgrey;
}

.itemImg {
  height: 200px;
  width: 200px;
}

.itemImg > img {
  width: 100%;
  height: 100%;
}

.itemContent {
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
}

.itemName {
  width: 190px;
}

.itemAmount {
  display: flex;
  flex-direction: column;
}

.fas {
  color: #000;
  cursor: pointer;
}

.fa-chevron-up:hover {
  color: rgba(39, 209, 82, 0.7);
}

.fa-chevron-down:hover {
  color: rgb(223, 7, 7);
}

.itemDelete {
  margin-right: 30px;
}

.fa-times {
  color: rgb(223, 7, 7);
}
</style>