const formRefresh = (modal) => {
  const invalidFields = modal.querySelectorAll('.invalid-field');
  const uploadFields = modal.querySelectorAll('input[type=file]');
  const textFields = modal.querySelectorAll('input');

  if(invalidFields.length > 0) {
    invalidFields.forEach(field => {
      field.classList.remove('invalid-field');
      const errorMsg = field.nextSibling;
      if(errorMsg.classList.contains('invalid-field-msg')) {
        errorMsg.style.display = 'none';
      }
    })
  }

  if(textFields.length > 0) {
    textFields.forEach(field => {
      field.value = null;
    })
  }

  if (uploadFields.length > 0) {
    uploadFields.forEach(field => {
      field.value = null;
      let label = field.previousElementSibling;
      let textPlace = label.querySelector('.form__file-text');
      textPlace.textContent = "Прикрепите файл";
    });
  }
}

export {formRefresh};
