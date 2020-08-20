import {removeClass, addClass, toggleElem} from '../../utils/func.js';
import {formRefresh} from '../forms/formRefresh.js'
import {modalFocus} from './modalFocus.js';

const modalState = (modal) => {

  if (modal) {
    const closeBtn = modal.querySelector('.modal__close');
    const page = document.querySelector('html');
    page.classList.add('scroll-off');

    const refresh = () => {
      formRefresh(modal);
      page.classList.remove('scroll-off');
      window.removeEventListener('keydown', onEscBtnHandler);
      window.removeEventListener('mousedown', onMousedownHandler);
      closeBtn.removeEventListener('click', onCloseBtnClickHandler);
    }

    const onCloseBtnClickHandler = () => {
      addClass(modal,'closed');
      refresh();
    }

    const onEscBtnHandler = (evt) => {
      if (evt.keyCode === 27) {
        addClass(modal,'closed');
        refresh();
      }
    }

    const onMousedownHandler = (evt) => {
      const modalContent = modal.querySelector('.modal__wrapper');
      // console.log(modalContent.childNodes);
      // form__btn, modal__close
      const clickArea = evt.target == modalContent || modalContent.contains(evt.target);
      if(!clickArea) {
        addClass(modal, 'closed');
        refresh();
      }
    }

    const openModal = () => {
      modal.classList.remove('closed');
      modalFocus(modal);

      setTimeout(function() {
        window.addEventListener('keydown', onEscBtnHandler);
        window.addEventListener('mousedown', onMousedownHandler);
        closeBtn.addEventListener('click', onCloseBtnClickHandler);
      }, 700);
    }

    (function checkModals () {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(isOpened => {
        if(!isOpened.classList.contains('closed')) {
          isOpened.classList.add('closed');
        }
      });
      openModal();
    })();
  }
};

export {modalState};
