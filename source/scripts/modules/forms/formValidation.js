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
     function onClick() {
       grecaptcha.ready(function() {
         grecaptcha.execute('6LebQW0aAAAAADcIZ-jF3ou6YR0-txPl0Z5VdrAu', {action: 'submit'}).then(function(token) {
             if(token.length > 0) {
               formSend(form);
             } else {
               errorMsg.style.display = "block";
             }
         });
       });
     }();
  }
}

export {formValidation};
