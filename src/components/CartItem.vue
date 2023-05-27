<template lang="pug">
  .cart-item
      img(:src="require('../assets/images/' + cart_item_data.image)" alt="") 
      .cart-item__info
        h2 {{ cart_item_data.name }} 
        .cart-item__info
        .cart-item__block
          p Розмір
          p Колір
        .cart-item__quantity
          .cart-item__block
            p Кількість:
            p
                span(@click="decrementItem") - 
                span {{ cart_item_data.quantity }}
                span(@click="incrementItem") +
        p.article Артикул: {{ cart_item_data.article }}
        p.price {{ cart_item_data.price }} UAH
        button(@click="deleteFromCart")
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  border-top: 1px solid #9f9d9d;
  width: 734px;
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
      margin: 0 0 20px 30px;
      &::after {
        display: inline-block;
        content: "";
        width: 22px;
        height: 19px;
        background-image: url("../assets/images/favorite.svg");
        left: 117px;
        margin-left: 5px;
      }
    }
    button {
      content: "";
      display: inline-block;
      background-image: url("../assets/images/close.svg");
      width: 16px;
      height: 16px;
      position: absolute;
      border: none;
      top: 8px;
      right: 0;
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
