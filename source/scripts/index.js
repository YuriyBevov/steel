'use strict'

import loader from './modules/loader.js';
import lazy from "./modules/lazy.js";
import aos from './modules/aos.js'
import modernizrWebp from "./modules/modernizrWebp.js";
import setFixedHeader from './modules/setFixedHeader.js';
import numberAnimation from "./modules/numberAnimation.js";
import mapInit from './modules/map.js';
import resize from './modules/textareaResize.js';
import modalInit from './modules/modals.js'; // инит модалок, готовый скрипт !!!


/*const burger = document.querySelector('.toggle');
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

burger.addEventListener('click', onBurgerClickEvent);*/

const burger = document.querySelector('.toggle');

const navbar = document.querySelector('.header__navbar');

const onClickEventHandler = () => {
    navbar.classList.toggle('menu-opened');
}

burger.addEventListener('click', onClickEventHandler)
