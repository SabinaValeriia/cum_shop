<template lang="pug">
.catalog-item
  .catalog-block
    img(:src="require('../assets/images/'+ product_data.image)" alt="")
    button(@click="addToCart") Додати в корзину
  h2 {{ product_data.name }}
  p.catalog-item__price Price: {{product_data.price}} Uah
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  // data() {
  //   return {
  //     products: [
  //       {
  //         image: "1.jpg",
  //         name: "T-shirt 1",
  //         price: 2100.234234234,
  //         article: "T1",
  //         available: true,
  //         category: "Мужские",
  //       },
  //       {
  //         image: "2.jpg",
  //         name: "T-shirt 2",
  //         price: 3150.12312412,
  //         article: "T2",
  //         available: true,
  //         category: "Женские",
  //       },
  //       {
  //         image: "3.jpg",
  //         name: "T-shirt 3",
  //         price: 4200.51524,
  //         article: "T3",
  //         available: false,
  //         category: "Женские",
  //       },
  //       {
  //         image: "4.jpg",
  //         name: "T-shirt 4",
  //         price: 5300.1245512,
  //         article: "T4",
  //         available: true,
  //         category: "Мужские",
  //       },
  //       {
  //         image: "5.jpg",
  //         name: "T-shirt 5",
  //         price: 6500.3522314,
  //         article: "T5",
  //         available: false,
  //         category: "Женские",
  //       },
  //       {
  //         image: "6.jpg",
  //         name: "T-shirt 6",
  //         price: 8700.4124123,
  //         article: "T6",
  //         available: true,
  //         category: "Женские",
  //       },
  //     ],
  //   };
  // },
  computed: {},
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.catalog {
  &-block{
    position: relative;
    button {
      bottom: 6px;
      left: 0;
      font-family: 'Futura PT';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-align: center;
      color: #474A51;
      background: #DDE8F6 !important;
      height: 70px;
      width: 100%;
      cursor: pointer;
    }
  }
  &-item {
    img {
      height: 420px;
    }
    h2 {
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 130%;
      text-align: center;
      color: #474a51;
      margin: 20px 0 5px;
    }
    p {
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-align: center;
      color: #474a51;
      margin: 0 0 80px;
    }
    button {
      border: none;
      margin: 0;
      background: transparent;
      position: absolute;
    }
  }
}
</style>
