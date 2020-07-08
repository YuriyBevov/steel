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

import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import AOS from 'aos';
//import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
  //offset: 120,
  startEvent: 'DOMContentLoaded',
  delay: 500,
  duration: 1500,
  once: true,
  anchorPlacement: 'bottom-center',

  //anchorPlacement: 'center-bottom',
  //useClassNames: true
});
