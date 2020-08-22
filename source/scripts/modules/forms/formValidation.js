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
    formSend(form);
  }
}

export {formValidation};
