import {removeClass, addClass, toggleElem} from './func.js';

export default function modal(openButtonClass, modalClass) {

    const btn = document.querySelector(openButtonClass);
    const modal = document.querySelector(modalClass);

    if (btn && modal) {
    const closeBtn = modal.querySelector('.modal__close');

    const removeListeners = () => {
      window.removeEventListener('keydown', onEscBtnHandler);
      window.removeEventListener('mousedown', onMousedownHandler);
    }

    const onCloseBtnClickHandler = () => {
      addClass(modal,'closed');
      removeListeners();
      closeBtn.removeEventListener('click', onCloseBtnClickHandler);
    }

    const onEscBtnHandler = (evt) => {
      if (evt.keyCode === 27) {
        addClass(modal,'closed');
        removeListeners();
      }
    }

    const onMousedownHandler = (evt) => {
      const modalContent = document.querySelector(modalClass + '__wrapper');
      const clickArea = evt.target == modalContent || modalContent.contains(evt.target);
      if(!clickArea) {
        addClass(modal,'closed');
        removeListeners();
      }
    }

    const onClickHandler = (evt) => {
      evt.preventDefault();
      removeClass(modal, 'closed');
      closeBtn.addEventListener('click', onCloseBtnClickHandler);
      closeBtn.focus();
      window.addEventListener('keydown', onEscBtnHandler);
      window.addEventListener('mousedown', onMousedownHandler);
    }

    btn.addEventListener('click', onClickHandler);
  }
};
