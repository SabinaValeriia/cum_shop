<template lang="pug">
    div
        header-component
        cart-product-item(:selectedCard="selectedCard", @showCardDetails="showCardDetails")
        //- catalog-component
        footer-component
    </template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CartProductItem from "@/components/CartProductItem.vue";
import CatalogComponent from "@/components/CatalogComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    CartProductItem,
    CatalogComponent
  },
  props: {},
  data() {
    return {
      selectedCard: null
    };
  },
  methods: {
    showCardDetails(cart_item_data) {
      console.log(this.selectedCard)
      this.selectedCard = cart_item_data; // Установите выбранную карточку в переменную
    },
  },
};
</script>
