import Swiper from "swiper";

export const slidersInit = function () {
  let swiper = new Swiper('.partnership__swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 3,
    navigation: {
      nextEl: '.p-swiper-button-next',
      prevEl: '.p-swiper-button-prev',
    },
  });
  console.log('init')
};


  slidersInit()
