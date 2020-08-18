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
