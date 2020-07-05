import Swiper from "swiper";

export const slidersInit = function () {
  let partnershipSwiper = new Swiper('.partnership__swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 3,
    navigation: {
      nextEl: '.p-swiper-button-next',
      prevEl: '.p-swiper-button-prev',
    },
  });

  let advantagesSwiper = new Swiper('.advantages__swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    initialSlide: 1,
    centeredSlides: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.a-swiper-button-next',
      prevEl: '.a-swiper-button-prev',
    },
  });
}();
