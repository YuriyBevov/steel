import {scrollWidth} from "../utils/func.js"

function menuState() {

  const burger = document.querySelector('.toggle');
  const navbar = document.querySelector('.header__navbar');
  const page = document.querySelector('html');

  const onEscBtnHandler = (evt) => {
    if (evt.keyCode === 27 && navbar.classList.contains('menu-opened')) {
      page.classList.remove('scroll-off');
      navbar.classList.remove('menu-opened');
      burger.classList.remove('opened');
      navbar.style.paddingLeft = 0;
      document.removeEventListener('keydown', onEscBtnHandler);
    }
  }

  const onClickEventHandler = () => {
    navbar.classList.toggle('menu-opened');
    burger.classList.toggle('opened');
    if(!navbar.classList.contains('menu-opened')) {
      page.classList.remove('scroll-off');
      //navbar.style.paddingLeft = 0;
      document.removeEventListener('keydown', onEscBtnHandler);
    } else {
      burger.classList.add('scroll-off');
      //navbar.style.paddingLeft = scrollWidth() + 'px';
      document.addEventListener('keydown', onEscBtnHandler);
    }
  }

  burger.addEventListener('click', onClickEventHandler);
};

export default menuState();
