<template lang="pug">
  .cart-item
    img(:src="require('../assets/images/' + favorite_item_data.image)"  alt="")
    .cart-item__info
      .favorite
        h2 {{ favorite_item_data.name }}
      .cart-item__block
        p Розмір {{ favorite_item_data.descS }}
      .cart-item__quantity
      p.article Артикул: {{ favorite_item_data.article }}
      p.price {{ favorite_item_data.price }} UAH
      button(@click="deleteFromFavorite")
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    favorite_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromFavorite() {
      this.$emit("deleteFromFavorite");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  border-top: 1px solid #9f9d9d;
  width: 100%;
  padding: 30px 0;
  img {
    height: 200px;
  }
  &__block {
    display: flex;
  }
  &__info {
    position: relative;
    width: 100%;
    .favorite {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    p {
      text-align: left;
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #474a51;
      margin: 0 0 0 30px;
      span {
        margin: 0 5px;
      }
    }
    p.article {
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #9f9d9d;
      margin: 44px 0 10px 30px;
    }
    p.price {
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #474a51;
    }
    h2 {
      text-align: left;
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #474a51;
      margin: 0 0 0 30px;
    }
    button {
      content: "";
      display: inline-block;
      background: url("../assets/images/close.svg");
      width: 16px;
      height: 16px;
      position: absolute;
      border: none;
      top: 8px;
      right: 0;
      &.favorite {
        content: "";
        display: inline-block;
        background: url("../assets/images/favorite.svg");
        width: 22px;
        height: 20px;
        position: relative;
        border: none;
        margin-left: 5px;
      }
    }
  }
}
@media (max-width: 1021px) {
  .cart-item {
    width: 100%;
    img {
      width: 198px;
      height: 200px;
    }
    &__info {
      p {
        margin: 0 0 0 20px;
      }
      p.article {
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: #9f9d9d;
        margin: 44px 0 10px 20px;
      }
      h2 {
        margin: 0 0 20px 20px;
      }
    }
  }
}
@media (max-width: 776px) {
  .cart-item {
    &__info {
      p.price {
        font-size: 20px;
      }
    }
    h2 {
      font-size: 15px;
      width: 150px;
      &::after {
        margin-left: 27px;
      }
    }
  }
}
</style>
