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

  /*function submitHandler(e) {
    e.preventDefault();*/

    /*var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      console.log("readyState=", this.readyState, "status=", this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // success, show this.responseText here
          console.log("SUCCESS", this);
      }
    }

    request.open(this.method, this.action, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    var data = new FormData(this);
    for (var key of data.keys())
      console.log(key, data.get(key));

    request.send(data);
  }*/

  /*document.querySelectorAll("form").forEach(form =>
    form.addEventListener("submit", submitHandler)
  );*/

  /*console.log(currentForm)

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      console.log("readyState=", currentForm.readyState, "status=", currentForm.status);
      if (currentForm.readyState === XMLHttpRequest.DONE && currentForm.status === 200) {
          // success, show this.responseText here
          console.log("SUCCESS", currentForm);
      }
    }

    request.open(currentForm.method, currentForm.action, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    var data = new FormData(currentForm);
    for (var key of data.keys())
      console.log(key, data.get(key));

    request.send(data);*/

}

export {formSend};
