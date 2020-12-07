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

function getPosY(el) {
  return el.getBoundingClientRect().top;
}

function getElCurHeight(el) {
  return el.clientHeight;
}

function scrollToEl_toCenterOfPage(el) {
  const rect = el.getBoundingClientRect() // get rects(width, height, top, etc)
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  window.scroll({
    top: rect.top + rect.height / 2 - viewHeight / 2,
    behavior: 'smooth' // smooth scroll
  });
}


function scrollToEl_toTopOfPage(el) {
  const topPos = el.getBoundingClientRect().top + window.pageYOffset

  window.scrollTo({
    top: topPos, // scroll so that the element is at the top of the view
    behavior: 'smooth' // smooth scroll
  });
}

export {toggleElem, removeClass, addClass, fileUpload, focusTrap, getPosY, getElCurHeight, scrollToEl_toCenterOfPage, scrollToEl_toTopOfPage};
