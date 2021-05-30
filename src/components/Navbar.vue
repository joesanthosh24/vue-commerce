<template>
  <nav class="navbar">
    <ul>
      <li class="navbar__home">VueCommerce</li>
      <div class="navbar__items">
        <li class="navbar__item">Login</li>
        <li class="navbar__item">Sign Up</li>
        <li class="navbar__item">Cart</li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background-color: rgba(39, 209, 82, 0.7);
  padding: 20px;
}

.navbar > ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar__items {
  display: flex;
  align-items: center;
}

.navbar__item {
  margin-right: 20px;
}
</style>