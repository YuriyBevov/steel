import showIntroTitle from './showIntroTitle.js'
import {slidersInit} from "./swiper.js";

export const loader = function() {
  const showPage = () => {
      slidersInit();
      const loader = document.querySelector('.loader');

      const hideLoader = function () {
        setTimeout(() => {
            loader.style.opacity = 0;
            showIntroTitle();
          }, 800)

        setTimeout(() => {
          loader.style.display ='none';
        }, 1500)
      }();

  };

  window.onload = () => {
    showPage();
  }

      //document.addEventListener("DOMContentLoaded", showPage);
}();
