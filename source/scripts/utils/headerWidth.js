const toggle = document.querySelector('.toggle');

const headerWidth = {
  modalOpen: function () {
    toggle.style.marginRight = 12 + 'px';
    
  },
  modalClose: function () {
    console.log('off')
    toggle.style.marginRight = 0 + 'px';
  }
}

export {headerWidth}
