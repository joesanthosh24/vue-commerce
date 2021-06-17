<template>
  <li class="product">
    <div class="productImage" @mouseenter="enterImage" @mouseleave="leaveImage">
      <img :src="item.imgUrl" :alt="item.name" />
      <transition name="appear">
        <div class="detailButtonContainer" v-if="showDetailButton">
          <base-button
            pt="10"
            pb="10"
            pl="20"
            pr="20"
            ml="auto"
            mr="auto"
            :secondary="true"
            br="15"
            @click="goToItem"
            >{{ $t("shop_item.details") }}</base-button
          >
        </div>
      </transition>
    </div>
    <div class="productDetails">
      <p>
        {{ item.name.substring(0, 25)
        }}<span v-if="item.name.length > 25">...</span>
      </p>
      <span>{{ $n(item.price, "currency", "en") }}</span>
    </div>
    <base-button
      mt="5"
      pt="10"
      pb="10"
      pl="20"
      pr="20"
      br="20"
      :primary="true"
      width="expanded"
      @click="addItemToCart(item)"
      :disabled="disableButton"
    >
      <i class="fas fa-cart-plus white space-right-sm"></i>
      {{ $t("shop_item.add") }}
    </base-button>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Item",
  props: ["item", "disableButton"],
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
    goToItem() {
      this.$router.push(`/items/${this.item.id}`);
    },
    ...mapActions(["addItemToCart"]),
  },
};
</script>

<style scoped>
.product {
  margin-right: 20px;
}

.productImage {
  height: 264px;
  width: 100%;
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

.detailButtonContainer {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 264px;
  width: 100%;
  top: 0;
}

.appear-enter-from {
  opacity: 0;
}

.appear-enter-active {
  transition: opacity 0.5s linear;
}

i {
  margin-right: 10px;
}

@media screen and (max-width: 1606px) {
  .product {
    height: auto;
    width: 20%;
  }
}

@media screen and (max-width: 1180px) {
  .product {
    height: auto;
    width: 40%;
  }
}

@media screen and (max-width: 767px) {
  .product {
    width: 100%;
  }
}
</style>