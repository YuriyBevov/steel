const formSend = function (currentForm) {
  console.log(currentForm)
  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    /*var form = currentForm;
    console.log(form)*/
    //var button = currentForm.querySelector('.form__btn');
    //var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
      currentForm.reset();
      //button.style = "display: none ";
      //status.innerHTML = "Thanks!";
      console.log('success')
    }

    /*function error() {
      status.innerHTML = "Oops! There was a problem.";
    }*/

    // handle the form submission event

    currentForm.addEventListener("submit", function(ev) {
      ev.preventDefault();
      console.log('submit')
      var data = new FormData(currentForm);
      ajax(currentForm.method, currentForm.action, data, success, error);
    });
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
        console.log('ok')
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
        console.log('wrong')
      }
    };
    xhr.send(data);
  }
}

export {formSend};
