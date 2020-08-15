const formRefresh = (modal) => {
  const invalidFields = modal.querySelectorAll('.invalid-field');

  if(invalidFields.length > 0) {
    invalidFields.forEach(field => {
      field.classList.remove('invalid-field');
      const errorMsg = field.nextSibling;
      if(errorMsg.classList.contains('invalid-field-msg')) {
        errorMsg.style.display = 'none';
      }
    })
  }
}

export {formRefresh};
