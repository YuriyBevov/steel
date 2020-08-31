'use strict'

import loader from './modules/loader.js';
import lazy from "./modules/lazy.js";
import aos from './modules/aos.js'
import modernizrWebp from "./modules/modernizrWebp.js";
import numberAnimation from "./modules/numberAnimation.js";
import slidersInit from "./modules/swiper.js";
import mapInit from './modules/map.js';
import fileInputSimulateClick from './modules/forms/fileInputSimulateClick';
import resize from './modules/textareaResize.js';
import menuState from './modules/menuState.js';
import fillUploadFile from './modules/fillUploadFile.js';
import validatePhone from './plugins/phoneValidation.js';
import submitForms from './modules/forms/submitForms.js';
import openModal from './modules/modalLinks.js';
import anchorScroll from './modules/anchorScroll.js';

const btn = document.querySelector('.portfolio__btn');

const photos = document.querySelectorAll('.portfolio__item');
const step = 8;
let firstPhoto = 0;
let lastPhoto = step;
const photosLength = photos.length;

for (let i = lastPhoto; i < photos.length; i++) {
  photos[i].style.display = 'none';
}

const onBtnClickHandler = () => {
  for (let i = firstPhoto; i < lastPhoto; i++) {
    photos[i].style.display = 'none';
  }
  firstPhoto += step;
  lastPhoto += step;
  if (lastPhoto >= photosLength) {
    lastPhoto = photosLength;
    btn.setAttribute('disabled', true);
  }
  for (let i = firstPhoto; i < lastPhoto; i++) {
    photos[i].style.display = 'block';
  }
};

if(btn) {
  btn.addEventListener('click', onBtnClickHandler);
}
