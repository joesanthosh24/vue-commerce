<template>
  <nav class="navbar">
    <ul>
      <router-link to="/">
        <li class="navbar__home">
          <img src="@/assets/logo.png" alt="Logo" /> <span>VueCommerce</span>
        </li>
      </router-link>
      <div class="navbar__items">
        <router-link to="/login">
          <li class="navbar__item">Login</li>
        </router-link>
        <router-link to="/signup">
          <li class="navbar__item">Sign Up</li>
        </router-link>
        <router-link to="/cart">
          <li class="navbar__item">
            <i v-if="cartSize === 0" class="fas fa-shopping-cart"></i>
            <i v-else class="fas fa-cart-plus"></i>
          </li>
        </router-link>
      </div>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["cartSize"]),
  },
};
</script>

<style scoped>
.navbar {
  background-color: rgba(39, 209, 82, 0.7);
  padding: 20px;
  position: fixed;
  width: 100vw;
  z-index: 99;
}

.navbar__home {
  display: flex;
  align-items: center;
}

.navbar__home img {
  height: 15px;
  width: 15px;
  margin-right: 10px;
}

.navbar__home span {
  color: #fff;
}

.navbar > ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  cursor: pointer;
  color: #fff;
}

.navbar__items {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.navbar__item {
  margin-right: 20px;
}

.fa-shopping-cart {
  color: #fff;
}

.fa-cart-plus {
  color: rgb(223, 7, 7);
}
</style>