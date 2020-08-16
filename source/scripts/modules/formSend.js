import {modalState} from '../modals/modalState.js';

const formSend = function (currentForm) {

  console.log(modalState)

  const thanksModal = document.querySelector('.modal-success')
  function success() {
    currentForm.reset();
    //currentForm.classList.add('closed');
    //thanksModal.classList.remove('closed');
    modalState(thanksModal);
  }

  function error() {
    //status.innerHTML = "Oops! There was a problem.";
    console.log('error')
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
  }
}

export {formSend};
