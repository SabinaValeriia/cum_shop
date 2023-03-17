<template>
  <div class="catalog">
    <router-link :to="{name: 'Cart', params: {cart_data: CART}}">
        <button>Cart: {{ CART.length }}</button>
    </router-link>
    <h1>Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      ></CatalogItem>
    </div>
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
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
