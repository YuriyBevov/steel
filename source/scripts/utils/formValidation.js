import {formSend} from '../modules/formSend.js';

const formValidation = (form) => {
  const tel = form.querySelector('input[type="tel"]');

  const errorMsg = form.querySelector('.invalid-field-msg');

  let validPhone = false;

  if(tel) {
    if(tel.value.length === 16) {
      validPhone = true;
      // если поле телефона существует и оно равно 16 числам(длина номера телефона), тк у меня стоит маска и проверять на пробеллы нет смысла, то будет проходить валидация
    } else {
      // if tel is empty or wrong
      console.log('tel is wrong')
      validPhone = false;

      // невалидный эффект

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
    // if tel isnt exist
    console.log('tel isnt exist')
    validPhone = true;
  }

  if(validPhone) {
    console.log('valid')
    formSend(form);
    // если поля существуют и оно заполненны, то будет происходить отправка
  } else {
    console.log('invalid')
  }
}

export {formValidation};
