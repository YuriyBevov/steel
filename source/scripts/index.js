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

import {scrollWidth} from "./utils/func.js"

const burger = document.querySelector('.toggle');
const navbar = document.querySelector('.header__navbar');
const page = document.querySelector('html');

const onClickEventHandler = () => {
  navbar.classList.toggle('menu-opened');
  burger.classList.toggle('opened');
  if(!navbar.classList.contains('menu-opened')) {
    page.classList.remove('scroll-off');
    burger.style.marginRight = 0; // убераю прыганье кнопки, которая в фиксированном контейнере
  } else {
    page.classList.add('scroll-off');
    burger.style.marginRight = scrollWidth() + 'px'; // убераю прыганье кнопки, которая в фиксированном контейнере
  }
}

burger.addEventListener('click', onClickEventHandler)


/*if (document.body.offsetHeight > document.documentElement.clientHeight) {
    console.log("Скролл есть");
}else {
    console.log("Скролла нет");
}*/
