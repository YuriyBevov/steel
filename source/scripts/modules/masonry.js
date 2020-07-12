import Masonry from 'masonry-layout';

export const masonry = function () {
  document.addEventListener('DOMContentLoaded', function(){
    var elem = document.querySelector('.grid');
    if(elem) {
      var msnry = new Masonry( elem, {
        // options
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        itemSelector: '.grid-item',
      });
    }
  });
}();
