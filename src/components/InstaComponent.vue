<template lang="pug">
.instagram 
    h2 НАШ ИНСТАГРАМ
    a @loylen_brand
    .instagram__block.desktop
        img(src="../assets/images/insta1.svg")
            //- a(href="https://www.instagram.com/p/ChEg9YosOM_/?igshid=YmMyMTA2M2Y=") Перейти до інстаграму
        img(src="../assets/images/insta2.svg")
        img(src="../assets/images/insta3.svg")
        img(src="../assets/images/insta4.svg")
    .instagram__block.mobile.distance
        img(src="../assets/images/insta1.svg")
            //- a(href="https://www.instagram.com/p/ChEg9YosOM_/?igshid=YmMyMTA2M2Y=") Перейти до інстаграму
        img(src="../assets/images/insta2.svg")
    .instagram__block.mobile
        img(src="../assets/images/insta3.svg")
            //- a(href="https://www.instagram.com/p/ChEg9YosOM_/?igshid=YmMyMTA2M2Y=") Перейти до інстаграму
        img(src="../assets/images/insta4.svg")
</template>

<style lang="scss">
@import "../assets/styles/core/global.scss";
.instagram {
    margin-top: 160px;
    .desktop{
        display: flex;
    }
    .mobile{
        display: none;
    }
    h2{
        font-family: 'PTSans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #474A51;
        margin: 0 0 30px;
    }
    a {
        font-family: 'Lovelace', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 52px;
        line-height: 130%;
        text-align: center;
        text-transform: uppercase;
        color: #474A51;
        margin: 0 0 80px;
    }
    &__block {
        display: flex;
        justify-content: center;
        margin-top: 80px;
        .block {
        display: flex;
    }
        div{
            background-image: url("../assets/images/insta1.svg");
            cursor: pointer;
            position: relative;
            &:hover{
                background: rgba(221, 232, 246, 0.6);
                // opacity: 0.6;
            }
        }
        div > a {
            display: flex;
            align-self: center;
            text-decoration: none;
            display: none; 
            font-family: 'Futura PT';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            text-align: center;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #000000;
        }
        div:hover > a { 
            display: flex; 
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 0);
        }
        img {
        }
    }
}

@media (max-width: 1396px) and (min-width: 767px) {
    .instagram {
    margin-top: 160px;
    h2{
        font-family: 'PTSans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #474A51;
        margin: 0 0 30px;
    }
    a {
        font-family: 'Lovelace', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 52px;
        line-height: 130%;
        text-align: center;
        text-transform: uppercase;
        color: #474A51;
        margin: 0 0 80px;
    }
    &__block {
        display: flex;
        justify-content: center;
        margin-top: 80px;
        .block {
        display: flex;
    }
        div{
            background-image: url("../assets/images/insta1.svg");
            cursor: pointer;
            position: relative;
            &:hover{
                background: rgba(221, 232, 246, 0.6);
                // opacity: 0.6;
            }
        }
        div > a {
            display: flex;
            align-self: center;
            text-decoration: none;
            display: none; 
            font-family: 'Futura PT';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            text-align: center;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #000000;
        }
        div:hover > a { 
            display: flex; 
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 0);
        }
        img {
            height: 177px;
        }
    }
}
}
@media (max-width: 766px) {
    .instagram {
    margin-top: 50px;
    .desktop{
        display: none;
    }
    .mobile{
        display: flex;
        margin-top: 0px;
    }
    .mobile.distance{
        margin-top: 30px;
    }
    h2{
        font-size: 20px;
        line-height: 26px;
    }
    a {
        font-size: 30px;
        line-height: 39px;
        
    }
    &__block {
        .block {
        display: flex;
    }
        div{
            background-image: url("../assets/images/insta1.svg");
            cursor: pointer;
            position: relative;
            &:hover{
                background: rgba(221, 232, 246, 0.6);
                // opacity: 0.6;
            }
        }
        div > a {
            display: flex;
            align-self: center;
            text-decoration: none;
            display: none; 
            font-family: 'Futura PT';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            text-align: center;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #000000;
        }
        div:hover > a { 
            display: flex; 
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 0);
        }
        img {
            width: 160px;
height: 160px;
        }
    }
}
}
</style>