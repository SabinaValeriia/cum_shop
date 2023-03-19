<template lang="pug">
.look 
    img(src="../assets/images/lookbook.jpg" alt="")
    .look__block 
        h2 LOOKBOOK
        p При створенні колекцій ми враховуємо, щоб всі вироби поєднувалися. Це дозволяє підібрати повний образ у всіх випадках життя.
        p Знижка 10% при покупці повного образу
        button Дивитися
</template>

<style lang="scss">
.look {
    display: flex;
    background: #EEEEEE;
    img {
        height: 700px;
    }
    &__block {
        padding-left: 109px;
        h2 {
        font-family: 'Lovelace';
        font-style: normal;
        font-weight: 400;
        font-size: 52px;
        line-height: 130%;
        text-transform: uppercase;
        color: #474A51;
        text-align: left;
        margin: 213px 0 10px;
    }
    p {
        font-family: 'Futura PT';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        text-align: left;
        color: #474A51;
        width: 407px;
        &:last-child {
            margin-top: 50px;
        }

    }
    button {
        font-family: 'Futura PT';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #474A51;
        padding: 15px 35px;
        gap: 10px;
        height: 51px;
        border: 1px solid #474A51;
        background: transparent;
        float: left;
    }
    }
}
</style>