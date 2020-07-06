'use strict'

import slidersInit from "./modules/swiper.js";
// import navToggle from './modules/navToggle.js';

import Colcade from 'colcade';

document.addEventListener('DOMContentLoaded', function(){
  console.log('ready')
  let grid = document.querySelector('.grid');
  let colc = new Colcade( grid, {
    columns: '.grid-col',
    items: '.grid-item'
  });
});
