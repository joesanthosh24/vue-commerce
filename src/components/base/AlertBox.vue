<template>
  <div
    class="alert"
    :style="{
      backgroundColor: color,
      padding: '10px',
      marginTop: '20px',
      marginBottom: '20px',
      color: '#fff',
      width: '75%',
      display: 'flex',
    }"
  >
    <div class="alert-msg">
      <p>{{ msg }}</p>
    </div>
    <span
      @click="clicked"
      v-icon="{
        icon: 'times',
      }"
    ></span>
  </div>
</template>

<script>
export default {
  name: "AlertBox",
  props: {
    msg: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "rgba(5, 116, 33, 0.7)",
    },
  },
  methods: {
    clicked() {
      this.$emit("closeBox");
    },
  },
};
</script>

<style scoped>
.alert-msg {
  flex: 1;
}

.alert-msg > p {
  color: #fff;
}

.alert > span {
  cursor: pointer;
}
</style>