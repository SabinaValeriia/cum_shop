<template>
    <div class="cart-items">
        <div class="cart-item">
            <img :src="require('../assets/images/'+ cart_item_data.image)" alt="">
            <div class="cart-item__info">
                <p>{{  cart_item_data.name }}</p>
                <p>{{  cart_item_data.price }}</p>
                <p>{{  cart_item_data.article }}</p>
            </div>
            <div class="cart-item__quantity">
                <p>Quantity: 
                    <span>
                        <span @click="decrementItem">-</span>
                        {{ cart_item_data.quantity }}
                        <span @click="incrementItem">+</span>
                    </span></p>
            </div>
            <button @click="deleteFromCart">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartItem",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {

        }
    },
    computed: {

    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1)
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart');
        },
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem() {
            this.$emit('increment')
        },
        
    },
}
</script>

<style lang="scss">
.cart-item{
    display: flex;
    img{
        height: 200px;
    }
}
</style>