import {modalState} from './modalState.js'

const openModal = function () {
  const modalLinks = document.querySelectorAll('.modal-link');

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
