import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesLoaded';
import {aos} from './aos.js'

function masonry() {
  var elem = document.querySelector('.grid');

  if(elem) {
    imagesLoaded( elem, function() {
      var msnry = new Masonry( elem, {
        // options
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        itemSelector: '.grid-item',
      });
      aos();
    });
  } else {
    aos();
  }
};

export {masonry}
