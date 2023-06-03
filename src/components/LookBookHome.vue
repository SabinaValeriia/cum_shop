<template lang="pug">
.look 
    img(src="../assets/images/lookbook.jpg" alt="")
    .look__block 
        h2.desktop LOOKBOOK
        h2.tablet LOOK <br> BOOK
        p При створенні колекцій ми враховуємо, щоб всі вироби поєднувалися. Це дозволяє підібрати повний образ у всіх випадках життя.
        p Знижка 10% при покупці повного образу
        button Дивитися
</template>

<style scoped lang="scss">
@import "../assets/styles/core/global.scss";
.look {
  display: flex;
  background: #eeeeee;
  img {
    height: 700px;
    width: 50%;
  }
  &__block {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-family: "Lovelace", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 52px;
      line-height: 130%;
      text-transform: uppercase;
      color: #474a51;
      text-align: left;
      margin: 0 0 10px;
      &.tablet {
        display: none;
      }
    }
    p {
      font-family: "PTSans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-align: left;
      color: #474a51;
      width: 407px;
      &:last-child {
        margin-top: 50px;
      }
    }
    button {
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #474a51;
      padding: 15px 35px;
      gap: 10px;
      height: 51px;
      border: 1px solid #474a51;
      background: transparent;
      float: left;
      margin-left: -243px;
    }
  }
}
@media (max-width: 906px) and (min-width: 767px) {
  .look {
    img {
      height: 554px;
      width: 50%;
    }
    &__block {
      width: 50%;
      display: block;
      padding: 0 30px 0 63px;
      h2 {
        margin-top: 101px;
        &.tablet {
          display: block;
        }
        &.desktop {
          display: none;
        }
      }
      p {
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        text-align: left;
        color: #474a51;
        width: 291px;
        &:last-child {
          margin-top: 50px;
        }
      }
      button {
        margin-left: 0;
      }
    }
  }
}

@media (max-width: 766px) {
  .look {
    flex-direction: column-reverse;
    img {
      height: auto;
      width: 100%;
    }
    &__block {
      width: 100%;
      display: block;
      padding: 100px 10px;
      h2 {
        font-size: 30px;
        line-height: 39px;
        margin: 0p 0 30px;
        width: 100%;
        &.tablet {
          display: none;
        }
        &.desktop {
          display: block;
        }
      }
      p {
        width: 91%;
        &:last-child {
          margin-top: 50px;
        }
      }
      button {
        float: left;
        margin-left: 0;
      }
    }
  }
}
</style>
