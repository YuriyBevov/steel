import IMask from 'imask'

function validatePhone() {

  var phoneInput = document.querySelectorAll("input[type=tel]")

  if (phoneInput) {
    phoneInput.forEach((input) => {
      var phoneMask = IMask(input, {
        mask: '+{7}(000)000-00-00'
      });
    })
  }
};

export default validatePhone();
