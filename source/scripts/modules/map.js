export const mapInit = function () {
  const map = document.querySelector('#map');
  if(map) {

    ymaps.ready(init);
    function init(){

        // Создание карты.
        let myMap = new ymaps.Map("map", {
            center: [59.90279995, 30.40527791], // координаты Бехтерева 3к3
            zoom: 16
        });

        var myPlacemark = new ymaps.Placemark([59.90233115, 30.40756371],
          {
            hintContent: '<span class="map__placemark-hint">МЫ ЗДЕСЬ :)</span>',
            balloonContentHeader: '<h2 class="map__placemark-title">STEEL BALLS</h2>',
            balloonContentBody: '<p class="map__placemark-description">Сварочная мастерская</p>',
            balloonContentFooter: '<a href="tel: 89006221818" class="map__placemark-link">8 (900) 6221818</a>',
          },
          {
          iconLayout: 'default#image',
          iconImageHref: './img/icons/icon-map.svg',
          iconImageSize: [30, 42],
        });

        myMap.geoObjects.add(myPlacemark);
    }
  }
}();
