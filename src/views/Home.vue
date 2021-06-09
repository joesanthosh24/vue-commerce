<template>
  <div class="home">
    <img src="@/assets/logo.png" alt="Logo" />
    <div class="home__content">
      <h1>Welcome to VueCommerce</h1>
      <p>Shop online for electronics, clothing, games, and more</p>
      <div class="home__buttons">
        <router-link to="/login">
          <app-button
            pl="15"
            pr="15"
            pt="5"
            pb="5"
            mr="15"
            :dark="true"
            br="15"
          >
            Login
          </app-button>
        </router-link>
        <router-link to="/signup">
          <app-button pl="15" pr="15" pt="5" pb="5" :light="true" br="15">
            Sign Up
          </app-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Button from "../components/Button.vue";

export default {
  name: "Home",
  components: {
    appButton: Button,
  },
  computed: {
    ...mapState({
      isLoggedIn: "userLoggedIn",
    }),
  },
  created() {
    if (this.isLoggedIn) {
      this.$router.push("/items");
    }
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(39, 209, 82, 0.7),
    rgba(5, 116, 33, 0.7)
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.home__content {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.home__content h1 {
  font-size: 34px;
}

.home__buttons {
  display: flex;
  margin-top: 10px;
}

.button {
  padding: 5px 15px;
  border: none;
}

.shopButton {
  margin-right: 15px;
  background-color: #000;
  color: #fff;
}
</style>
