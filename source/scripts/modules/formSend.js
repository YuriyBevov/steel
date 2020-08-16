const formSend = function (currentForm) {
  console.log(currentForm)

  /*<form id="my-form"
  action="https://formspree.io/mrgydwnv"
  method="POST"
>
  <label>Email:</label>
  <input type="email" name="email" />
  <label>Message:</label>
  <input type="text" name="message" />
  <button id="my-form-button">Submit</button>
  <p id="my-form-status"></p>
</form>*/

    // get the form elements defined in your form HTML above

    //var form = currentForm;
    //var button = currentForm.querySelector('.form__btn');
    //var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
      currentForm.reset();
      //button.style = "display: none ";
      //status.innerHTML = "Thanks!";
      console.log('success')
    }

    function error() {
      //status.innerHTML = "Oops! There was a problem.";
      console.log('error')
    }

    // handle the form submission event

    /*form.addEventListener("submit", function(evt) {
      evt.preventDefault();*/
      console.log('submit')
      var data = new FormData(currentForm);
      ajax(currentForm.method, currentForm.action, data, success, error);
    //});

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
