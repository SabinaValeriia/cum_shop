// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";

// Vue.use(Vuex);

// let store = new Vuex.Store({
//   state: {
//     products: [],
//     cart: [],
//   },
//   mutations: {
//     SET_PRODUCTS_TO_STATE: (state, products) => {
//       state.products = products;
//     },
//     SET_CART: (state, product) => {
//       const existingProductIndex = state.cart.findIndex(
//         (item) => item.article === product.article
//       );
//       if (existingProductIndex !== -1) {
//         state.cart[existingProductIndex].quantity++;
//       } else {
//         product.quantity = 1;
//         state.cart.push(product);
//       }
//     },
//     REMOVE_FROM_CART: (state, index) => {
//       state.cart.splice(index, 1);
//     },
//     INCREMENT: (state, index) => {
//       state.cart[index].quantity++;
//     },
//     DECREMENT: (state, index) => {
//       if (state.cart[index].quantity > 1) {
//         state.cart[index].quantity--;
//       }
//     },
//   },
//   actions: {
//     GET_PRODUCTS_FROM_API({ commit }) {
//       return axios("http://localhost:4000/products", {
//         method: "GET",
//       })
//         .then((products) => {
//           commit("SET_PRODUCTS_TO_STATE", products.data);
//           return products;
//         })
//         .catch((error) => {
//           console.log(error);
//           return error;
//         });
//     },
//     ADD_TO_CART({ commit }, product) {
//       commit("SET_CART", product);
//     },
//     DELETE_FROM_CART({ commit }, index) {
//       commit("REMOVE_FROM_CART", index);
//     },
//     INCREMENT_CART_ITEM({ commit }, index) {
//       commit("INCREMENT", index);
//     },
//     DECREMENT_CART_ITEM({ commit }, index) {
//       commit("DECREMENT", index);
//     },
//   },
//   getters: {
//     PRODUCTS(state) {
//       return state.products;
//     },
//     CART(state) {
//       return state.cart;
//     },
//   },
// });

// // сохраняем данные в local storage перед закрытием страницы
// window.addEventListener("beforeunload", () => {
//   const stateToSave = JSON.stringify(store.state);
//   localStorage.setItem("myStore", stateToSave);
// });

// // пытаемся загрузить данные из local storage при создании Vuex Store
// const stateFromStorage = localStorage.getItem("myStore");
// if (stateFromStorage) {
//   store.replaceState(JSON.parse(stateFromStorage));
// }

// export default store;
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const STORAGE_KEY = "my_vue_app";

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    // favorite: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.article === product.article
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity++;
      } else {
        product.quantity = 1;
        state.cart.push(product);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
    },
    // SET_FAVORITE: (state, product) => {
    //   const existingProductIndex = state.favorite.findIndex(
    //     (item) => item.article === product.article
    //   );
    //   if (existingProductIndex !== -1) {
    //     state.favorite[existingProductIndex].quantity++;
    //   } else {
    //     product.quantity = 1;
    //     state.favorite.push(product);
    //   }
    //   localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favorite));
    // },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
    },
    // REMOVE_FROM_FAVORITE: (state, index) => {
    //   state.favorite.splice(index, 1);
    //   localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favorite));
    // },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
      }
    },
    LOAD_STATE_FROM_LOCAL_STORAGE: (state) => {
      const savedCart = localStorage.getItem(STORAGE_KEY);
      if (savedCart) {
        state.cart = JSON.parse(savedCart);
      }
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:4000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    // ADD_TO_FAVORITE({ commit }, product) {
    //   commit("SET_FAVORITE", product);
    // },
    // DELETE_FROM_FAVORITE({ commit }, index) {
    //   commit("REMOVE_FROM_FAVORITE", index);
    // },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT", index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT", index);
    },
    LOAD_STATE_FROM_LOCAL_STORAGE({ commit }) {
      commit("LOAD_STATE_FROM_LOCAL_STORAGE");
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    // FAVORITE(state) {
    //   return state.favorite;
    // },
  },
});

// Load cart state from local storage when the app starts
store.dispatch("LOAD_STATE_FROM_LOCAL_STORAGE");

export default store;
