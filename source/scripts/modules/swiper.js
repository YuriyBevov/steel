import Swiper from "swiper";

function slidersInit() {
  const sliderDelay = 3000;

  let pSlider = document.querySelector('.partnership__swiper-container');

  if(pSlider) {
    let partnershipSwiper = new Swiper('.partnership__swiper-container', {
      slidesPerView: 3,
      slidesPerColumn: 3,
      autoplay: {
        delay: sliderDelay,
      },
      navigation: {
        nextEl: '.p-swiper-button-next',
        prevEl: '.p-swiper-button-prev',
      },
    });
  }

  let aSlider = document.querySelector('.advantages__swiper-container');

  if(aSlider) {
    let advantagesSwiper = new Swiper('.advantages__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      initialSlide: 1,
      centeredSlides: true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.a-swiper-button-next',
        prevEl: '.a-swiper-button-prev',
      },
      pagination: {
        el: '.a-swiper-pagination',
        dynamicBullets: true,
      },
      breakpoints: {
        // when window width is >= 836px
        514: {
          slidesPerView: 2,
          centeredSlides: false,
        },

        768: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        // when window width is >= 1160px
        1160: {
          slidesPerView: 3,
          centeredSlides: true,
          initialSlide: 2,
        }
      }
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
