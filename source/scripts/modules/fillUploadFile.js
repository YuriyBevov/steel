import {fileUpload} from "../utils/func.js"

const fillUploadFile = () => {
  const inputs = document.querySelectorAll('.form__file-upload');
  inputs.forEach(input => {
    let label = input.previousElementSibling;
    let textPlace = label.querySelector('.form__file-text');
    fileUpload(input, textPlace);
  })
};

export default fillUploadFile();
