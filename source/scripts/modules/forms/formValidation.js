import {formSend} from './formSend.js';

const formValidation = (form) => {
  const tel = form.querySelector('input[type="tel"]');

  const errorMsg = form.querySelector('.invalid-field-msg');

  let validPhone = false;

  if(tel) {
    if(tel.value.length === 16) {
      validPhone = true;
    } else {
      validPhone = false;

      if(errorMsg) {
        errorMsg.style.display = "block";

        const onChangeEventHandler = () => {
          errorMsg.style.display = "none";
          tel.classList.remove('invalid-field');
          tel.removeEventListener('focus', onChangeEventHandler)
        }
        tel.classList.add('invalid-field');
        tel.addEventListener('focus', onChangeEventHandler)
      }
    }
  } else {
    validPhone = true;
  }

  if(validPhone) {
    //formSend(form);
    console.log(form)

      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        console.log("readyState=", form.readyState, "status=", form.status);
        if (form.readyState === XMLHttpRequest.DONE && form.status === 200) {
            // success, show this.responseText here
            console.log("SUCCESS", this);
        }
      }

      request.open(form.method, form.action, true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      var data = new FormData(this);
      for (var key of data.keys())
        console.log(key, data.get(key));

      request.send(data);

  }
}

export {formValidation};
