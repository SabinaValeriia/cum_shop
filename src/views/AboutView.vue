<template lang="pug">
  div 
    header-component
    .about 
      .about--block
        h1 про бренд <br> Loylen
        p Бренд LOYLEN – одяг для тих, хто любить поєднувати різні стилі. З 2020 року ми створюємо спортивні, класичні та повсякденні колекції одягу для жінок. Це дозволяє кожній жінці поєднувати різні елементи гардеробу та створити для себе унікальний образ на різні випадки життя.
        p.distance LOYLEN люблять за якість та натуральні тканини від турецьких та італійських фабрик. Весь одяг виготовляється переважно з бавовни, шерсті, льону, за якими легко доглядати
        p.tablet У нас своє власне виробництво – починаючи від лекал, розробки зразків та пошиття партії. Всі моделі створюються за сучасними трендами та перевагами наших клієнтів. Одяг LOYLEN стане для вас втіленням усіх найкращих образів.
      img.img-f(src="../assets/images/about1.png", alt="")
    .about.mobile
      img.img-s(src="../assets/images/about2.png", alt="")
      .about--block
        h1 Для кого
        p.tablet Одяг бренду LOYLEN за рахунок своєї універсальності – чудовий варіант для дівчат різних вікових категорій. Нас вибирають модниці від 20 до 50 років, які хочуть створити стильний образ для будь-якого випадку життя
        p.distance.tablet LOYLEN цінують за високу якість одягу, зручність у носінні та прийнятні ціни. Завдяки власному виробництву лекала виходять з ідеальною посадкою і ідеально виглядають на різних типах фігури. 
        p.tablet Одяг легко поєднувати, можна комбінувати різні стилі
    .about 
      .about--block
        h1 техніка  <br> Виробництва
        p LOYLEN – це не лише онлайн-магазин, а й власна фабрика з виробництва одягу. Над кожною модною колекцією працюють дизайнер, модельєр-конструктор, технолог, уважний до деталей закрійник і кравець.
        p.distance Ця команда фахівців мають великий досвід у легкій промисловості та створенні одягу.
        p  Саме тому всі моделі виходять ідеальними в посадці, витонченими та зручними в носінні
      img.img-t(src="../assets/images/about3.png", alt="")
    insta-component
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

.about{
  display: flex;
  &--block{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #EEEEEE;
    width: 50%;
    padding: 80px 0;
    h1{
      font-family: 'Lovelace', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 52px;
      line-height: 130%;
      text-transform: uppercase;
      color: #474A51;
      text-align: left;
      width: 407px;
      margin: 0 auto 30px;
    }
    p{
      width: 404px;
      text-align: left;
      font-family: 'PTSans', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #474A51;
      margin: 0;
      &.distance{
        margin: 20px auto;
      }
    }
  }
  img{
    width: 50%;
  }
}
@media (max-width: 916px) and (min-width: 763px) {
  .about{
    position: relative;
  &--block{
    justify-content: left;
    flex-direction: column;
    align-items: baseline;
    background: #EEEEEE;
    width: 97%;
    padding: 80px 60px 80px 30px;
    h1{
      text-align: left;
      width: 407px;
      margin: 0 0 30px;
    }
    p{
      &.distance{
        margin: 20px 0;
      }
      &.tablet {
        width: 100%;
      }
    }
  }
  img{
    &.img-f{
      width: 305px;
      height: 429px;
      position: absolute;
      right: 0;
    }
    &.img-s{
      width: 248px;
    }
    &.img-t{
      width: 301px;
height: 257px;
position: absolute;
bottom: 0;
right: 0;
    }
  }
}
}

@media (max-width: 762px) {
  .about{
    flex-direction: column;
    &.mobile{
      flex-direction: column-reverse;
    }
  &--block{
    width: 94%;
    padding: 50px 10px;
    h1{
      font-size: 30px;
      width: 100%;
      margin: 0 auto 20px;
    }
    p{
      width: 100%;
    }
  }
  img{
    width: 100%;
    min-height: 320px;
  }
}
}
</style>
