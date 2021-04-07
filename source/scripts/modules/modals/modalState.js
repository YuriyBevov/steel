import {removeClass, addClass, toggleElem, focusTrap} from '../../utils/func.js';
import {formRefresh} from '../forms/formRefresh.js'

const modalState = (modal) => {

  if (modal) {
    const lastFocusedElement = document.activeElement;
    const closeBtn = modal.querySelector('.modal__close');
    const page = document.querySelector('html');

    page.classList.add('scroll-off');

    const focusableElementsString = 'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
    const focusableElements = modal.querySelectorAll(focusableElementsString);
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const refresh = () => {
      formRefresh(modal);
      const mobile_menu = document.querySelector('.nav');
      if(!mobile_menu.classList.contains('opened')) {
        page.classList.remove('scroll-off');
      }
      window.removeEventListener('keydown', onEscBtnHandler);
      window.removeEventListener('mousedown', onMousedownHandler);
      closeBtn.removeEventListener('click', onCloseBtnClickHandler);
      modal.removeEventListener('keydown', modalFocusTrap);

      lastFocusedElement.focus();
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

    const modalFocusTrap = (evt) => {
      focusTrap(evt, firstFocusableElement, lastFocusableElement);
    }

    const onMousedownHandler = (evt) => {
      const modalContent = modal.querySelector('.modal__wrapper');
      const clickArea = evt.target == modalContent || modalContent.contains(evt.target);
      if(!clickArea) {
        addClass(modal, 'closed');
        refresh();
      }
    }

    const openModal = () => {
      modal.classList.remove('closed');
      firstFocusableElement.focus();
      modal.addEventListener('keydown', modalFocusTrap);

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
