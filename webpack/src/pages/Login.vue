<template lang="pug">
  .login
    .container
      .title Авторизация

      form.form
        .form-field
          label.form-label Логин:
          input.form-input(type="text")

        .form-field
          label.form-label Пароль:
          input.form-input(type="password")

        .form-buttons
          .button(type="submit") Войти
          .button.button-blue Зарегистироваться
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .login {

  }
</style>
