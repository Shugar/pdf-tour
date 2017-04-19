<template lang="pug">
  .header
    .container
      router-link.header-link(to="/") Главная
      router-link.header-link(to="/login") Логин
      router-link.header-link(to="/registration") Регистрация

</template>

<script>
export default {
  name: 'HeaderComponent',
  mounted: function () {

  }
}
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    padding: 20px 0;
    background: #66BB6A;

    opacity: 0.95;
  }

  .header-link {
    margin-right: 15px;
    text-decoration: none;
    color: #FFFFFF;
    outline: none;

    &:last-child {
      margin-right: 0;
    }
  }
</style>
