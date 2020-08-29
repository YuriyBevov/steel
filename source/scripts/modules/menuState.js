import {scrollWidth} from "../utils/func.js"

function menuState() {
  const burger = document.querySelector('.toggle');
  const navbar = document.querySelector('.header__navbar');
  const page = document.querySelector('html');
  let burgerClicked = false;

  /*let windowSize = window.innerWidth;
  console.log(windowSize);

  const onWindowResizeHandler = () => {
    windowSize = window.innerWidth;
    console.log(windowSize);
  }

  window.addEventListener('resize', onWindowResizeHandler);

  const focusTrap = (evt) => {

    burger.classList.add('focusable');

    const focusableElementsString = 'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';

    //const menuElements = navbar.querySelectorAll(focusableElementsString);

    if (windowSize < 768) {
      console.log('ok')
      const menuElements = navbar.querySelectorAll(focusableElementsString);
      menuElements.forEach(item => {
        item.classList.add('focusable');
      });
    } else {
      const tabletMenu = document.querySelector('.nav');
      const menuElements = tabletMenu.querySelectorAll(focusableElementsString);
      menuElements.forEach(item => {
        item.classList.add('focusable');
      });
    }



    const focusableElements = document.querySelectorAll('.focusable');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if(evt.keyCode === 9) {
      if(evt.shiftKey) {
        if(document.activeElement === firstFocusableElement) {
          evt.preventDefault();
          lastFocusableElement.focus();
        }
      }
      else if (document.activeElement === lastFocusableElement) {
        evt.preventDefault();
        firstFocusableElement.focus();
      }
    }
  }*/

  const onEscBtnHandler = (evt) => {
    if (evt.keyCode === 27 && navbar.classList.contains('menu-opened')) {
      page.classList.remove('scroll-off');
      navbar.classList.remove('menu-opened');
      burger.classList.remove('opened');
      burger.focus();
      document.removeEventListener('keydown', onEscBtnHandler);
      //document.removeEventListener('keydown', focusTrap);
    }
  }

  const onClickEventHandler = () => {
    navbar.classList.toggle('menu-opened');
    burger.classList.toggle('opened');
    burger.focus();

    if(navbar.classList.contains('menu-opened')) {
      page.classList.add('scroll-off');
      burger.removeEventListener('click', onClickEventHandler);
      //document.addEventListener('keydown', focusTrap);

      setTimeout(function() {
        document.addEventListener('keydown', onEscBtnHandler);
        burger.addEventListener('click', onClickEventHandler);
      }, 700);

    } else {
      page.classList.remove('scroll-off');
      burger.focus();
      document.removeEventListener('keydown', onEscBtnHandler);
      //document.removeEventListener('keydown', focusTrap);
    }
  }

  burger.addEventListener('click', onClickEventHandler);
};

export default menuState();
