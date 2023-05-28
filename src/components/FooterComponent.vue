<template lang="pug">
  .footer
    .container 
      .footer--block
        .footer--block-box
          img(src="../assets/images/logo-main.svg")
          h2 Нужна помощь с заказом?
          h2 + 7 964 705 94 64
          p info@loylen.com
          .footer--block-box.distance(v-if="show")
            p 2021 Интернет-магазин LOYLEN
            p Все права защищены
            p Разработка дизайна
        .footer--block-box
          .subscription 
            h3 Подпишитесь на рассылку и первыми получайте информацию<br> о новинках, скидках и специальных предложениях
            .subscription--block
              input(placeholder="Введите ваш E-mail")
              button подписаться
          .footer--block(v-if="show")
            .footer--block-boxes
              h4 Каталог
              div
                p Новинки
                p Распродажа
                p Готовые образы
                p Все товары
            .footer--block-boxes
              h4 Покупателям
              div
                p Личный кабинет
                p Таблица размеров
                p Доставка и оплата
                p Доставка и оплата
            .footer--block-boxes
              h4 О нас
              div
                p О бренде
                p Контакты
                p Оферта
                p Политика
          .footer--blocks(v-else)
            .footer--block-boxes
              p Каталог
              div
                p Готовые образы
                p О бренде
                p Контакты
            .footer--block-boxes
              p Доставка и оплата
              div
                p Возврат
                p Таблица размеров
                p Оферта
                p Политика
          .police(v-if="!show")
            p 2021 Интернет-магазин LOYLEN Все права защищены
            p Разработка дизайна
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    show() {
      return window.innerWidth >= 1021;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 100%;
  margin: 0 60px;

  @media (max-width: 1021px) {
    max-width: 100%;
    margin: 0 30px;
  }

  @media (max-width: 775px) {
    margin: 0 10px;
  }
}

.footer {
  background: #eeeeee;
  padding: 120px 0 150px;
  width: 100%;
  .footer--block {
    display: flex;
    justify-content: space-between;

    &-boxes {
      &:nth-child(2) {
        margin: 0 54px 0 118px;
      }

      h4 {
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #474a51;
        text-align: left;
      }
    }

    &-box {
      .subscription {
        &--block {
          display: flex;
          margin-bottom: 50px;
        }

        h3 {
          font-family: "Futura PT";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          color: #474a51;
          text-align: left;
          margin: 0 0 25px 0;
        }

        button {
          padding: 10px 20px;
          border: 1px solid #474a51;
          background: transparent;
          font-family: "Futura PT";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #474a51;
        }

        input {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 1px solid #474a51;
          width: 150px;
          background: transparent;
          display: block;
          margin: 0;

          &::placeholder {
            font-family: "Futura PT";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            color: #838e9c;
            padding-bottom: 8px;
          }
        }
      }

      .distance {
        margin: 40px 0 0 0;
      }

      img {
        display: block;
        margin: 0 0 18px 0;
      }

      h2 {
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
        color: #474a51;
        text-align: left;
        margin: 0 0 5px 0;
      }

      p {
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: #474a51;
        text-align: left;
        margin: 5px 0 0 0;
      }
    }
  }
}

@media (max-width: 1021px) {
  .footer {
    padding: 92px 0 118px;

    .footer--block {
      display: flex;
      justify-content: space-between;

      &-boxes {
        &:nth-child(2) {
          margin: 0 30px 0 80px;
        }

        h4 {
          font-size: 16px;
        }
      }

      &-box {
        .subscription {
          &--block {
            display: flex;
            margin-bottom: 50px;
          }

          h3 {
            font-family: "Futura PT";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: #474a51;
            text-align: left;
            margin: 0 0 25px 0;
          }

          button {
            padding: 10px 20px;
            border: 1px solid #474a51;
            background: transparent;
            font-family: "Futura PT";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #474a51;
          }

          input {
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 1px solid #474a51;
            width: 150px;
            background: transparent;
            display: block;
            margin: 0;

            &::placeholder {
              font-family: "Futura PT";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 130%;
              color: #838e9c;
              padding-bottom: 8px;
            }
          }
        }

        .distance {
          margin: 40px 0 0 0;
        }

        img {
          display: block;
          margin: 0 0 18px 0;
        }

        h2 {
          font-size: 16px;
        }

        p {
          font-family: "Futura PT";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;
          color: #474a51;
          text-align: left;
          margin: 5px 0 0 0;
        }
      }
    }
  }
}

@media (max-width: 775px) {
  .footer {
    padding: 50px 0;
    border-bottom: 1px solid #e4e4e4;

    .footer--blocks {
      display: flex;
      padding: 20px 0 50px;
    }

    .footer--block {
      flex-direction: column;

      .police {
        border-top: 1px solid #e4e4e4;
        padding-top: 20px;

        p {
          font-size: 12px;
        }
      }

      &-box {
        .subscription {
          border-top: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          padding: 20px 0 50px;
          margin-top: 50px;

          &--block {
            display: flex;
            margin-bottom: 50px;
          }

          h3 {
            font-size: 16px;
          }

          button {
            font-size: 12px;
          }

          input {
            width: 176px;
          }
        }

        h2 {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
