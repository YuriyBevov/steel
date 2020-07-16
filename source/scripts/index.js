'use strict'

import resize from './modules/textareaResize.js';
import lazy from "./modules/lazy.js";
import slidersInit from "./modules/swiper.js";
import masonry from "./modules/masonry.js"
import aos from "./modules/aos.js";
import numberAnimation from "./modules/numberAnimation.js";
import modernizrWebp from "./modules/modernizrWebp.js";
import mapInit from './modules/map.js';
import modalInit from './modules/modals.js'; // инит модалок, готовый скрипт !!!


const path = document.querySelectorAll('.intro__description path');

for(let i = 0; i < path.length; i++) {

  let pathLength = path[i].getTotalLength();

  path[i].setAttribute('stroke-dasharray', pathLength);
  path[i].setAttribute('stroke-dashoffset', pathLength);
  path[i].classList.add('start-animation');
}

const path2 = document.querySelectorAll('.intro__description2 path');

for(let i = 0; i < path2.length; i++) {

  let pathLength = path2[i].getTotalLength();

  path2[i].setAttribute('stroke-dasharray', pathLength);
  path2[i].setAttribute('stroke-dashoffset', pathLength);
  path2[i].classList.add('start-animation2');
}

const path3 = document.querySelectorAll('.intro__description3 path');

for(let i = 0; i < path3.length; i++) {

  let pathLength = path3[i].getTotalLength();

  path3[i].setAttribute('stroke-dasharray', pathLength);
  path3[i].setAttribute('stroke-dashoffset', pathLength);
  path3[i].classList.add('start-animation3');
}
