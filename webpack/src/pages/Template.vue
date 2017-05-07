<template lang='pug'>
  .template
    .template__title
      | {{ json.title }}
    .template-field
      | <span class="template-label block">Описание:</span> {{ json.description }}

    .template-field
      | <span class="template-label">Цена:</span> {{ json.price }}
    .template-field
      | <span class="template-label">Цена за м²:</span> {{ json.price_per_square }}

    .template-field
      | <span class="template-label">Город:</span> {{ json.city }}
    .template-field
      | <span class="template-label">Станция метро:</span> {{ json.metro }}
    .template-field
      | <span class="template-label">Адрес:</span> {{ json.address }}
    .template-map
      img(:src="`https://static-maps.yandex.ru/1.x/?ll=${json.geo[0] + ',' + json.geo[1]}&size=450,450&z=13&l=map`")

    .template-attrs
      .template-field
        | <span class="template-label">Тип продажи:</span> {{ json.attrs.sale_type }}
      .template-field
        | <span class="template-label">Жилой комплекс:</span> {{ json.attrs.complex }}
      .template-field
        | <span class="template-label">Количество комнат:</span> {{ json.attrs.rooms }}
      .template-field
        | <span class="template-label">Этаж:</span> {{ json.attrs.floor }}
      .template-field
        | <span class="template-label">Всего этажей:</span> {{ json.attrs.floors_total }}
      .template-field
        | <span class="template-label">Лифт:</span> {{ json.attrs.elevator }}
      .template-field
        | <span class="template-label">Вид:</span> {{ json.attrs.view }}
      .template-field
        | <span class="template-label">Общая площадь:</span> {{ json.attrs.total_area }} м²
      .template-field
        | <span class="template-label">Кухонная площадь:</span> {{ json.attrs.kitchen_area }} м²
      .template-field
        | <span class="template-label">Жилая площадь:</span> {{ json.attrs.living_area }} м²
      .template-field
        | <span class="template-label">Площадь комнат:</span> {{ json.attrs.rooms_area }}
      .template-field
        | <span class="template-label">Ремонт:</span> {{ json.attrs.repair }}
      .template-field
        | <span class="template-label">Тип дома:</span> {{ json.attrs.house_type }}
      .template-field
        | <span class="template-label">Балкон:</span> {{ json.attrs.balcony }}
      .template-field
        | <span class="template-label">Туалет:</span> {{ json.attrs.toilet }}

    .template-images
      .template-image(v-for="image in json.images")
        img(:src="image")
</template>

