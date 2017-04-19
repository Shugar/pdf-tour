<template lang="pug">
  .processing
    .container
      .title Обработка данных

      form.form
        .form-field
          label.form-label ФИО:
          input.form-input(type="text" v-model="flat.full_name")

        .form-field
          label.form-label Телефон:
          input.form-input(type="tel" v-model="flat.phone")

        .form-field
          label.form-label Email:
          input.form-input(type="text" v-model="flat.email")

        .form-field
          label.form-label Лого:
          .form-file
            input(type="file")
          span.form-hint * Размеры файла 2440 х 640, форматы: jpg, png, gif, bmp

        .form-field
          label.form-label Адрес:
          input.form-input(type="text" v-model="flat.address")

        .form-field
          label.form-label Метро:
          input.form-input(type="text" v-model="flat.metro")

        .form-field
          label.form-label Цена:
          input.form-input(type="text" v-model="flat.price")

        .form-field
          label.form-label Общая площадь:
          input.form-input(type="text" v-model="flat.total_area")

        .form-field
          label.form-label Жилая площадь:
          input.form-input(type="text" v-model="flat.living_area")

        .form-field
          label.form-label Кухня:
          input.form-input(type="text" v-model="flat.kitchen")

        .form-field
          label.form-label Этаж:
          input.form-input(type="text" v-model="flat.floor")

        .form-field
          label.form-label Наличие мебели:
          textarea.form-textarea(type="text" v-model="flat.furniture")

        .form-field
          label.form-label Балкон:
          input.form-input(type="text" v-model="flat.balcony")

        .form-field
          label.form-label Лифт:
          input.form-input(type="text" v-model="flat.lift")

        .form-field
          label.form-label Описание:
          textarea.form-textarea(type="text" v-model="flat.description")

        .form-field
          label.form-label Добавить фото:
          .form-file
            input(type="file")
          span.form-hint * Форматы: jpg, png, gif, bmp

        .form-checkboxes
          input.form-checkbox(type="checkbox" id="checkbox-1" v-model="flat.cut_watermark")
          label.form-label(for="checkbox-1") Обрезать водяной знак снизу

        .form-checkboxes
          input.form-checkbox(type="checkbox" id="checkbox-2" v-model="flat.paint_watermark")
          label.form-label(for="checkbox-2") Закрасить водяной знак снизу

        .form-buttons
          .button(type="submit") Сгенерировать PDF
          .button.button-blue Отправить на почту
</template>

<script>
export default {
  name: 'Processing',
  data () {
    return {
      flat: {
        full_name: '',
        phone: '',
        email: '',
        address: '',
        metro: '',
        price: '',
        total_area: '',
        living_area: '',
        kitchen: '',
        floor: '',
        furniture: '',
        balcony: '',
        lift: '',
        description: '',
        cut_watermark: false,
        paint_watermark: false
      }
    }
  },

  mounted: function () {

  }
}
</script>

<style scoped lang="scss">
  .processing {

  }
</style>
