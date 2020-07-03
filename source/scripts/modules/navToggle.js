import {removeClass, toggleElem} from '../modules/utils.js';

export const navToggle = () => {
  const btn = document.querySelector('#toggle');
  const navbar = document.querySelector('.nav');
  const nav = document.querySelector('.nav__list');

  const toggleMenu = () => {
    toggleElem(btn, 'opened');
    toggleElem(nav, 'opened');
  }

  const closeMenu = () => {
    removeClass(btn, 'opened')
    removeClass(nav, 'opened')
  }

  const removeMenuListeners = () => {
    document.removeEventListener("keydown", onEscCloseMenu)
    document.removeEventListener("mousedown", onClickCloseMenu)
  }


  const onEscCloseMenu = (evt) => {
    if (evt.keyCode === 27) {
      closeMenu();
      removeMenuListeners();
    }
  }

  const onClickCloseMenu = (evt) => {
    const nav__menu = evt.target == navbar || navbar.contains(evt.target);

    if (!nav__menu) {
      closeMenu();
      removeMenuListeners();
    }
  }

  const onBtnClickToggleMenu = () => {
    toggleMenu();

    if(nav.classList.contains('opened')) {
      document.addEventListener('keydown', onEscCloseMenu);
      document.addEventListener('mousedown', onClickCloseMenu);
    } else {
      removeMenuListeners();
    }
  }

  btn.addEventListener('click', onBtnClickToggleMenu)
}

navToggle();
