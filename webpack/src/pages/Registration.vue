<template lang="pug">
  .registration
    .container
      .title Регистрация

      form.form
        .form-field
          label.form-label Логин:
          input.form-input(type="text")

        .form-field
          label.form-label Пароль:
          input.form-input(type="password")

        .form-field
          label.form-label Email:
          input.form-input(type="text")

        .form-field
          label.form-label ФИО:
          input.form-input(type="text")

        .form-field
          label.form-label Телефон:
          input.form-input(type="text")

        .form-buttons.form-buttons--justify
          .button(type="submit") Зарегистрироваться
          .button.button-blue Назад
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .registration {

  }
</style>
