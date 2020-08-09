import {fileUpload} from "../utils/func.js"

const fillUploadFile = () => {
  const inputs = document.querySelectorAll('.modal-form__file-upload');
  inputs.forEach(input => {
    console.log(input);
    let label = input.previousElementSibling;
    console.log(label);
    let textPlace = label.querySelector('.modal-form__file-text');
    console.log(textPlace);
    fileUpload(input, textPlace);
  })
};

export default fillUploadFile();
