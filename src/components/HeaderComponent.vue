<template lang="pug">
.container
  .header(v-if="isTabletScreen")
    
    router-link(:to="{name: 'Home'}")
          img(src="../assets/images/logo.svg")
    ul 
      li  
        router-link(:to="{name: 'Catalog'}")  Каталог
      li 
        router-link(:to="{name: 'LookBook'}") lookbook
      li 
        router-link(:to="{name: 'About'}") про бренд
      li 
        router-link(:to="{name: 'Info'}") інформація
    .header--block 
        img(src="../assets/images/search.svg")
        router-link(:to="{name: 'Registration'}")
          img(src="../assets/images/lr.svg")
        img(src="../assets/images/favorite.svg")
        router-link(:to="{name: 'Cart', params: {cart_data: CART}}")
          .header--cart
            img.header__cart--img(src="../assets/images/cart.svg")  
            p {{ CART.length }}
  .header(v-else-if="isMobileScreens")
    router-link(:to="{name: 'Home'}")
          img(src="../assets/images/logo.svg")
    //- ul 
    //-   li  
    //-     router-link(:to="{name: 'About'}") Каталог
    //-   li 
    //-     router-link(:to="{name: 'Lookbook'}") lookbook
    //-   li 
    //-     router-link(:to="{name: 'About'}") про бренд
    //-   li 
    //-     router-link(:to="{name: 'Info'}") інформація
    .header--block 
        //- img(src="../assets/images/search.svg")
        //- router-link(:to="{name: 'Registration'}")
        //-   img(src="../assets/images/lr.svg")
        //- img(src="../assets/images/favorite.svg")
        router-link(:to="{name: 'Cart', params: {cart_data: CART}}")
          .header--cart
            img.header__cart--img(src="../assets/images/cart.svg")  
            p {{ CART.length }}
  .header(v-else)
    ul 
      li  
        router-link(:to="{name: 'Catalog'}") Каталог
      li 
        router-link(:to="{name: 'LookBook'}") lookbook
      li 
        router-link(:to="{name: 'About'}") про бренд
      li 
        router-link(:to="{name: 'Info'}") інформація
    router-link(:to="{name: 'Home'}")
      img(src="../assets/images/logo.svg")
    .header--block 
      img(src="../assets/images/search.svg")
      router-link(:to="{name: 'Registration'}")
        img(src="../assets/images/lr.svg")
      img(src="../assets/images/favorite.svg")
      router-link(:to="{name: 'Cart', params: {cart_data: CART}}")
        .header--cart
          img.header__cart--img(src="../assets/images/cart.svg")  
          p {{ CART.length }}
</template>
<script>
import CatalogItem from "@/components/CatalogItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    isTabletScreen() {
      return window.innerWidth > 768 && window.innerWidth <= 1021;
    },
    isMobileScreens() {
      return window.innerWidth <= 767;
    },
  },
  methods: {
    addToCart(data) {
      this.ADD_TO_CART(data);
    },

    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
  },
 
};
</script>

<style scoped lang="scss">
.container {
  max-width: 100%;
  margin: 0 60px;
  @media (max-width: 1021px) {
    max-width: 100%;
    margin: 0 30px;
  }
  @media (max-width: 776px) {
    max-width: 100%;
    margin: 0 10px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  border-bottom: 1px solid #eeeeee;

  &--block {
    position: relative;
    display: flex;

    img {
      margin-right: 30px;
    }
  }

  .header__cart {
    &--img {
      margin-right: 16px;
    }
  }

  p {
    position: absolute;
    top: -8px;
    right: 0;
    font-family: "Futura PT";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #474a51;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      a {
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #474a51;
        cursor: pointer;
        text-decoration: none;

        &:first-child {
          margin-right: 25px;
        }
      }
    }
  }

  img {
    cursor: pointer;

    &:nth-child(2) {
      margin: 0 30px;
    }
  }
}
@media (max-width: 1021px) {
  .header {
    img {
      height: 25px;
    }
    &--block {
      img {
        margin-right: 20px;
      }
    }

    .header__cart {
      &--img {
        margin-right: 16px;
      }
    }

    p {
      position: absolute;
      top: -8px;
      right: 0;
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #474a51;
    }

    ul {
      list-style: none;
      display: flex;

      li {
        a {
          font-family: "Futura PT";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #474a51;
          cursor: pointer;
          text-decoration: none;

          &:first-child {
            margin-right: 20px;
          }
        }
      }
    }

    img {
      cursor: pointer;
      height: 17px;

      &:nth-child(2) {
        margin: 0 20px;
      }
    }
  }
}
</style>
