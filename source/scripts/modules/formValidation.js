const formValidation = (modal) => {

  // если искать все кнопки submit
  /*const submitBtn = document.querySelectorAll('.modal-form__btn');

  submitBtn.forEach(btn => {
    console.log(btn.parentElement )
    const telInput = btn.parentElement.querySelector('input[type="tel"]');
    console.log(telInput)

    const fileInput = btn.parentElement.querySelector('input[type="file"]');
    console.log(fileInput)
  })*/

  const submitBtn = modal.querySelector('.modal-form__btn');
    console.log(submitBtn)
    const tel = modal.querySelector('input[type="tel"]');
    console.log(tel)

    const file = modal.querySelector('input[type="file"]');
    console.log(file)

    let validPhone = false;
    let validFile = false;

    const onSubmitBtnClickHandler = (evt) => {
      evt.preventDefault();
      if(tel) {
        if(tel.value.length === 16) {
          console.log('ok')
          validPhone = true;
          // если поле телефона существует и оно равно 16 числам(длина номера телефона), тк у меня стоит маска и проверять на пробеллы нет смысла, то будет проходить валидация
        } else {
          // if tel is empty or wrong
          console.log('tel is wrong')
          validPhone = false;
        }
      } else {
        // if tel isnt exist
        console.log('tel isnt exist')
        validPhone = true;
      }

      if(file) {
        if(file.value) {
          console.log(file.value)
          validFile = true;

        } else {
          // if file not choozen
          console.log('file isnt choozen')
          validFile = false;
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

  submitBtn.addEventListener('click', onSubmitBtnClickHandler)
}

export {formValidation};
