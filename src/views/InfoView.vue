<template lang="pug">
    div
        header-component
        .container
            .info 
                h1 доставка і оплата
                h2 Як оформити замовлення
                .list
                    p.list--p 1. Додати товар потрібного кольору та розміру в кошик і натиснути на кнопку «ОФОРМИТИ ЗАМОВЛЕННЯ»
                    p.list--p 2. Заповнити у діалоговому вікні дані про одержувача і вибрати найбільш зручні із запропонованих системою способи доставки та оплати
                    p.list--p 3. Надіслати замовлення в систему, натиснувши на кнопку «ПЕРЕЙТИ ДО ОПЛАТИ» або «ОФОРМИТИ ЗАМОВЛЕННЯ»
                p Система автоматично надає замовленню номер та статус «прийнятий». Після чого він надходить в обробку менеджером інтернет-магазину, який зв'яжеться з вами за вказаними контактними даними для підтвердження наявності на складі товару із замовлення та уточнення деталей оплати та відправлення
                p Замовлення, що надійшли до системи у п'ятницю після 17:00, обробляються співробітниками в понеділок вранці. Їхня доставка проводиться в робочому режимі
                p Відмовитись від зареєстрованого замовлення можна на будь-якому етапі до оплати, повідомивши про своє рішення менеджеру інтернет-магазину за номером телефону +380954396899
                h2 оплата заказа
                p Ви можете оплатити замовлення банківською карткою на сайті або при отриманні банківською карткою або готівкою
                p На онлайн-оплату товару вам надається три банківські дні. Якщо протягом цього терміну платіж не здійснено і гроші на розрахунковий рахунок компанії не надійшли, замовлення анулюється.
                h2 доставка кур'єрською службою
                p Здійснюється по всій Україні службою кур'єрської доставки. Ви можете погоджувати з менеджером інтернет-магазину зручну для вас логістичну компанію.
        footer-component
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import InstaComponent from '@/components/InstaComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {

components: {
    HeaderComponent, InstaComponent, FooterComponent
},
props: {
    
},
data() {
    return {}
},
}
</script>


<style scoped lang="scss">
@import "../assets/styles/core/global.scss";
.container {
  max-width: 100%;
  margin: 0 60px;
  @media (max-width: 1021px) {
    max-width: 100%;
    margin: 0 30px;
  }
  @media (max-width: 375px) {
    margin: 0 10px;
  }
}
.info {
  margin: 80px auto;
  h1 {
    font-family: "Lovelace", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 130%;
    text-align: center;
    text-transform: uppercase;
    color: #474a51;
    margin: 0 auto;
  }
  h2 {
    margin: 80px auto 30px;
    font-family: 'PTSans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474A51;
    text-align: left;
  }
  p{
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #474A51;
    margin: 0 0 10px;
    text-align: left;
    &.list--p{
        margin: 0 0 5px;
    }
    
  }
  .list{
    margin: 0 0 10px;
  }
}
@media (max-width: 768px) {
    .info {
  margin: 50px auto;
  h2 {
    margin: 80px auto 20px;
  }
} 
}
@media (max-width: 375px) {
    .info {
  margin: 80px auto;
  h1 {
    font-size: 30px;
    text-align: left;
  }
  h2 {
    margin: 50px auto 30px;
    font-size: 20px;
  }
  
}
}
</style>
