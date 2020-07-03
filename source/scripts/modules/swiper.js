import Swiper from "swiper";

export const slidersInit = function () {
  const sliderDelay = 5000;
  let swiper = new Swiper('.header__swiper-container', {
    spaceBetween: 100,
    autoplay: {
      delay: sliderDelay,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
}();
