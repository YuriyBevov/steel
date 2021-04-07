import {getPosY} from '../utils/func.js';
import {getElCurHeight} from '../utils/func.js';

export const stickyHeader = function () {
  const header = document.querySelector('.header');
  const headerInitialHeight = getElCurHeight(header);
  const pageTop = document.querySelector('.header + main');

  //pageTop.style.marginTop = headerInitialHeight + 'px';

  const onScrollHandler = () => {
    if(window.pageYOffset > headerInitialHeight) {
      header.classList.add('header-sticky');
    } else if (window.pageYOffset < headerInitialHeight && header.classList.contains('header-sticky')) {
      header.classList.remove('header-sticky');
    }
  }

  if(header) {
    document.addEventListener('scroll', onScrollHandler);
  }
}();
