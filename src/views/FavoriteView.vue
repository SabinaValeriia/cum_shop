<template lang="pug">
  div
    header-component
    .container
      .cart
        h1 Вподобане
        h2(v-if="Object.keys(favorite_data).length === 0") У Вас ще не додано ніяких товарів ...
          router-link(:to="{name: 'Catalog'}")
            button До каталогу
        .cart-block(v-else)
          .cart-items
            FavoriteComponent(
              v-for="(item, index) in favorite_data"
              :key="item.article"
              :favorite_item_data="item"
              @deleteFromFavorite="deleteFromFavorite(index)"
            )
    footer-component
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FavoriteComponent from "@/components/FavoriteComponent.vue";
import { mapActions } from "vuex";

export default {
  name: "CartComponent",
  components: {
    CartItem,
    HeaderComponent,
    FooterComponent,
    FavoriteComponent,
  },
  props: {
    favorite_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    deleteFromFavorite(index) {
      this.DELETE_FROM_FAVORITE(index);
    },
    ...mapActions(["DELETE_FROM_FAVORITE"]),
  },
};
</script>
<!-- 
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
  &-items {
    width: 100%;
  }
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

      .cart__total {
        margin-left: 0;
        p {
          margin-bottom: 50px;
        }
        &-block {
        }
      }
    }
  }
}
</style> -->

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
      .cart-items {
      }
      .cart__total {
        margin-left: 0;
        p {
          margin-bottom: 50px;
        }
        &-block {
        }
      }
    }
  }
}
</style>
