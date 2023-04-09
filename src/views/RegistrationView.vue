<template lang="pug">
div
    header-component
    .container 
        .block_registration
            .registration 
                h2 Реєстрація 
                form(type="submit")
                    input(type="text" placeholder="Ім'я")
                    input(type="text" placeholder="Прізвище")
                    input(type="phone" placeholder="Телефон")
                    input(type="email" placeholder="Електрона пошта")
                    input(type="passsword" placeholder="Пароль")
                    input(type="passsword" placeholder="Повторіть пароль")
                    div.block-input
                        input(type="checkbox") 
                        label Соглашаюсь с политикой конфиденциальности
                    button(@click.prevent="test") Зареєструватися
            .login 
                h2 Війти
                form(type="submit")
                    input(type="email" placeholder="Електрона пошта") 
                    input(type="passsword" placeholder="Пароль")
                    button.login-distance(@click.prevent="test") Війти
                    button.login-block(@click.prevent="test") Забули пароль
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {

components: {
    HeaderComponent
},
props: {
    
},
data() {
    return {}
},
}
</script>

<style lang="scss">
.container {
    max-width: 1280px;
    margin: 0 auto;
}
.block_registration{
    display: flex;
    h2{
        font-family: 'Futura PT';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #474A51;
        text-align: left;
        margin: 80px 0 0;
    }
    .login{
        margin-left: 248px;
    }
    form {
        display: flex;
        flex-direction: column;
        input{
            border-bottom: 1px solid #474A51;
            border-top: none;
            border-left: none;
            border-right: none;
            padding: 30px 0 10px;
        }
        .block-input{
            margin: 50px 0 20px;
        }
        button {
            align-items: center;
            padding: 15px 35px;
            height: 51px;
            border: 1px solid #474A51;
            background: transparent;
            font-family: 'Futura PT';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #474A51;
            cursor: pointer;
        }
        button.login-block{
            font-family: 'Futura PT';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: #9F9D9D;
            border: none;
            padding: 0;
            height: 21px;
            margin-top: 10px;
        }
        button.login-distance{
            margin-top: 50px;
        }
        
    }
}
</style>