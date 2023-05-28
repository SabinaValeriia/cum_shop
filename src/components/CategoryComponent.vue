<template lang="pug">
.category 
    .category__block-first
        router-link(:to="{name: 'Catalog'}")
            button До каталогу
    //- .category__block
    //-     .category__block-second
    //-         router-link(:to="{name: 'Cart'}")
    //-             p  Новинки
    //-             button Дивитися
    //-     .category__block-third
    //-         router-link(:to="{name: 'Cart'}")
    //-             p  Розпродаж
    //-             button Дивитися
</template>

<style lang="scss">
.category{
    &__block {
        display: flex;
        &-first{
            background-image: url("../assets/images/bg.jpg");
            height: 700px;
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            button {
                padding: 15px 35px;
                left: 50%;
                transform: translate(-50%, 0);
                position: absolute;
                width: 149px;
                height: 51px;
                bottom: 141px;
                background: #DDE8F6;
                border: none;
            }
        }
        &-second{
            background-image: url("../assets/images/bg-f.jpg");
            height: 600px;
            width: 50%;
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            p {
                font-family: 'Futura PT';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 130%;
                text-align: center;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
                text-decoration: none;
                margin: 0;
                position: absolute;
                bottom: 325px;
                left: 50%;
                transform: translate(-50%, 0);
            }
            button {
                padding: 15px 35px;
                position: absolute;
                width: 146px;
                height: 51px;
                border: 1px solid #FFFFFF;
                background: transparent;
                left: 50%;
                transform: translate(-50%, 0);
                bottom: 244px;
                font-family: 'Futura PT';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
            }
        }
        &-third{
            background-image: url("../assets/images/bg-s.jpg");
            height: 600px;
            width: 50%;
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            p {
                font-family: 'Futura PT';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 130%;
                text-align: center;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
                text-decoration: none;
                margin: 0;
                position: absolute;
                bottom: 325px;
                left: 50%;
                transform: translate(-50%, 0);
            }
            button {
                padding: 15px 35px;
                position: absolute;
                width: 146px;
                height: 51px;
                border: 1px solid #FFFFFF;
                background: transparent;
                left: 50%;
                transform: translate(-50%, 0);
                bottom: 244px;
                font-family: 'Futura PT';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
            }
        }
    }

}
</style>