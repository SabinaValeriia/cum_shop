<template>
    <div class="cart">
        <router-link :to="{name: 'Catalog'}">
            <button>Back to catalog</button>
         </router-link>
        <h1>Cart</h1>
        <p v-if="!cart_data.length">There are no products in cart ...</p>
        <CartItem
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"></CartItem>
        <div class="cart__total">
            <p>Total:</p>
            <p>{{ cartTotalCost }} UAH</p>
        </div>
    </div>
</template>
<script>
import CartItem from './CartItem.vue';
import { mapActions } from 'vuex';
export default {
name: "CartComponent",
components: {
    CartItem
},
props: {
    cart_data: {
        type: Array,
        default() {
            return []
        }
    }
},
data() {
    return {}
},
computed: {
    cartTotalCost() {
        let result = [];
        if (this.cart_data.length) {
            for(let item of this.cart_data) {
            result.push(item.price * item.quantity);
            }
            result = result.reduce(function(sum, el) {
                return sum + el;
            })
            return result;
        } else {
            return 0;
        }
    }
},
methods:{
    deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
    },
    increment(index){
        this.INCREMENT_CART_ITEM(index)
    },
    decrement(index){
        this.DECREMENT_CART_ITEM(index)
    },
    ...mapActions(['DELETE_FROM_CART', 'INCREMENT_CART_ITEM', 'DECREMENT_CART_ITEM'])
}
}
</script>

<style></style>