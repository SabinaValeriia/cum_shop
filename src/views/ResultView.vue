<template lang="pug">
    div.container
        header-component
        h1 Дякую за покупку!
        h2 Замовлення №{{ orderNumber }} оформлено
        h3 Детали заказа отправлены на почту E-MAIL. Наш менеджер скоро свяжется с вами
        router-link(:to="{name: 'Catalog'}")
            button До каталогу
        footer-component
    </template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  props: {},
  data() {
    return {
      orderNumber: "",
    };
  },
  created() {
    this.generateOrderNumber();
  },
  methods: {
    generateOrderNumber() {
      const timestamp = Date.now();
      const randomNum = Math.floor(Math.random() * 10000);
      this.orderNumber = timestamp + randomNum;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/core/global.scss";
.container {
    max-width: 100%;
  margin: 0 60px;
  @media (max-width: 1021px) {
    max-width: 100%;
    margin: 0 30px;
  }
  @media (max-width: 375px) {
    max-width: 100%;
    margin: 0 10px;
  }
}

h1 {
  font-family: "PTSans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: #474a51;
  margin: 60px auto 30px;
}
h2 {
  font-family: "PTSans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #474a51;
  margin: 0 auto 10px;
}
h3 {
  font-family: "PTSans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: #474a51;
  margin: 0 auto 50px;
}
button {
  font-family: "PTSans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #474a51;
  padding: 15px 35px;
  width: 255px;
  height: 51px;
  background: #dde8f6;
  border: none;
  margin-bottom: 100px;
}
@media (max-width: 1021px) {
  h1 {
    text-align: left;
    margin: 50px auto 30px;
  }
  h2 {
    font-size: 20px;
    margin: 0 auto 15px;
    text-align: left;
  }
  h3 {
    font-size: 16px;
    text-align: left;
    margin: 0 auto 30px;
  }
  button {
    width: 100%;
    margin-bottom: 50px;
  }
}
</style>
