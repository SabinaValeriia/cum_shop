<!-- <template lang="pug">
div
    header-component
    .container
        .cart
            h1 Кошик
            h2(v-if="!cart_data.length") У Вас ще не додано ніяких товарів ...
                router-link(:to="{name: 'Catalog'}")
                    button До каталогу
            .cart-block(v-else)
                .cart-items
                    CartItem(
                        v-for="(item, index) in cart_data"
                        :key="item.article"
                        :cart_item_data="item"
                        @deleteFromCart="deleteFromCart(index)"
                        @increment="increment(index)"
                        @decrement="decrement(index)")
                .cart__total
                    .cart__total-block
                        h2 Сума замовлення
                        h2 {{ cartTotalCost }} UAH
                    .cart__total-block
                        h2 Загалом
                        h2 {{ cartTotalCost }} UAH
                    button Оформити замовлення
                    p Натискаючи на кнопку, ви підтверджуєте, що ознайомлені та згодні з офертою та політикою конфіденційності.
                    //- .cart-ordering    
                    //-     h2 Промокод
    footer-component
</template>
<script>
import CartItem from "./CartItem.vue";
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import { mapActions } from "vuex";
export default {
  name: "CartComponent",
  components: {
    CartItem,
    HeaderComponent,
    FooterComponent,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart_data));
    },
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
  },
  created() {
  this.$store.dispatch("loadCartFromLocalStorage");
}

};
</script> -->

<template lang="pug">
  div
    header-component
    .container
      .cart
        h1 Кошик
        h2(v-if="!cart_data.length") У Вас ще не додано ніяких товарів ...
          router-link(:to="{name: 'Catalog'}")
            button До каталогу
        .cart-block(v-else)
          .cart-items
            CartItem(
              v-for="(item, index) in cart_data"
              :key="item.article"
              :cart_item_data="item"
              @deleteFromCart="deleteFromCart(index)"
              @increment="increment(index)"
              @decrement="decrement(index)"
            )
          .cart__total
            .cart__total-block
              h2 Сума замовлення
              h2 {{ cartTotalCost }} UAH
            .cart__total-block
              h2 Загалом
              h2 {{ cartTotalCost }} UAH
            button(@click="checkout") Оформити замовлення
            p Натискаючи на кнопку, ви підтверджуєте, що ознайомлені та згодні з офертою та політикою конфіденційності.
    footer-component
</template>

<script>
import CartItem from "./CartItem.vue";
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import { mapActions } from "vuex";

export default {
  name: "CartComponent",
  components: {
    CartItem,
    HeaderComponent,
    FooterComponent,
  },
  props: {
    cart_data: {
      type: Object,
      default() {
        return {};
      },
      required: true,
    },
  },
  computed: {
    cartTotalCost() {
    return this.cart_data.reduce((sum, item) => {
      return sum + (item.price || 0) * (item.quantity || 0);
    }, 0);
  },  },
  methods: {
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
      this.saveCartToLocalStorage();
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
      this.saveCartToLocalStorage();
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
      this.saveCartToLocalStorage();
    },
    checkout() {
      // Perform checkout process
      // ...
      // Save cart data to localStorage
      this.saveCartToLocalStorage();
    },
    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart_data));
    },
    loadCartFromLocalStorage() {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        this.$store.commit("SET_CART", JSON.parse(savedCart));
      }
    },
    ...mapActions(["DELETE_FROM_CART", "INCREMENT_CART_ITEM", "DECREMENT_CART_ITEM"]),
  },
  created() {
    this.loadCartFromLocalStorage();
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
.cart {
  min-height: calc(100vh - 556px);
  button {
    padding: 15px 35px;
    background: #dde8f6;
    font-family: "Futura PT";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474a51;
    border: none;
    cursor: pointer;
    display: block;
    margin: 30px auto 0;
  }
  a {
    text-decoration: none;
  }
  h2 {
    font-family: "Futura PT";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    color: #9f9d9d;
  }
  h1 {
    font-family: "Lovelace";
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 130%;
    text-align: center;
    text-transform: uppercase;
    color: #474a51;
    margin: 80px auto;
  }
  &-block {
    display: flex;

    .cart__total {
      margin-left: 109px;
      width: 100%;
      &-block {
        display: flex;
        justify-content: space-between;
        h2 {
          font-family: "Futura PT";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 130%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #474a51;
          margin: 10px 0;
          text-align: left;
        }
      }
      p {
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: #474a51;
        text-align: left;
      }
      button {
        padding: 15px 35px;
        background: #dde8f6;
        border: none;
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #474a51;
        display: block;
        margin: 34px 0 0 0;
      }
    }
  }
}
@media (max-width: 1021px) {
  .cart {
    min-height: calc(100vh - 514px);
    button {
      padding: 15px 35px;
      background: #dde8f6;
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #474a51;
      border: none;
      cursor: pointer;
      display: block;
      margin: 30px auto 0;
    }
    a {
      text-decoration: none;
    }
    h2 {
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-align: center;
      color: #9f9d9d;
    }
    h1 {
      font-family: "Lovelace";
      font-style: normal;
      font-weight: 400;
      font-size: 52px;
      line-height: 130%;
      text-align: center;
      text-transform: uppercase;
      color: #474a51;
      margin: 50px auto;
    }
    &-block {
      flex-direction: column;
        .cart-items{
        }
      .cart__total {
        margin-left: 0;
        p{
            margin-bottom: 50px;
        }
        &-block {
          
        }
        
       
      }
    }
  }
}
</style>
