<template lang="pug">
    div
      header-component
      .container 
        .block_registration
          .registration 
            h2 Реєстрація 
            form(@submit.prevent="register")
              input(type="text" placeholder="Ім'я" v-model="name" :class="{ 'invalid': !name }")
              input(type="text" placeholder="Прізвище" v-model="surname" :class="{ 'invalid': !surname }")
              input(type="phone" placeholder="Телефон" v-model="phone" :class="{ 'invalid': !phone }")
              input(type="email" placeholder="Електрона пошта" v-model="email" :class="{ 'invalid': !email }")
              input(type="password" placeholder="Пароль" v-model="password" :class="{ 'invalid': !password }")
              input(type="password" placeholder="Повторіть пароль" v-model="confirmPassword" :class="{ 'invalid': !confirmPassword }")
              div.block-input
                input(type="checkbox" v-model="agreePolicy" :class="{ 'invalid': !agreePolicy }") 
                label Соглашаюсь с политикой конфиденциальности
              button(type="submit") Зареєструватися
          .login 
            h2 Війти
            form(@submit.prevent="login")
              input(type="email" placeholder="Електрона пошта" v-model="loginEmail" :class="{ 'invalid': !loginEmail }") 
              input(type="password" placeholder="Пароль" v-model="loginPassword" :class="{ 'invalid': !loginPassword }")
              button(type="submit") Війти
              button.login-block(@click.prevent="forgotPassword") Забули пароль
  </template>
  

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
  data() {
    return {
      name: "",
      surname: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreePolicy: false,
      loginEmail: "",
      loginPassword: "",
      isNameValid: true,
      isSurnameValid: true,
      isPhoneValid: true,
      isEmailValid: true,
      isPasswordValid: true,
      isConfirmPasswordValid: true,
      isAgreePolicyValid: true,
      isLoginEmailValid: true,
      isLoginPasswordValid: true,
    };
  },
  methods: {
    register() {
      this.isNameValid = !!this.name;
      this.isSurnameValid = !!this.surname;
      this.isPhoneValid = !!this.phone;
      this.isEmailValid = !!this.email;
      this.isPasswordValid = !!this.password;
      this.isConfirmPasswordValid = !!this.confirmPassword;
      this.isAgreePolicyValid = this.agreePolicy;

      if (
        this.isNameValid &&
        this.isSurnameValid &&
        this.isPhoneValid &&
        this.isEmailValid &&
        this.isPasswordValid &&
        this.isConfirmPasswordValid &&
        this.isAgreePolicyValid
      ) {
        // Выполняйте действия регистрации
        console.log("Регистрация успешна");
      } else {
        // Помечайте незаполненные поля как невалидные
        if (!this.name) {
          this.isNameValid = false;
        }
        if (!this.surname) {
          this.isSurnameValid = false;
        }
        if (!this.phone) {
          this.isPhoneValid = false;
        }
        if (!this.email) {
          this.isEmailValid = false;
        }
        if (!this.password) {
          this.isPasswordValid = false;
        }
        if (!this.confirmPassword) {
          this.isConfirmPasswordValid = false;
        }
        if (!this.agreePolicy) {
          this.isAgreePolicyValid = false;
        }

        console.log(
          "Пожалуйста, заполните все обязательные поля и проверьте правильность введенных данных"
        );
      }
    },
    login() {
      this.isLoginEmailValid = !!this.loginEmail;
      this.isLoginPasswordValid = !!this.loginPassword;

      if (this.isLoginEmailValid && this.isLoginPasswordValid) {
        // Выполняйте действия входа
        console.log("Вход выполнен");
      } else {
        // Помечайте незаполненные поля как невалидные
        if (!this.loginEmail) {
          this.isLoginEmailValid = false;
        }
        if (!this.loginPassword) {
          this.isLoginPasswordValid = false;
        }

        console.log(
          "Пожалуйста, заполните все обязательные поля и проверьте правильность введенных данных"
        );
      }
    },
  },
};
</script>

<style scoped lang="scss">
.error {
  border: 1px solid red;
}
.invalid {
  border: 1px solid red;
}

.container {
  max-width: 100%;
  margin: 0 60px;
}
.block_registration {
  display: flex;
  h2 {
    font-family: "Futura PT";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474a51;
    text-align: left;
    margin: 80px 0 0;
  }
  .login {
    margin-left: 248px;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      border-bottom: 1px solid #474a51;
      border-top: none;
      border-left: none;
      border-right: none;
      padding: 30px 0 10px;
    }
    .block-input {
      margin: 50px 0 20px;
    }
    button {
      align-items: center;
      padding: 15px 35px;
      height: 51px;
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
      cursor: pointer;
    }
    button.login-block {
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #9f9d9d;
      border: none;
      padding: 0;
      height: 21px;
      margin-top: 10px;
    }
    button.login-distance {
      margin-top: 50px;
    }
  }
}
</style>
