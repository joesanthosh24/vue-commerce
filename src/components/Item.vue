<template>
  <li class="product">
    <div class="productImage" @mouseenter="enterImage" @mouseleave="leaveImage">
      <img :src="item.imgUrl" :alt="item.name" />
      <transition name="appear">
        <app-button
          pt="10"
          pb="10"
          pl="20"
          pr="20"
          ml="auto"
          mr="auto"
          :secondary="true"
          v-if="showDetailButton"
          br="15"
          >More Details</app-button
        >
      </transition>
    </div>
    <div class="productDetails">
      <p>
        {{ item.name.substring(0, 25)
        }}<span v-if="item.name.length > 25">...</span>
      </p>
      <span>${{ item.price }}</span>
    </div>
  </li>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Item",
  components: {
    appButton: Button,
  },
  props: ["item"],
  data() {
    return {
      showDetailButton: false,
    };
  },
  methods: {
    enterImage() {
      this.showDetailButton = true;
    },
    leaveImage() {
      this.showDetailButton = false;
    },
  },
};
</script>

<style scoped>
.product {
  margin-right: 20px;
}

.productImage {
  height: 400px;
  width: 400px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: 3px 3px 4px 3px rgba(0, 0, 0, 0.6);
  position: relative;
}

.productImage > img {
  height: 100%;
  width: 100%;
  transition: all 0.5s linear;
}

.productDetails {
  display: flex;
  justify-content: space-between;
}

button {
  position: absolute;
  top: 200px;
  left: 35%;
}

.appear-enter-from {
  opacity: 0;
}

.appear-enter-active {
  transition: opacity 0.5s linear;
}
</style>