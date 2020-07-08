'use strict'

import slidersInit from "./modules/swiper.js";
// import navToggle from './modules/navToggle.js';

import Masonry from 'masonry-layout';

document.addEventListener('DOMContentLoaded', function(){
  console.log('ready')
  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    // options
    percentPosition: true,
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    itemSelector: '.grid-item',
  });
});
