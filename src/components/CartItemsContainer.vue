<template>
  <div class="cart-container">
    <div class="border"></div>
    <div class="items">
      <div class="item" v-for="item in items" :key="item.id">
        <div class="itemImg">
          <img :src="item.imgUrl" :alt="item.name" />
        </div>
        <div class="itemContent">
          <div class="itemName">{{ item.name }}</div>
          <div>{{ item.price }}</div>
          <div>{{ item.amount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>

<style scoped>
.cart-container {
  margin-top: 10px;
}

.border {
  height: 5px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: 15px;
}

.items {
  display: flex;
  flex-direction: column;
}

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
}

.itemName {
  /* margin-left: 40%; */
  width: 190px;
}
</style>