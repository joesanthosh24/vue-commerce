<template>
  <nav class="navbar">
    <ul>
      <router-link to="/">
        <li class="navbar__home">
          <img src="@/assets/logo.png" alt="Logo" /> <span>VueCommerce</span>
        </li>
      </router-link>
      <div class="navbar__items">
        <li class="navbar__item">
          <app-language-selector />
        </li>
        <template v-if="!isLoggedIn">
          <router-link to="/login">
            <li class="navbar__item">{{ $t("login") }}</li>
          </router-link>
          <router-link to="/signup">
            <li class="navbar__item">{{ $t("signup") }}</li>
          </router-link>
        </template>
        <template v-else>
          <router-link to="/items">
            <li class="navbar__item">{{ $t("shop") }}</li>
          </router-link>
          <li class="navbar__item" @click.prevent="signOut">
            {{ $t("logout") }}
          </li>
          <router-link to="/cart">
            <li class="navbar__item">
              <span
                v-if="cartSize === 0"
                v-icon="{
                  icon: 'shopping-cart',
                }"
              ></span>
              <span
                v-else
                v-icon="{
                  icon: 'cart-plus',
                  color: 'red',
                }"
              ></span>
            </li>
          </router-link>
        </template>
      </div>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import LanguageSelect from "./LanguageSelect.vue";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["cartSize"]),
    ...mapState({
      isLoggedIn: (state) => state.auth.userLoggedIn,
    }),
  },
  components: {
    appLanguageSelector: LanguageSelect,
  },
  methods: {
    async signOut() {
      await this.$store.dispatch("signOut");

      this.$store.dispatch("hideLanguageBox");

      if (this.$route.meta.requiresAuth) {
        this.$router.push("/");
      }
    },
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
</style>