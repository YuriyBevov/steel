import AOS from 'aos';

 function aos() {
  const minAnimationWidth = 767;

  AOS.init({
    startEvent: 'DOMContentLoaded',
    delay: 300,
    duration: 1300,
    once: true,
    offset: 20,
    disable: function() {
      return window.innerWidth < minAnimationWidth;
    }
  });
};

export {aos}
