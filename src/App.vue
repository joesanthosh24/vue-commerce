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
  async created() {
    await this.$store.dispatch("initApp");
    this.$store.dispatch("changeLocale", this.$i18n.locale);
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

/* Colors */
.white {
  color: #fff;
}

.red {
  color: rgb(223, 7, 7);
}

/* Spacing */
.space-right-sm {
  margin-right: 5px;
}

.space-right-md {
  margin-right: 10px;
}

.space-right-lg {
  margin-right: 15px;
}

.space-left-sm {
  margin-left: 5px;
}

.space-left-md {
  margin-left: 10px;
}

.space-left-lg {
  margin-left: 15px;
}
</style>
