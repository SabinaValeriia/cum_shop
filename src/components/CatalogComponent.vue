<template>
  <div class="catalog container">
    <!-- <router-link :to="{name: 'Cart', params: {cart_data: CART}}">
        <button>Cart: {{ CART.length }}</button>
    </router-link> -->
    <h1>Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      ></CatalogItem>
    </div>
    <button>Переглянути все</button>
  </div>
</template>
<script>
import CatalogItem from "@/components/CatalogItem.vue";
import {mapActions, mapGetters} from "vuex"
export default {
  name: "CatalogComponent",
  components: {
    CatalogItem,
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
.catalog {
  h1 {
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474A51;
    margin: 160px auto 80px;
  }
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  button {
    padding: 15px 35px;
    height: 51px;
    border: 1px solid #474A51;
    background: transparent;
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474A51;
    margin-bottom: 160px;
  }
}
</style>
