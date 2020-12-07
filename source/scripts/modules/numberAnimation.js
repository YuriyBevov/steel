import {minAnimationWidth} from '../utils/vars.js';

export const numberAnimation = function () {
  const time  = 1500; // ms
  const step = 1;
  const startProjectsNum = 1238;
  const finProjectsNum = 1500;
  const startYearsNum = 0;
  const finYearsNum = 5;

  const numAnimation = function (startNum, endNum, element) {
    let el = document.querySelector(element);
    let currentNum = startNum;
    let delay = Math.round(time / (endNum / step));
    let interval = setInterval(() => {
      currentNum = currentNum + step;
      if ( currentNum == endNum) {
        clearInterval(interval);
      }
      el.textContent = currentNum;
    }, delay);
  };

  const staticNum = function (num, element) {
    let el = document.querySelector(element);
    el.textContent = num;
  }

  const block = document.querySelector('.advantages__list');

  const onScrollNumberAnimation = function () {
    let coords = block.getBoundingClientRect();
    let pageHeight = document.documentElement.clientHeight;
    if(coords.top < pageHeight) {
      numAnimation( startProjectsNum, finProjectsNum, '#projects');
      numAnimation( startYearsNum, finYearsNum, '#year');
      window.removeEventListener('scroll', onScrollNumberAnimation)
    }
  }

  if(window.innerWidth > minAnimationWidth) {
    if (block) {
      window.addEventListener('scroll', onScrollNumberAnimation);
    }
  } else if(block){
    staticNum(finProjectsNum, '#projects');
    staticNum(finYearsNum, '#year');
  }

}();
