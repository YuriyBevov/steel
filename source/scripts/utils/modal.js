import {removeClass, addClass, toggleElem} from './func.js';
import {formRefresh} from './formRefresh.js'

export default function modal(openButtonClass, modalClass) {

    const btn = document.querySelector(openButtonClass);
    const modal = document.querySelector(modalClass);
    const page = document.querySelector('html');

    if (btn && modal) {
    const closeBtn = modal.querySelector('.modal__close');

    const refresh = () => {
      formRefresh(modal);
      page.classList.remove('scroll-off');
      window.removeEventListener('keydown', onEscBtnHandler);
      window.removeEventListener('mousedown', onMousedownHandler);
    }

    const onCloseBtnClickHandler = () => {
      addClass(modal,'closed');
      refresh();
      closeBtn.removeEventListener('click', onCloseBtnClickHandler);
    }

    const onEscBtnHandler = (evt) => {
      if (evt.keyCode === 27) {
        addClass(modal,'closed');
        refresh();
      }
    }

    const onMousedownHandler = (evt) => {
      const modalContent = document.querySelector(modalClass + '__wrapper');
      const clickArea = evt.target == modalContent || modalContent.contains(evt.target);
      if(!clickArea) {
        addClass(modal,'closed');
        refresh();
      }
    }

    const onClickHandler = (evt) => {
      evt.preventDefault();
      removeClass(modal, 'closed');
      closeBtn.addEventListener('click', onCloseBtnClickHandler);
      closeBtn.focus();
      page.classList.add('scroll-off');
      window.addEventListener('keydown', onEscBtnHandler);
      window.addEventListener('mousedown', onMousedownHandler);
    }

    btn.addEventListener('click', onClickHandler);
  }
};
