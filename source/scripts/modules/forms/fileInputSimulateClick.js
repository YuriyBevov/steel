const fileInputSimulateClick = () => {
  const file = document.querySelector('.form__file');

  const onClickHandler = (evt) => {
    evt.preventDefault();
    file.nextElementSibling.click();
  }

  const onKeydownHandler = (evt) => {
    if(evt.keyCode === 13) {
      file.nextElementSibling.click();
    }
  }

  if(file) {
    file.addEventListener('click', onClickHandler);
    file.addEventListener('keydown', onKeydownHandler);
  }
};

export default fileInputSimulateClick();
