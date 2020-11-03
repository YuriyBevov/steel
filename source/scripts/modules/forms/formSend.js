import {modalState} from '../modals/modalState.js';

const formSend = function (currentForm) {
  const thanksModal = document.querySelector('.modal-success')
  const errorModal = document.querySelector('.modal-error')

  function success() {
    currentForm.reset();
    modalState(thanksModal);
  }

  function error() {
    modalState(errorModal);
  }

  // handle the form submission event

  var data = new FormData(currentForm);
  ajax(currentForm.method, currentForm.action, data, success, error);

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  };
}

export {formSend};
