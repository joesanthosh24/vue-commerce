<template>
  <div class="table">
    <div class="table-row">
      <div class="table-title">
        <p>{{ $t("itemDetails.name") }}</p>
      </div>
      <div class="table-content">
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="table-row">
      <div class="table-title">
        <p>{{ $t("itemDetails.category") }}</p>
      </div>
      <div class="table-content">
        <p>{{ $t(`categories.${[categoryLowerCase]}`) }}</p>
      </div>
    </div>
    <div class="table-row">
      <div class="table-title">
        <p>{{ $t("itemDetails.description") }}</p>
      </div>
      <div class="table-content">
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="table-row">
      <div class="table-title">
        <p>{{ $t("itemDetails.price") }}</p>
      </div>
      <div class="table-content">
        <p>$ {{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemTable",
  props: ["item"],
  computed: {
    categoryLowerCase() {
      return String(this.item.category).toLowerCase();
    },
  },
};
</script>

<style scoped>
.table {
  display: flex;
  margin-top: 25px;
  flex-direction: column;
}

.table-row {
  display: flex;
}

.table-title {
  padding: 15px;
  border: 1px solid #eee;
  width: 100px;
  text-align: left;
}

.table-content {
  padding: 15px;
  border: 1px solid #eee;
  text-align: left;
  flex: 1;
}
</style>