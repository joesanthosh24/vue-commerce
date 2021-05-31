<template>
  <div>
    <app-navbar></app-navbar>
  </div>
  <app-container>
    <router-view />
  </app-container>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Container from "./components/Container.vue";

export default {
  components: {
    appNavbar: Navbar,
    appContainer: Container,
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
</style>
