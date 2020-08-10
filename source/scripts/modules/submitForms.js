import {formValidation} from '../utils/formValidation.js';

function validateForms() {
    const submitBtns = document.querySelectorAll('.submit-btn');

  submitBtns.forEach(submitBtn => {
    submitBtn.addEventListener('click', function (evt) {
      evt.preventDefault()
      formValidation(this.closest('form'));
    })
  });
}

export default validateForms();
