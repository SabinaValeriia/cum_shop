<template lang="pug">
.catalog-item
  .catalog-block
    router-link(:to="{ name: 'CartProduct', params: { article: product_data.article }, query: { data: product_data } }")
      img(:src="require('../assets/images/' + product_data.image)" @click="showCardDetails(product_data)" alt="")
      button(@click="addToCart") Додати до кошика
      button(top="0" @click="addToFavorite") Додати до fav
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
    addToFavorite() {
      this.$emit("addToFavorite", this.product_data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/core/global.scss";
.catalog {
  &-block {
    position: relative;
    button {
      bottom: 6px;
      left: 0;
      font-family: "PTSans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-align: center;
      color: #474a51;
      background: #dde8f6 !important;
      height: 70px;
      width: 297px;
      cursor: pointer;
    }
  }
  &-item {
    img {
      width: 297px;
      height: 420px;
    }
    h2 {
      font-family: "PTSans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 130%;
      text-align: center;
      color: #474a51;
      margin: 20px 0 5px;
      width: 298px;
    }
    p {
      font-family: "PTSans", sans-serif;
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
@media (max-width: 1021px) {
  .catalog {
    &-block {
      button {
        bottom: 6px;
        left: 0;
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        text-align: center;
        color: #474a51;
        background: #dde8f6 !important;
        height: 52px;
        width: 219px;
        cursor: pointer;
      }
    }
    &-item {
      img {
        width: 219px;
        height: 310px;
      }
      h2 {
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
        text-align: center;
        color: #474a51;
        margin: 20px 0 5px;
        width: 200px;
      }
      p {
        font-family: "PTSans", sans-serif;
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
}
@media (max-width: 700px) {
  .catalog {
    &-block {
      button {
        bottom: 6px;
        left: 0;
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        text-align: center;
        color: #474a51;
        background: #dde8f6 !important;
        height: 52px;
        width: 100%;
        cursor: pointer;
      }
    }
    &-item {
      img {
        width: 100%;
        height: auto;
      }
      h2 {
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
        text-align: center;
        color: #474a51;
        margin: 20px 0 5px;
        width: 100%;
      }
      p {
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        text-align: center;
        color: #474a51;
        margin: 0 0 0;
      }
      button {
        border: none;
        margin: 0;
        background: transparent;
        position: absolute;
      }
    }
  }
}
</style>
