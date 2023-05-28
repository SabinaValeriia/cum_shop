<template lang="pug">
  div.main
    //- modale-test
    header-component
    category-component
    catalog-main-page
    router-link(:to="{name: 'Catalog'}") 
      button Переглянути все
    look-book-home
    insta-component
    footer-component
</template>
<script>
// import CatalogItem from "@/components/CatalogItem.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ModaleTest from "@/components/ModaleTest.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CatalogMainPage from "@/components/CatalogMainPage.vue";
import CategoryComponent from "@/components/CategoryComponent.vue";
import InstaComponent from "@/components/InstaComponent.vue";
import { mapActions, mapGetters } from "vuex";
import LookBookHome from "@/components/LookBookHome.vue";
export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    CategoryComponent,
    CatalogMainPage,
    LookBookHome,
    InstaComponent,
    FooterComponent,
    ModaleTest
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
body {
  margin: 0 auto;
}
.main{
  overflow-x: hidden;
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
</style>
