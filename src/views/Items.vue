<template>
  <div class="items" v-for="entry of itemsArray" :key="entry.id">
    <h2>{{ entry.category }}</h2>
    <ul class="products">
      <li class="product" v-for="item of entry.products" :key="item.id">
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Items",
  data() {
    return {
      items: {
        1: {
          category: "Clothes",
          products: [
            {
              id: 1,
              name: "Canada Goose Carson Parka Jacket",
              imgUrl:
                "https://cdn.shopify.com/s/files/1/1230/9376/products/CGO-3805M_7EGraphite.jpg?v=1604738969",
            },
            {
              id: 2,
              name: "Nike Air Max 90 Infrared",
              imgUrl:
                "https://images.stockx.com/360/Nike-Air-Max-90-Infrared-2020/Images/Nike-Air-Max-90-Infrared-2020/Lv2/img01.jpg?auto=compress&w=559&q=90&dpr=2&updated_at=1609366208&fit=clip&fm=jpg&ixlib=react-9.1.1",
            },
          ],
        },
        2: {
          category: "Electronics",
          products: [
            {
              id: 1,
              name: "Macbook Pro M1 Chip",
              imgUrl:
                "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/macOS-11.3-M1-MacBook-Pro.jpg?w=1200&h=600&crop=1",
            },
            {
              id: 2,
              name: "Playstation 5",
              imgUrl:
                "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$",
            },
          ],
        },
      },
    };
  },
  computed: {
    itemsArray() {
      const entries = Object.keys(this.items);

      return entries.map((entry) => ({ id: entry, ...this.items[entry] }));
    },
  },
};
</script>

<style scoped>
.items {
  display: flex;
  flex-direction: column;
}

/* h2 {
  color: black;
} */

.products {
  margin: 5px 10px 10px 0;
  padding-left: 0;
  display: flex;
  list-style-type: none;
}

.product {
  margin-right: 10px;
}

/* p {
  color: black;
} */
</style>