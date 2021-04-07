import Swiper from "swiper";

function slidersInit() {
  const sliderDelay = 3000;

  let pSlider = document.querySelector('.partnership__swiper-container');

  if(pSlider) {
    let partnershipSwiper = new Swiper('.partnership__swiper-container', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      autoplay: {
        delay: sliderDelay,
      },
      navigation: {
        nextEl: '.p-swiper-button-next',
        prevEl: '.p-swiper-button-prev',
      },
    });
  }

  let fSlider = document.querySelectorAll('.furniture-swiper-container');

  if(fSlider) {
    window.onload = function () {
      fSlider.forEach(eachSlider => new Swiper(eachSlider, {
        spaceBetween: 30,
        slidesPerView: 'auto',
        updateOnImagesReady: true,

        pagination: {
          el: '.f-swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.f-swiper-button-next',
          prevEl: '.f-swiper-button-prev',
        },
        on: {
          imagesReady: function () {
            setTimeout(function () {
              eachSlider.classList.remove('blur');
            }, 300);
          },
        },
      }));
    }
  }

  let partSlider = document.querySelector('.partitions-swiper-container');

  if(partSlider) {

    window.onload = function () {
      let partitionsSlider = new Swiper(partSlider, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        updateOnImagesReady: true,

        pagination: {
          el: '.part-swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.part-swiper-button-next',
          prevEl: '.part-swiper-button-prev',
        },
        on: {
          imagesReady: function () {
            setTimeout(function () {
              partSlider.classList.remove('blur');
            }, 300);
          },
        },
      });
    }
  }
};

export default slidersInit();
