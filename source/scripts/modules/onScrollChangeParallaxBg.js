import {getPosY} from '../utils/func.js';

export const onScrollChangeParallaxBg = function () {

  const parallaxChangeBgLabel = document.getElementById('projects-gallery');
  const parallaxContainer = document.querySelector('.intro');

  const onScrollHandler = () => {
    let posY = getPosY(parallaxChangeBgLabel);

    if(posY <= 0) {
      parallaxContainer.classList.add('page-scrolled');
    } else if (posY > 0 && parallaxContainer.classList.contains('page-scrolled')) {
      parallaxContainer.classList.remove('page-scrolled')
    }
  }

  if(parallaxContainer) {
    document.addEventListener('scroll', onScrollHandler)
  }
}();
