'use strict'

import loader from './modules/loader.js';
import resize from './modules/textareaResize.js';
import lazy from "./modules/lazy.js";
import slidersInit from "./modules/swiper.js";
import masonry from "./modules/masonry.js"
//import aos from "./modules/aos.js";
import numberAnimation from "./modules/numberAnimation.js";
import modernizrWebp from "./modules/modernizrWebp.js";
import mapInit from './modules/map.js';

import modalInit from './modules/modals.js'; // инит модалок, готовый скрипт !!!


const burger = document.querySelector('.toggle');
const menu = document.querySelector('.header__content');
console.log(burger)

const page = document.querySelector('html');
console.log(page)

const onBurgerClickEvent = () => {
  burger.classList.toggle('opened');
  menu.classList.toggle('menu-opened');

  if(menu.classList.contains('menu-opened')) {
    page.style.overflowY = 'hidden';
  } else {
    page.style.overflowY = 'initial'
  }
}

burger.addEventListener('click', onBurgerClickEvent);
