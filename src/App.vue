<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex"
export default {
  name: "HomeView",
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

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
