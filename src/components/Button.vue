<template>
  <button
    :style="{
      paddingTop: `${pt}px` || '5px',
      paddingBottom: `${pb}px` || '5px',
      paddingRight: `${pr}px` || '5px',
      paddingLeft: `${pl}px` || '5px',
      marginTop: `${mt}px` || 0,
      marginBottom: `${mb}px` || 0,
      marginLeft: `${ml}px` || 0,
      marginRight: `${mr}px` || 0,
      color: light ? '#000' : '#fff',
      backgroundColor: dark
        ? '#000'
        : light
        ? '#fff'
        : primary
        ? 'rgba(39, 209, 82, 0.7)'
        : secondary
        ? 'rgba(5, 116, 33, 0.7)'
        : '#000',
      borderRadius: `${br}px` || 0,
      border: 'none',
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: [
    "pt",
    "pb",
    "pr",
    "pl",
    "mr",
    "ml",
    "mt",
    "mb",
    "primary",
    "secondary",
    "dark",
    "light",
    "br",
  ],
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>