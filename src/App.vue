<template>
  <div>
    <app-navbar></app-navbar>
  </div>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Container from "./components/Container.vue";

export default {
  components: {
    appNavbar: Navbar,
    appContainer: Container,
  },
  created() {
    this.$store.dispatch("initLogin");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #000;
}

a {
  text-decoration: none;
}

i {
  color: #fff;
}

.error {
  text-align: center;
  color: rgb(173, 83, 83);
  margin-bottom: 10px;
  width: 75%;
  padding: 5px;
}
</style>
