<template lang="pug">
div
    header-component
    catalog-component
    footer-component
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CatalogComponent from "@/components/CatalogComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    HeaderComponent,
    CatalogComponent,
    FooterComponent
  },
  props: {},
  data() {
    return {};
  },
};
</script>
