export const mapInit = function () {
  const map = document.querySelector('#map');
  if(map) {

    ymaps.ready(init);
    function init(){

      // Создание карты.
      let myMap = new ymaps.Map("map", {
          center: [59.883173, 30.244596], // координаты Бехтерева 3к3
          zoom: 17
      });

      var myPlacemark = new ymaps.Placemark([59.883173, 30.244596],
        {
          hintContent: '<span class="map__placemark-hint">Сварочная мастерская Steel Balls</span>',
          balloonContentBody: '<p class="map__placemark-description">Санкт-Петербург, пр. Стачек 47, лит.БД</p>',
        },
        {
        iconLayout: 'default#image',
        iconImageHref: './img/static/pin.png',
        iconImageSize: [25, 36],
      });

      myMap.geoObjects.add(myPlacemark);
    }
  }
}();
