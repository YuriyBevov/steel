function toggleElem(el, cl) {
  el.classList.toggle(cl);
}

function removeClass(el,cl) {
  el.classList.remove(cl);
}

function addClass(el,cl) {
  el.classList.add(cl);
}

function fileUpload(el, uploadFileNamePlace) {
  el.addEventListener("change", function(event) {
    const input = event.target;
    uploadFileNamePlace.textContent = input.files[0].name;
  });
}

function focusTrap(evt, firstFocusableElement, lastFocusableElement) {
  if(evt.keyCode === 9) {
    if(evt.shiftKey) {
      if(document.activeElement === firstFocusableElement) {
        evt.preventDefault();
        lastFocusableElement.focus();
      }
    }
    else if (document.activeElement === lastFocusableElement) {
      evt.preventDefault();
      firstFocusableElement.focus();
    }
  }
}

export {toggleElem, removeClass, addClass, fileUpload, focusTrap};
