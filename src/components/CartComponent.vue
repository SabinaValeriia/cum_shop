<template lang="pug">
div
    header-component
    .cart
        h1 Корзина
    p(v-if="!cart_data.length") There are no products in cart ...
    .cart-block(v-else)
        .cart-item
            CartItem(
                v-for="(item, index) in cart_data"
                :key="item.article"
                :cart_item_data="item"
                @deleteFromCart="deleteFromCart(index)"
                @increment="increment(index)"
                @decrement="decrement(index)")
        .cart__total
            p Total:
            p {{ cartTotalCost }} UAH
            .cart-ordering    
                h2 Промокод
</template>
<script>
import CartItem from "./CartItem.vue";
import HeaderComponent from "./HeaderComponent.vue";
import { mapActions } from "vuex";
export default {
    name: "CartComponent",
    components: {
        CartItem, HeaderComponent
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
        ...mapActions([
            "DELETE_FROM_CART",
            "INCREMENT_CART_ITEM",
            "DECREMENT_CART_ITEM",
        ]),
    },
};
</script>

<style lang="scss" scoped>
.cart{
    h1{
        font-family: 'Lovelace';
        font-style: normal;
        font-weight: 400;
        font-size: 52px;
        line-height: 130%;
        text-align: center;
        text-transform: uppercase;
        color: #474A51;
        margin: 80px auto;
    }
    &-block{
        display: flex;
    }
}
</style>
