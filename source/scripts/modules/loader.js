import showIntroTitle from './showIntroTitle.js'

export const loader = function() {
  const showPage = () => {
    document.removeEventListener("DOMContentLoaded", showPage);

    const loader = document.querySelector('.loader');

    const hideLoader = function () {
      setTimeout(() => {
          loader.style.opacity = 0;
          showIntroTitle();
        }, 800)

      setTimeout(() => {
        loader.style.display ='none';
      }, 1500)

    }();
  }
    document.addEventListener('DOMContentLoaded', showPage);
}();
