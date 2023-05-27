<template lang="pug">
    div.container
      //- header-component
  
      .catalog
        h1 Каталог
        .catalog__list
          CatalogItem(
            v-for="product in sortedProducts"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
            )
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
      return {
        sortType: "price",
        sortDirection: "asc",
        minPrice: "",
        maxPrice: "",
        show: true,
        addedProduct: null,
      };
    },
    computed: {
      ...mapGetters(["PRODUCTS", "CART"]),
      sortedProducts() {
        let products = [...this.PRODUCTS];
  
        if (this.minPrice) {
          products = products.filter(
            (product) => product.price >= Number(this.minPrice)
          );
        }
  
        if (this.maxPrice) {
          products = products.filter(
            (product) => product.price <= Number(this.maxPrice)
          );
        }
  
        if (this.sortType === "price") {
          products.sort((a, b) =>
            this.sortDirection === "asc" ? a.price - b.price : b.price - a.price
          );
        } else {
          products.sort((a, b) =>
            this.sortDirection === "asc"
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name)
          );
        }
  
        return products;
      },
    },
    methods: {
      addToCart(data) {
        this.ADD_TO_CART(data);
      },
      handleAddToCart() {
        this.$emit("addToCart", this.product_data);
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
  .container {
    max-width: 100%;
    margin: 0 60px;
    @media (max-width: 1021px) {
      max-width: 100%;
      margin: 0 30px;
    }
  }
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
      justify-content: center;
      gap: 30px;
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
  