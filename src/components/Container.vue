<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style>
.container {
  padding: 150px 90px 90px;
  height: 100%;
}
</style>