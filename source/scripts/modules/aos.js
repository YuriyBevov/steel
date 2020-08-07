import AOS from 'aos';

export const aos = function () {
  AOS.init({
    startEvent: 'DOMContentLoaded',
    delay: 300,
    duration: 1300,
    once: true,
    offset: 50,
    disable: 'phone'
  });
}();
