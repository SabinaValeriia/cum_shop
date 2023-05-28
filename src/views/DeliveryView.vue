<template lang="pug">
    div
        header-component
        .container 
            .delivery 
                h1 оформлення замовлення
                h2 спосіб доставки
                .input
                    input(type="checkbox")
                    label(for="") Доставка новою поштою
                .input
                    input(type="checkbox")
                    label(for="") Доставка укр поштою
                .delivery--block
                    form.info(type="submit")
                        h2 Отримувач
                        input(type="text" placeholder="Ім'я" required)
                        input(type="text" placeholder="Прізвище" required)
                        input(type="phone" placeholder="Телефон" required)
                        input(type="email" placeholder="Пошта" required)
                    form.info(type="submit")
                        h2 Адреса
                        input(type="text" placeholder="Індекс" required)
                        input(type="text" placeholder="Місто" required)
                        input(type="text" placeholder="Область" required)
                        input(type="text" placeholder="Відділення пошти" required)
                    div
                        h2 спосіб оплати
                        .input
                            input(type="checkbox")
                            label(for="") Карткою на сайті
                        .input
                            input(type="checkbox")
                            label(for="") Оплата при отриманні
                        h2(style="margin: 0") загалом до сплати:  {{ totalCost }} UAH
                        router-link(:to="{ name: 'Result',  }")
                            button Оформити замовлення
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
  computed: {
    totalCost() {
      return this.$route.params.totalCost || 0;
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
  @media (max-width: 767px) {
    max-width: 100%;
    margin: 0 10px;
  }
}
.delivery {
  &--block {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 80px;
  }
  button {
    padding: 15px 0px;
    width: 212px;
    height: 51px;
    background: #dde8f6;
    font-family: "PTSans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474a51;
    border: none;
    margin-top: 30px;
    display: block;
    margin: 30px 0 0;
  }
  h1 {
    font-family: "Lovelace", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 130%;
    text-align: center;
    text-transform: uppercase;
    color: #474a51;
    margin: 30px auto 0px;
  }
  h2 {
    font-family: "PTSans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474a51;
    margin: 80px 0 30px 0;
    text-align: left;
  }
  .input {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    label {
      font-family: "PTSans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #474a51;
      margin-left: 20px;
    }
    input {
      width: 20px;
      height: 20px;
      border: 0.5px solid #474a51;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    input {
      border-bottom: 1px solid #474a51;
      border-top: none;
      border-left: none;
      border-right: none;
      width: 328px;
      padding-bottom: 10px;
      margin-bottom: 30px;
      outline: none;
      &::placeholder {
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: #474a51;
      }
    }
  }
}
@media (max-width: 1021px) {
  .delivery {
    h2 {
      margin: 50px 0 30px 0;
    }
    .input {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  }
}
@media (max-width: 767px) {
    .delivery {
  button {
    width: 100%;
    font-size: 12px;
  }
  h1 {
    font-size: 30px;
    text-align: left;
    margin: 50px auto 0px;
  }
  h2 {
    font-size: 20px;
    margin: 20px 0 20px 0;
    text-align: left;
  }
  
  
}
}
</style>
