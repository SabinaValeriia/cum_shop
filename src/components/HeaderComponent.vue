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
        router-link(:to="{name: 'Registration'}")
          img(src="../assets/images/lr.svg")
        router-link(:to="{name: 'Favorite', params: {favorite_data: FAVORITE}}")
          img(src="../assets/images/favorite.svg")
        router-link(:to="{name: 'Cart', params: {cart_data: CART}}")
          .header--cart
            img.header__cart--img(src="../assets/images/cart.svg")  
            p {{ CART.length }}
  .header(v-else-if="isMobileScreens")
    <div class="burger-menu">
      <input type="checkbox" id="burger-checkbox" v-model="isOpen" @change="toggleMenu">
      <label for="burger-checkbox" class="burger-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div class="menu" v-if="isOpen">
        ul 
          li  
            router-link(:to="{name: 'Catalog'}")  Каталог
          li 
            router-link(:to="{name: 'LookBook'}") lookbook
          li 
            router-link(:to="{name: 'About'}") про бренд
          li 
            router-link(:to="{name: 'Info'}") інформація
      </div>
    </div>
    router-link(:to="{name: 'Home'}")
          img(src="../assets/images/logo.svg")
    .header--block 
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
      input(type="text" v-if="showInput" v-model="searchQuery" placeholder="Пошук" @input="search")
      router-link(:to="{name: 'Registration'}")
        img(src="../assets/images/lr.svg")
      router-link(:to="{name: 'Favorite' , params: {favorite_data: FAVORITE}}")
        img(src="../assets/images/favorite.svg")
      router-link(:to="{name: 'Cart', params: {cart_data: CART}}")
        .header--cart
          img.header__cart--img(src="../assets/images/cart.svg")  
          p {{ CART.length }}
</template>
<script>
import CatalogItem from "@/components/CatalogItem.vue";
import { mapActions, mapGetters } from "vuex";
import { debounce } from "lodash";
export default {
  components: {
    CatalogItem,
  },
  data() {
    return {
      showInput: false,
      searchQuery: "",
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "FAVORITE"]),
    isTabletScreen() {
      return window.innerWidth > 768 && window.innerWidth <= 1021;
    },
    isMobileScreens() {
      return window.innerWidth <= 767;
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    addToFavorite(data) {
      console.log(data);
      this.ADD_TO_FAVORITE(data);
    },

    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART", "ADD_TO_FAVORITE"]),
    search: debounce(function () {
      console.log("Search query:", this.searchQuery);
    }, 300),
    showSearchInput() {
      this.showInput = !this.showInput;
      if (!this.showInput) {
        this.searchQuery = "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.burger-menu {
  position: relative;
}

.burger-icon {
  display: block;
  width: 30px;
  height: 15px;
  cursor: pointer;
  user-select: none;
}

.burger-icon span {
  display: block;
  width: 100%;
  height: 1px;
  background-color: #285DA1;
  margin-bottom: 5px;
  transition: transform 0.3s;
}

.burger-menu input[type="checkbox"] {
  display: none;
}

.burger-menu input[type="checkbox"]:checked ~ .menu {
  display: block;
}

.menu {
  display: none;
  position: absolute;
  top: 37px;
  left: 0;
  width: 375px;
  height: 100vh;
  background-color: #FFFFFF;
  padding: 10px;
  z-index: 1;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 20px;
}

.menu a {
  color: #285DA1;
  text-decoration: none;
}
.container {
  max-width: 100%;
  margin: 0 60px;
  @media (max-width: 1021px) {
    max-width: 100%;
    margin: 0 30px;
  }
  @media (max-width: 776px) {
    max-width: 100%;
    margin: 0 30px;
  }
  @media (max-width: 375px) {
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
    padding: 0;

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
@media (max-width: 375px) {
  .header {
    height: 50px;
    ul{
        flex-direction: column;
        li { 
          a{
            text-align: left;
          }
        }
    }
  }
}
</style>
