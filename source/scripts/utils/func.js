function toggleElem(el, cl) {
  el.classList.toggle(cl);
}

function removeClass(el,cl) {
  el.classList.remove(cl);
}

function addClass(el,cl) {
  el.classList.add(cl);
}

const scrollWidth = () => {
  let div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height ='50px';
  document.body.append(div);
  let size = div.offsetWidth - div.clientWidth;
  div.remove();

  return size
};

function fileUpload(el, uploadFileNamePlace) {
  el.addEventListener("change", function(event) {
    const input = event.target;
    uploadFileNamePlace.textContent = input.files[0].name;
  });
}

export {toggleElem, removeClass, addClass, scrollWidth, fileUpload};
