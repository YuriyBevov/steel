import {fileUpload} from "../utils/func.js"

const fillUploadFile = () => {
  const inputs = document.querySelectorAll('.modal-form__file-upload');

  inputs.forEach(input => {
    let label = input.previousElementSibling;
    let textPlace = label.querySelector('.modal-form__file-text');
    fileUpload(input, textPlace);
  })
};

export default fillUploadFile();
