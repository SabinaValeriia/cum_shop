import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    plugins: [createPersistedState()],
    mutations: {
        
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if(state.cart.length) {
                let isProductExists = false;
                state.cart.map(function(item) {
                    if(item.article === product.article) {
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if(!isProductExists) {
                    state.cart.push(product)
                }
            }else {
                state.cart.push(product)
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) => {
            if(state.cart[index].quantity > 1){
                state.cart[index].quantity--
            }
        }
    },
    //асинхронные
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:4000/products', {
                method: "GET"
            })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product)
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        },
        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
        },
        
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }

});

export default store;

// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";

// Vue.use(Vuex);

// let store = new Vuex.Store({
//   state: {
//     products: [],
//     cart: []
//   },
//   mutations: {
//     SET_PRODUCTS_TO_STATE: (state, products) => {
//       state.products = products;
//     },
//     SET_CART: (state, product) => {
//       if (state.cart.length) {
//         let isProductExists = false;
//         state.cart.map(function (item) {
//           if (item.article === product.article) {
//             isProductExists = true;
//             item.quantity++;
//           }
//         });
//         if (!isProductExists) {
//           state.cart.push(product);
//         }
//       } else {
//         state.cart.push(product);
//       }
//       // Update local storage
//       localStorage.setItem("cart", JSON.stringify(state.cart));
//     },
//     REMOVE_FROM_CART: (state, index) => {
//       state.cart.splice(index, 1);
//       // Update local storage
//       localStorage.setItem("cart", JSON.stringify(state.cart));
//     },
//     INCREMENT: (state, index) => {
//       state.cart[index].quantity++;
//       // Update local storage
//       localStorage.setItem("cart", JSON.stringify(state.cart));
//     },
//     DECREMENT: (state, index) => {
//       if (state.cart[index].quantity > 1) {
//         state.cart[index].quantity--;
//         // Update local storage
//         localStorage.setItem("cart", JSON.stringify(state.cart));
//       }
//     },
//     // Load cart data from local storage
//     LOAD_CART_FROM_STORAGE: (state) => {
//       const cartData = localStorage.getItem("cart");
//       if (cartData) {
//         state.cart = JSON.parse(cartData);
//       }
//     }
//   },
//   // Asynchronous actions
//   actions: {
//     GET_PRODUCTS_FROM_API({ commit }) {
//       return axios('http://localhost:4000/products', {
//         method: "GET"
//       })
//         .then((products) => {
//           commit('SET_PRODUCTS_TO_STATE', products.data);
//           return products;
//         })
//         .catch((error) => {
//           console.log(error);
//           return error;
//         });
//     },
//     ADD_TO_CART({ commit }, product) {
//       commit('SET_CART', product);
//     },
//     DELETE_FROM_CART({ commit }, index) {
//       commit('REMOVE_FROM_CART', index);
//     },
//     INCREMENT_CART_ITEM({ commit }, index) {
//       commit('INCREMENT', index);
//     },
//     DECREMENT_CART_ITEM({ commit }, index) {
//       commit('DECREMENT', index);
//     },
//     LOAD_CART_FROM_STORAGE({ commit }) {
//       commit('LOAD_CART_FROM_STORAGE');
//     }
//   },
//   getters: {
//     PRODUCTS(state) {
//       return state.products;
//     },
//     CART(state) {
//       return state.cart;
//     }
//   }
// });

// // Load cart data from local storage when the app initializes
// store.dispatch('LOAD_CART_FROM_STORAGE');

// export default store;
