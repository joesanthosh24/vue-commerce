<template>
  <nav class="navbar">
    <ul>
      <li class="navbar__home">
        <img src="@/assets/logo.png" alt="Logo" /> <span>VueCommerce</span>
      </li>
      <div class="navbar__items">
        <li class="navbar__item">Login</li>
        <li class="navbar__item">Sign Up</li>
        <li class="navbar__item"><i class="fas fa-shopping-cart"></i></li>
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

.navbar__home {
  display: flex;
  align-items: center;
}

.navbar__home img {
  height: 15px;
  width: 15px;
  margin-right: 10px;
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