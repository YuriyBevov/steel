import AOS from 'aos';

function aos() {
  AOS.init({
    startEvent: 'DOMContentLoaded',
    delay: 300,
    duration: 1300,
    once: true,
    offset: 200,
    disable: 'phone'
  });
};

export {aos}
