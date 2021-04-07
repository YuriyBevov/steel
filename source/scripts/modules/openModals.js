/*

  Модуль открытия модальных окон.

  Для реализации, на элемент по клику на который должно открываться мод окно, вешается класс 'modal-link',
  а в аттрибуты записывается data-id с классом модалки(например: data-id="modal-callback");
  Само модальное окно должно иметь класс соответствующий data-id.

*/

import {modalState} from './modals/modalState.js'

const openModal = function () {
  const modalLinks = document.querySelectorAll('.modal-link');
  const isModalOpened = false;

  modalLinks.forEach(link => {

    const onClickHandler = function (evt) {
      evt.preventDefault()

      const id = this.getAttribute('data-id');
      const currentModal = document.querySelector('.' + id);

      modalState(currentModal);
    }

    link.addEventListener('click', onClickHandler);
  });
}

export default openModal();
