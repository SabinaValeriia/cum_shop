<template lang="pug">
  div
    header-component
      //- div(v-if="relatedProducts.length > 0")
      //-   .catalog__list
      //-       CatalogItem(
      //-         v-for="relatedProduct in relatedProducts"
      //-         :key="relatedProduct.article"
      //-         :product_data="relatedProduct"
      //-         @addToCart="addToCart")
    .related
        .related--block
          div.related--blocks
            p.distance від LOYLEN
            h3 LOOKBOOK
            p Неповторні образи, підібрані спеціально для вас
            img.img--f(src="../assets/images/good1.png")
            p Класична сорочка 3000 UAH
            p Штани з ременем 3000 UAH
          div.related--blocks
            img.img-s(src="../assets/images/good2.png")
            p Комбінезон 8000 UAH
    .related
      .related--block-distance
          div.related--blocks
            img.img-t(src="../assets/images/good3.png")
            p Класична сорочка 3000 UAH
            p Штани з ременем 3000 UAH
    .related
        .related--block
          div.related--blocks
            img.img--fth(src="../assets/images/good4.png")
            p Комбінезон 8000 UAH
              
          div.related--blocks
            img.img-fv(src="../assets/images/good5.png")
            p Класична сорочка 3000 UAH
            p Штани з ременем 3000 UAH
    .related
      .related--block-distance
          div.related--blocks
            img.img-t(src="../assets/images/good6.png")
            p Класична сорочка 3000 UAH
            p Штани з ременем 3000 UAH
            
    footer-component.distance

</template>

<script>
import CatalogItem from "@/components/CatalogItem.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    CatalogItem,
    HeaderComponent,
    FooterComponent,
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

<style lang="scss" scoped>
@import "../assets/styles/core/global.scss";
.related {
  height: auto;
  p {
    font-family: "PTSans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474a51;
    margin: 0;
    text-align: left;
    &.distance {
      margin-top: 110px;
    }
  }
  &--block {
    display: flex;
    justify-content: space-between;
    margin-left: 60px;
    &-distance {
      display: flex;
      margin: 80px 0 80px 278px;
    }

    h3 {
      font-family: "Lovelace", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 52px;
      line-height: 130%;
      color: #474a51;
      margin: 10px 0 30px 0px;
      text-align: left;
    }
    .img--f {
      margin: 50px 0 15px -118px;
    }
    .img-s {
      height: 740px;
    }
    .img-fv {
      width: 625px;
      height: 417px;
      margin-right: 60px;
      background-repeat: no-repeat;
      margin-bottom: 15px;
    }
    .img--fth {
      width: 410px;
      height: 620px;
      margin-bottom: 15px;
    }
  }
  .img-t {
    margin-bottom: 15px;
  }
}
@media (max-width: 1156px) and (min-width: 763px) {
  .related {
    p {
      &.distance {
        margin-top: 50px;
      }
    }
    &--block {
      margin-left: 30px;
      &-distance {
        display: flex;
        margin: 80px 0 80px 278px;
      }
      .img--f {
        margin: 30px 0 15px -118px;
      }
      .img-s {
        height: 517px;
        margin-right: 30px;
      }
      .img-fv {
        width: 344px;
        height: 229px;
        margin-right: 30px;
      }
      .img--fth {
        width: 410px;
        height: 620px;
        margin-bottom: 15px;
      }
    }
    .img-t {
      margin-bottom: 15px;
    }
  }
}
@media (max-width: 842px) and (min-width: 320px) {
  .related {
    p {
      font-size: 14px;
      &.distance {
        margin-top: 50px;
      }
    }
    &--blocks {
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
    }
    &--block {
      flex-direction: column;
      margin-left: 10px;
      &-distance {
        display: flex;
        margin: 0px 0 0px 10px;
      }

      h3 {
        font-size: 30px;
        margin: 10px 0 20px 0px;
      }
      .img--f {
        margin: 50px 0 15px 0;
        width: 300px;
        height: 454px;
      }
      .img-s {
        width: 300px;
        height: 450px;
      }
      .img-fv {
        width: 300px;
        height: 200px;
        margin-right: 0px;
        background-repeat: no-repeat;
        margin-bottom: 15px;
      }
      .img--fth {
        width: 300px;
        height: 450px;
        margin-bottom: 15px;
      }
    }
    .img-t {
      width: 300px;
      height: 450px;
    }
  }
}
</style>
