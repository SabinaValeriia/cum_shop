<template lang="pug">
div
  //- header-component
  .catalog.container
    h1 Каталог
    .catalog__list
      CatalogItem(
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart")
    button Переглянути все
</template>
<script>
import CatalogItem from "@/components/CatalogItem.vue";
import HeaderComponent from "./HeaderComponent.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CatalogComponent",
  components: {
    CatalogItem,
    HeaderComponent,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    addToCart(data) {
      this.ADD_TO_CART(data);
    },

    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived!");
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.catalog {
  h1 {
    font-family: "Futura PT";
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474a51;
    margin: 50px auto 30px;
  }
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  button {
    padding: 15px 35px;
    height: 51px;
    border: 1px solid #474a51;
    background: transparent;
    font-family: "Futura PT";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474a51;
    margin-bottom: 160px;
  }
}
</style>
