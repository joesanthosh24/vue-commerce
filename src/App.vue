<template>
  <div id="app">
    <app-navbar></app-navbar>
  </div>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    appNavbar: Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  margin: 0;
  font-family: "Montserrat", sans-serif;
}
</style>
