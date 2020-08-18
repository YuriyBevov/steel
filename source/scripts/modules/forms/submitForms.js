import {formValidation} from './formValidation.js';

function submitForms() {
    const submitBtns = document.querySelectorAll('.submit-btn');

  submitBtns.forEach(submitBtn => {
    submitBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      formValidation(this.closest('form'));
    })
  });
}

export default submitForms();
