<template>
  <div class="">
    <HeaderComponent></HeaderComponent>
    <CategoryComponent></CategoryComponent>
    <CatalogComponent></CatalogComponent>
    <LookBookHome></LookBookHome>
    <InstaComponent></InstaComponent>
    <!-- <router-link :to="{name: 'Cart', params: {cart_data: CART}}">
        <button>Cart: {{ CART.length }}</button>
    </router-link>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      ></CatalogItem>
    </div> -->
  </div>
</template>
<script>
// import CatalogItem from "@/components/CatalogItem.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CatalogComponent from "@/components/CatalogComponent.vue";
import CategoryComponent from "@/components/CategoryComponent.vue";
import InstaComponent from "@/components/InstaComponent.vue";
import {mapActions, mapGetters} from "vuex"
import LookBookHome from "@/components/LookBookHome.vue";
export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    CategoryComponent,
    CatalogComponent,
    LookBookHome,
    InstaComponent
},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  methods: {
    addToCart(data) {
      this.ADD_TO_CART(data)
    },

    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
        if(response.data) {
            console.log('Data arrived!');
        }
    })
  }
};
</script>
<style lang="scss">
body{
  margin: 0 auto;
  overflow-x: hidden;
}
// .header {
//   background-image: url("../assets/images/bg.jpg");
//   height: 700px;
// }
.catalog {
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>

