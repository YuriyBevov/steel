import {removeClass, addClass, toggleElem} from '../utils/func.js';
import {formRefresh} from '../utils/formRefresh.js'

const modalState = (modal) => {

  if (modal) {
    const closeBtn = modal.querySelector('.modal__close');
    const page = document.querySelector('html');
    page.classList.add('scroll-off');
    modal.classList.remove('closed');


    const refresh = (currentModal) => {
      console.log(currentModal)
      formRefresh(currentModal);
      page.classList.remove('scroll-off');
      window.removeEventListener('keydown', onEscBtnHandler);
      window.removeEventListener('mousedown', onMousedownHandler);
      closeBtn.removeEventListener('click', onCloseBtnClickHandler);
    }

    const onCloseBtnClickHandler = () => {
      addClass(modal,'closed');
      refresh(modal);
    }

    const onEscBtnHandler = (evt) => {
      if (evt.keyCode === 27) {
        addClass(modal,'closed');
        refresh(modal);
      }
    }

    const onMousedownHandler = (evt) => {
      const modalContent = modal.querySelector('.modal__wrapper');
      const clickArea = evt.target == modalContent || modalContent.contains(evt.target);
      if(!clickArea) {
        addClass(modal, 'closed');
        refresh(modal);
      }
    }

    setTimeout(function() {
      window.addEventListener('keydown', onEscBtnHandler);
      window.addEventListener('mousedown', onMousedownHandler);
      closeBtn.addEventListener('click', onCloseBtnClickHandler);
    }, 700);
  }
};

export {modalState};