<script>
export default {
  name: 'Template',
  data () {
    return {
      json: {
        url: 'https://www.cian.ru/sale/flat/154815031/',
        title: '2-комн. кв.  в  ЖК «Золотые Ключи 2»',
        price_per_square: '475 000 руб за м 2',
        price: '28 500 000 руб.',
        metro: 'Университет',
        images: [
          'https://cdn.cian.site/5/198/932/kvartira-moskva-minskaya-ulica-239891578-1.jpg',
          'https://cdn.cian.site/6/198/932/kvartira-moskva-minskaya-ulica-239891605-1.jpg',
          'https://cdn.cian.site/6/198/932/kvartira-moskva-minskaya-ulica-239891640-1.jpg',
          'https://cdn.cian.site/6/198/932/kvartira-moskva-minskaya-ulica-239891673-1.jpg',
          'https://cdn.cian.site/6/198/932/kvartira-moskva-minskaya-ulica-239891695-1.jpg',
          'https://cdn.cian.site/7/198/932/kvartira-moskva-minskaya-ulica-239891717-1.jpg',
          'https://cdn.cian.site/7/198/932/kvartira-moskva-minskaya-ulica-239891746-1.jpg',
          'https://cdn.cian.site/7/198/932/kvartira-moskva-minskaya-ulica-239891768-1.jpg',
          'https://cdn.cian.site/7/198/932/kvartira-moskva-minskaya-ulica-239891793-1.jpg',
          'https://cdn.cian.site/8/198/932/kvartira-moskva-minskaya-ulica-239891804-1.jpg',
          'https://cdn.cian.site/8/198/932/kvartira-moskva-minskaya-ulica-239891821-1.jpg',
          'https://cdn.cian.site/8/198/932/kvartira-moskva-minskaya-ulica-239891829-1.jpg',
          'https://cdn.cian.site/5/009/932/kvartira-moskva-minskaya-ulica-239900513-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379336-1.jpg',
          'https://cdn.cian.site/5/798/712/kvartira-moskva-minskaya-ulica-217897579-1.jpg',
          'https://cdn.cian.site/5/798/712/kvartira-moskva-minskaya-ulica-217897582-1.jpg',
          'https://cdn.cian.site/5/798/712/kvartira-moskva-minskaya-ulica-217897588-1.jpg',
          'https://cdn.cian.site/5/798/712/kvartira-moskva-minskaya-ulica-217897589-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379342-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379347-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379352-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379355-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379358-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379362-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379365-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379368-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379370-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379374-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379376-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379381-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379384-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379386-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379389-1.jpg',
          'https://cdn.cian.site/3/973/042/kvartira-moskva-minskaya-ulica-240379393-1.jpg'
        ],
        geo: [
          37.498564,
          55.711661
        ],
        description: 'ПРЯМАЯ ПРОДАЖА! ЖК Золотые Ключи 2 гармонично включает в себя три монолитно-кирпичных корпуса и несколько таунхаусов. Три корпуса соединены воедино двухуровневой подземной парковкой. Жилой комплекс расположен по адресу ул.Минская д 1Г, между Кутузовским и Мичуринским проспектами. Спокойный и тихий уголок Москвы, зеленая зона вблизи рек Сетунь и Раменка, где можно проводить приятные дни в любое время года. Предлагается на продажу квартира общей площадью 60 кв.м. Дизайн и интерьер квартиры выдержан в классическом стиле из дорогостоящих материалов. Планировка квартиры: кухня-столовая, спальня,детская,санузел. Продажа от собственника! ID:413522 Частный маклер Показать телефон +7 910 473-84-63 Пожалуйста, скажите, что нашли это объявление на ЦИАН',
        city: 'Москва',
        attrs: {
          view: 'двор',
          total_area: 60,
          toilet: 'нет',
          sale_type: 'свободная',
          rooms_area: '16-18 м 2',
          rooms: 2,
          repair: 'евроремонт',
          phone: 'нет',
          living_area: 34,
          kitchen_area: 11,
          house_type: 'вторичка, кирпично-монолитный',
          floors_total: 22,
          floor: 16,
          elevator: '1 пасс. + 1 груз.',
          complex: 'ЖК «Золотые Ключи 2»',
          balcony: 'нет'
        },
        address: 'район Раменки, Минская ул., 1ГК3'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .template {
    width: 960px;
    margin: 0 auto;

    &-field {
      margin-bottom: 20px;
      flex: 0 0 25%;
    }

    &-label {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 500;

      &.block {
        display: block;
      }
    }

    &__title {
      margin-bottom: 30px;
      font-size: 26px;
      font-weight: 500;
    }

    &-map {
      margin-bottom: 20px;
    }

    &-map img {
      width: 100%;
    }

    &-images {
      display: flex;
      flex-flow: column nowrap;
    }

    &-image img {
      width: 100%;
    }

    // &-attrs {
    //   padding: 50px 0;
    //   display: flex;
    //   flex-flow: row wrap;
    // }

    // &-images {
    //   display: flex;
    //   flex-flow: row wrap;
    //   justify-content: space-between;
    //   align-items: center;
    // }

    // &-image {
    //   position: relative;
    //   overflow: hidden;

    //   height: 480px;
    //   flex: 0 0 480px;
    // }

    // &-image img {
    //   min-height: 100%;
    //   min-width: 100%;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%,-50%)
    // }
  }
</style>
