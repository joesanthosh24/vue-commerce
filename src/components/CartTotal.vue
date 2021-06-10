<template>
  <div class="cartTotal">
    <h3>{{ $t("cart.total") }}</h3>
    <p>${{ total }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartTotal",
  computed: {
    ...mapGetters({
      total: "cartTotalPrice",
    }),
  },
};
</script>

<style scoped>
.cartTotal {
  padding: 30px 0 30px 30px;
  text-align: right;
}
</style>