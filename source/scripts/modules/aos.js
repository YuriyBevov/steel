import AOS from 'aos';

export const aos = function () {

  const minAnimationWidth = 767;

  AOS.init({
    startEvent: 'DOMContentLoaded',
    delay: 300,
    duration: 1300,
    once: true,
    anchorPlacement: 'bottom-center',
    disable: function() {
      return window.innerWidth < minAnimationWidth;
    }
  });
}();
