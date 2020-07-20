'use strict'

import resize from './modules/textareaResize.js';
import lazy from "./modules/lazy.js";
import slidersInit from "./modules/swiper.js";
import masonry from "./modules/masonry.js"
import aos from "./modules/aos.js";
import numberAnimation from "./modules/numberAnimation.js";
import modernizrWebp from "./modules/modernizrWebp.js";
import mapInit from './modules/map.js';


const work = function() {

  const loader = document.querySelector('.loader');

  const hideLoader = function () {
    setTimeout(endLoading, 800)
    function endLoading () {

      loader.style.opacity = 0;

      clearTimeout(hideLoader);
      document.removeEventListener("DOMContentLoaded", work);

      const path = document.querySelectorAll('.intro__description path');

      for(let i = 0; i < path.length; i++) {

        let pathLength = path[i].getTotalLength();

        path[i].setAttribute('stroke-dasharray', pathLength);
        path[i].setAttribute('stroke-dashoffset', pathLength);
        path[i].classList.add('start-animation');
      }
    }

    setTimeout(function() {
      loader.style.display ='none';
    }, 1500)

  };

  hideLoader();

}

if (document.readyState == 'complete') {
  // ещё загружается, ждём события
  console.log('loading')
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM готов!
  work();
}


//import modalInit from './modules/modals.js'; // инит модалок, готовый скрипт !!!
