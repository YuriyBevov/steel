const modalFocus = (currentModal) => {

  const closeBtn = currentModal.querySelector('.modal__close');
  closeBtn.focus();

  const submitBtn = currentModal.querySelector('.form__btn');

  console.log(currentModal.childNodes)

  /*const closeBtn = currentModal.querySelector('.modal__close');
  const submitBtn = currentModal.querySelector('.form__btn');

  closeBtn.focus();

  const onCloseBtnFocusHandler = () => {
    const onTabShiftClickHandler = (evt) => {
        if(evt.shiftKey && evt.key === 'Tab') {
          console.log('tabshift');
          evt.preventDefault();
          window.removeEventListener('keydown', onTabShiftClickHandler);
          submitBtn.focus();
        }
      }
    window.addEventListener('keydown', onTabShiftClickHandler);
  };

  closeBtn.addEventListener('focus', onCloseBtnFocusHandler);

  const onFocusHandler = () => {
    const onTabClickHandler = (evt) => {
      if(evt.key === 'Tab') {
        evt.preventDefault();
        closeBtn.focus();
        window.removeEventListener('keydown', onTabClickHandler);
      } else if(evt.shiftKey && evt.key === 'Tab') {
          console.log('poi')
          evt.target.previousElementSibling.focus();
        } /*else if(evt.key !== 'Enter') {
          evt.preventDefault();
        }*/
      //}


    /*window.addEventListener('keydown', onTabClickHandler);
  };

  submitBtn.addEventListener('focus', onFocusHandler);*/
};

export {modalFocus};
