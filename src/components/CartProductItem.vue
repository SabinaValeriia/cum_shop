<template lang="pug">
.container
  .product-main(v-if="productData")
    .product-main--imgs
        .product-main--imgs-block
            img(:src="require('../assets/images/' + productData.image)" alt="")
            img(:src="require('../assets/images/' + productData.imageS)" alt="")
        img(:src="require('../assets/images/' + productData.imageT)" alt="")
    .product-main--block
        p Артикул - {{productData.article }}
        h1 {{ productData.name }}
        h2 Вартість - {{ productData.price }} UAH
        h3 Тканина:
        p {{ productData.descF }}
        h3 Розміри:
        p Розміри: {{ productData.descS }}
        h3 Виробник:
        p Виробник: {{ productData.descT }}
        .product-main--button 
            button(@click="addToCart") Додати до кошика
            
   
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartItem",
  data() {
    return {
      productData: {},
    };
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
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
  created() {
    // Получение артикула товара из параметров маршрута
    // const article = this.$route.params.article;

    // Получение данных о товаре из параметров запроса
    this.productData = this.$route.query.data;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/core/global.scss";

.container {
  max-width: 100%;
  margin: 0 60px;
  @media (max-width: 1021px) {
    max-width: 100%;
    margin: 0 30px;
  }
}
.product-main {
  display: flex;
  margin: 81px auto;
  &--block {
    margin-left: 30px;
  }
  p {
    font-family: "PTSans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #9f9d9d;
    text-align: left;
    margin: 10px 0;
  }
  h1 {
    font-family: "Lovelace", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 130%;
    text-transform: uppercase;
    color: #474a51;
    text-align: left;
    margin: 20px 0 30px;
  }
  h2 {
    font-family: "PTSans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474a51;
    text-align: left;
    margin: 30px 0;
  }
  h3 {
    font-family: "PTSans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #474a51;
    text-align: left;
    margin: 30px 0 0;
  }
  &--imgs {
    display: flex;
    gap: 30px;
    img {
      width: 407px;
      height: 610px;
    }
    &-block {
      display: flex;
      flex-direction: column;
      gap: 30px;
      img {
        height: 290px;
        width: 188px;
      }
    }
  }
  &--button {
    button {
      font-family: "PTSans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-align: center;
      color: #474a51;
      background: #dde8f6 !important;
      height: 51px;
      cursor: pointer;
      border: none;
      width: 236px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0 30px;
    }
  }
}
</style>
