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

export {toggleElem, removeClass, addClass, fileUpload};
