<template lang="pug">
.container
    .header 
        ul 
            router-link(:to="{name: 'Catalog'}")
                li Каталог
            li lookbook
            li про бренд
            li інформація
        router-link(:to="{name: 'Home'}")
            img(src="../assets/images/logo.svg")
        .header__block 
            img(src="../assets/images/search.svg")
            router-link(:to="{name: 'Registration'}")
                img(src="../assets/images/lr.svg")
            img(src="../assets/images/favorite.svg")
            router-link(:to="{name: 'Cart', params: {cart_data: CART}}")
                img(src="../assets/images/cart.svg" class="header__cart")  
                p {{ CART.length }}
    </router-link>
            
</template>
<script>
import CatalogItem from "@/components/CatalogItem.vue";
import {mapActions, mapGetters} from "vuex"
export default {
  components: {
    CatalogItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  methods: {
    addToCart(data) {
      this.ADD_TO_CART(data)
    },

    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
        if(response.data) {
            console.log('Data arrived!');
        }
    })
  }
};
</script>

<style lang="scss">
.container {
    max-width: 1280px;
    margin: 0 auto;
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    &__block{
        position: relative;
    }
    &__cart {
        margin: 0 20px 0 30px;
    }
    p {
        position: absolute;
        top: -8px;
        right: 0;
        font-family: 'Futura PT';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: #474A51;
    }
    ul {
        list-style: none;
        display: flex;
        li {
            font-family: 'Futura PT';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #474A51;
            cursor: pointer;
            &:nth-child(2){
                margin: 0 25px;
            }
            &:nth-child(3){
                margin: 0 25px 0 25px;
            }
        }
    }
    img{ 
        cursor: pointer;
        &:nth-child(2){
            margin: 0 30px;
        }
    }
}
</style>