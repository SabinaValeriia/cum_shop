<template lang="pug">
.catalog-item
  .catalog-block
    router-link(:to="{ name: 'CartProduct', params: { article: product_data.article }, query: { data: product_data } }")
      img(:src="require('../assets/images/' + product_data.image)" @click="showCardDetails(product_data)" alt="")
      button(@click="addToCart") Додати до кошика
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
