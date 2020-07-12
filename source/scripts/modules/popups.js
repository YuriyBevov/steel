import {removeClass, toggleElem} from './utils.js';

export const closePopups = () => {
  const mapLink = document.querySelectorAll('#mapPopup');
  const mapPopup = document.querySelector('.map-popup');
  const closeBtn = document.querySelector('.map-popup__close-btn');

  const closePopup = () => {
    mapPopup.classList.add('closed');
  }

  const removeEventListeners = () => {
    document.removeEventListener("keydown", onEscCloseHandler)
    document.removeEventListener("mousedown", onClickCloseHandler)
  }

  const onEscCloseHandler = (evt) => {
    if (evt.keyCode === 27) {
      closePopup();
      removeEventListeners();
    }
  }

  const onClickCloseHandler = (evt) => {
    const map = mapPopup.querySelector('.map');
    const map__area = evt.target == map || map.contains(evt.target);

    if (!map__area) {
      closePopup();
      removeEventListeners();
    }
  }

  const onClickCloseBtnHandler = () => {
    closePopup();
    removeEventListeners();
    ymaps.destroy()
  }

  closeBtn.addEventListener('click', onClickCloseBtnHandler)

  const onClickHandler = (e) => {
    e.preventDefault();

    /*const oldMap = document.querySelector('#map');
    const newMap = mapPopup.querySelector('#map');

    console.log(newMap)
    if(oldMap) {
      newMap.setAttribute('id', 'newMap');
      ymaps.ready(init);
      function init(){

          // Создание карты.
          let myMap = new ymaps.Map("newMap", {
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
    console.log(oldMap);*/
    removeClass(mapPopup, 'closed');
    document.addEventListener('keydown', onEscCloseHandler);
    document.addEventListener('mousedown', onClickCloseHandler);
  }

  for( let i = 0; i < mapLink.length; i++) {
    mapLink[i].addEventListener('click', onClickHandler);
  }
};

closePopups();
