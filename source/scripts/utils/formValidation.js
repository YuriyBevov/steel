const formValidation = (form) => {
  const tel = form.querySelector('input[type="tel"]');
  const file = form.querySelector('input[type="file"]');
  const errorMsg = form.querySelector('.invalid-message');

  let validPhone = false;
  let validFile = false;

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
          tel.classList.remove('invalid');
          tel.removeEventListener('focus', onChangeEventHandler)
        }
        tel.classList.add('invalid');
        tel.addEventListener('focus', onChangeEventHandler)
      }
    }
  } else {
    // if tel isnt exist
    console.log('tel isnt exist')
    validPhone = true;
  }

  if(file) {
    if(file.value) {
      //console.log(file.value)
      validFile = true;

    } else {
      // if file not choozen
      console.log('file isnt choozen')
      validFile = false;

      // невалидный эффект
      /*console.log(file.previousElementSibling)

      file.previousElementSibling.classList.add('invalid');

      const onChangeEventHandler = () => {
        file.previousElementSibling.classList.remove('invalid');
        file.previousElementSibling.removeEventListener('focus', onChangeEventHandler)
      }

      file.previousElementSibling.addEventListener('focus', onChangeEventHandler)*/
    }
  } else {
    // if file isnt exist
    console.log('file isnt exist');
    validFile = true;
  }

  if(validFile && validPhone) {
    console.log('valid')
    // если поля существуют и оно заполненны, то будет происходить отправка
  } else {
    console.log('invalid')
  }
}

export {formValidation};
