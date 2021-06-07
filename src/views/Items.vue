<template>
  <app-container>
    <app-item-category
      v-for="item of itemsArray"
      :key="item.id"
      :category="item.category"
      :items="item.products"
      :disableAddButton="!isLoggedIn"
    >
    </app-item-category>
  </app-container>
</template>

<script>
import { mapState } from "vuex";

import Container from "../components/Container.vue";
import ItemCategory from "../components/ItemCategory.vue";

export default {
  name: "Items",
  components: {
    appContainer: Container,
    appItemCategory: ItemCategory,
  },
  data() {
    return {
      items: {
        1: {
          category: "Clothes/Sneakers",
          products: [
            {
              id: 1,
              name: "Canada Goose Carson Parka Jacket",
              imgUrl:
                "https://cdn.shopify.com/s/files/1/1230/9376/products/CGO-3805M_7EGraphite.jpg?v=1604738969",
              price: 55,
            },
            {
              id: 2,
              name: "Nike Air Max 90 Infrared",
              imgUrl:
                "https://images.stockx.com/360/Nike-Air-Max-90-Infrared-2020/Images/Nike-Air-Max-90-Infrared-2020/Lv2/img01.jpg?auto=compress&w=559&q=90&dpr=2&updated_at=1609366208&fit=clip&fm=jpg&ixlib=react-9.1.1",
              price: 85,
            },
            {
              id: 3,
              name: "Beline Dress",
              imgUrl:
                "https://cdn.shopify.com/s/files/1/1484/3102/products/f6.png?v=1586263833",
              price: 45,
            },
            {
              id: 4,
              name: "Bally Crew Neck T-Shirt",
              imgUrl:
                "https://www.ballyofswitzerland.com/dw/image/v2/BFJV_PRD/on/demandware.static/-/Sites-bly-master-product-catalog/default/dwa003a15f/images/original/Tops_&_Shirts_M5CA562F_7S260_010F.jpg?sw=580&sh=800&sm=fit",
              price: 25,
            },
            {
              id: 5,
              name: "Kevin Durant Jersey",
              imgUrl:
                "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3838000/ff_3838664-85ae6c6e2a4fe3def3dd_full.jpg&w=340",
              price: 100,
            },
            {
              id: 6,
              name: "Lakers Championship Shirt",
              imgUrl:
                "https://cdn.vox-cdn.com/thumbor/qqWLDnmkKeK8EGnw-Y4HNNapc88=/0x0:600x600/1200x800/filters:focal(255x127:351x223)/cdn.vox-cdn.com/uploads/chorus_image/image/67616995/fanatics_espn_600x600_mens_tee.0.jpg",
              price: 35,
            },
            {
              id: 7,
              name: "Sketchers Work Shoes",
              imgUrl:
                "https://www.millionpiece.com/wp-content/uploads/2019/01/Skechers-Work-Shoes-2.jpg",
              price: 32,
            },
            {
              id: 8,
              name: "A&F Women's Jeans",
              imgUrl:
                "https://img.abercrombie.com/is/image/anf/KIC_155-2090-2264-277_prod1?policy=product-medium",
              price: 24,
            },
            {
              id: 9,
              name: "Navy Wool Scarf",
              imgUrl:
                "https://www.bodenimages.com/productimages/zoom/20wwin_a0807_nav.jpg",
              price: 19,
            },
          ],
        },
        2: {
          category: "Electronics",
          products: [
            {
              id: 10,
              name: "Macbook Pro M1 Chip",
              imgUrl:
                "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/macOS-11.3-M1-MacBook-Pro.jpg?w=1200&h=600&crop=1",
              price: 2100,
            },
            {
              id: 11,
              name: "Playstation 5",
              imgUrl:
                "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$",
              price: 510,
            },
            {
              id: 12,
              name: "Beats Noise Cancelling Headphones",
              imgUrl:
                "https://cdn.shopify.com/s/files/1/0036/4806/1509/products/6255b59cf770f1559185480767470aa063e48eab_square2963711_1_140x140@2x.jpg?v=1601994669",
              price: 320,
            },
            {
              id: 13,
              name: "128 GB IPhone XR",
              imgUrl:
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-white-select-201809?wid=940&hei=1112&fmt=png-alpha&.v=1551226036668",
              price: 660,
            },
            {
              id: 14,
              name: "Amazon Fitbit Versa 2",
              imgUrl:
                "https://images-na.ssl-images-amazon.com/images/I/61TMCC7npPL._AC_SX425_.jpg",
              price: 212,
            },
            {
              id: 15,
              name: "Surface Pro 7",
              imgUrl:
                "https://icdn.digitaltrends.com/image/digitaltrends/microsoftsurfacepro7-7.jpg",
              price: 680,
            },
            {
              id: 16,
              name: "Xbox Series X",
              imgUrl:
                "https://static.lenovo.com/na/landing-pages/xbox/lenovo-xbox-brandpage-series-x.jpg",
              price: 550,
            },
            {
              id: 17,
              name: 'Dell 49" Monitor',
              imgUrl:
                "https://images-na.ssl-images-amazon.com/images/I/81ZXKUvoyuL._AC_SX450_.jpg",
              price: 1200,
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
    ...mapState({
      isLoggedIn: "userLoggedIn",
    }),
  },
};
</script>

<style>
</style>