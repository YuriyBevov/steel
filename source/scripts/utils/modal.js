import {removeClass, addClass, toggleElem} from './func.js';
import {formRefresh} from './formRefresh.js'
import {headerWidth} from './headerWidth.js'

export default function modal(openButtonClass, modalClass) {

    const btn = document.querySelector(openButtonClass);
    const modal = document.querySelector(modalClass);
    const page = document.querySelector('html');

    /*const header = document.querySelector('.header__wrapper');
    console.log(header)
    console.log(header.clientWidth)*/

    if (btn && modal) {
    const closeBtn = modal.querySelector('.modal__close');

    const refresh = () => {
      formRefresh(modal);
      //header.style.width = header.clientWidth;
      headerWidth.modalClose();
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
      /*header.style.width = (header.clientWidth - 12) + 'px'
      console.log(header.clientWidth)*/
      headerWidth.modalOpen();
    }

    btn.addEventListener('click', onClickHandler);
  }
};
