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
            hintContent: '<span class="map__placemark-hint">Сварочная мастерская Steel Balls</span>',
            //balloonContentHeader: '<h2 class="map__placemark-title">STEEL BALLS</h2>',
            balloonContentBody: '<p class="map__placemark-description">Санкт-Петербург, ул. Бехтерева 3,корп 3а</p>',
            //balloonContentFooter: '<a href="tel: 89006221818" class="map__placemark-link">8 (900) 6221818</a>',
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
