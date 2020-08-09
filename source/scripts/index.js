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
    navbar.style.paddingLeft = 0;
  } else {
    burger.classList.add('scroll-off');
    navbar.style.paddingLeft = scrollWidth() + 'px';
    let lastFocusedElem = document.activeElement;
    console.log(lastFocusedElem)
    console.log(navbar)
  }
}

burger.addEventListener('click', onClickEventHandler)

import IMask from 'imask'

function validatePhone() {

  var phoneInput = document.querySelectorAll("input[type=tel]")

  if (phoneInput) {
    phoneInput.forEach((input) => {
      var phoneMask = IMask(input, {
        mask: '+{7}(000)000-00-00'
      });
    })
  }
};

validatePhone();
