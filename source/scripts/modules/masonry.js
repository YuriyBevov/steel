import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesLoaded';
import {aos} from './aos.js'

export const masonry = function () {
  document.addEventListener('DOMContentLoaded', function(){
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
  });
}();
