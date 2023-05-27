<template lang="pug">
.related-item
  .catalog__list
          CatalogItem(
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.article"
            :product_data="relatedProduct"
            @addToCart="addToCart")

</template>
  
<script>
import CatalogItem from "@/components/CatalogItem.vue";
import HeaderComponent from "./HeaderComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {

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
    relatedProducts() {
      const relatedItems = [];
      const addedProductCategories = this.CART.map((item) => item.category);

      this.PRODUCTS.forEach((product) => {
        if (addedProductCategories.includes(product.category)) {
          relatedItems.push(product);
        }
      });

      return relatedItems;
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
  
  <style scoped>
  .related-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
  .related-item img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  </style>