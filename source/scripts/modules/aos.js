import AOS from 'aos';

export const aos = function () {
  AOS.init({
    startEvent: 'DOMContentLoaded',
    delay: 500,
    duration: 1500,
    once: true,
    anchorPlacement: 'bottom-center',
  });
}();
