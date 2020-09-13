import {focusTrap} from '../utils/func.js';

function menuState() {
  const burger = document.querySelector('.toggle');
  const mobile_menu = document.querySelector('.nav');
  const page = document.querySelector('html');

  const focusableElementsString = 'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
  const focusableMenuElems = mobile_menu.querySelectorAll(focusableElementsString);

  const navbar = document.querySelector('.header__navbar');
  const focusableNavbarElems = navbar.querySelectorAll(focusableElementsString);

  const refresh = () => {
    burger.focus();
    page.classList.remove('scroll-off');

    document.querySelectorAll('.focusable').forEach(el => {
      el.classList.remove('focusable');
    });

    if (mobile_menu.classList.contains('opened')) {
      mobile_menu.classList.remove('opened');
    }
    if (burger.classList.contains('opened')) {
      burger.classList.remove('opened');
    }

    document.removeEventListener('keydown', menuFocusTrap);
    document.removeEventListener('keydown', onEscBtnHandler);
    window.removeEventListener('resize', onResizeEventListener);

    focusableNavbarElems.forEach(item => {
      if(!item.classList.contains('focusable')) {
        item.setAttribute('tabindex', '0');
      }
    });

    focusableMenuElems.forEach(elem => {
      elem.classList.remove('focusable');
    });
  }

  const menuFocusTrap = (evt) => {
    burger.classList.add('focusable');

    const focusableElements = document.querySelectorAll('.focusable');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    focusableNavbarElems.forEach(item => {
      if(!item.classList.contains('focusable')) {
        item.setAttribute('tabindex', '-1');
      }
    });

    focusTrap(evt, firstFocusableElement, lastFocusableElement);
  }

  const onEscBtnHandler = (evt) => {
    const modals = document.querySelectorAll('.modal');
    let isModalOpened = false;

    modals.forEach(modal => {
      if(!modal.classList.contains('closed')) {
        isModalOpened = true;
      }
    });

    if (evt.keyCode === 27 && mobile_menu.classList.contains('opened') && !isModalOpened) {
      refresh();
    } else {
      page.classList.add('scroll-off');
    }
  };

  let windowSize = window.innerWidth;

  const onResizeEventListener = () => {
    windowSize = window.innerWidth;

    if (windowSize > 1199) {
      refresh();
    }
  }

  const onClickEventHandler = () => {
    mobile_menu.classList.toggle('opened');
    burger.classList.toggle('opened');
    focusableMenuElems.forEach(elem => {
      elem.classList.add('focusable');
    });

    if (mobile_menu.classList.contains('opened')) {
      page.classList.add('scroll-off');
      burger.removeEventListener('click', onClickEventHandler);

      document.addEventListener('keydown', menuFocusTrap);
      window.addEventListener('resize', onResizeEventListener);

      setTimeout(function() {
        document.addEventListener('keydown', onEscBtnHandler);
        burger.addEventListener('click', onClickEventHandler);
      }, 700);
    } else {
      refresh();
    }
  };

  burger.addEventListener('click', onClickEventHandler);
};

export default menuState();
