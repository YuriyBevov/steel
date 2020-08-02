import AOS from 'aos';
import {minAnimationWidth} from '../utils/vars.js'

 function aos() {

  AOS.init({
    startEvent: 'DOMContentLoaded',
    delay: 300,
    duration: 1300,
    once: true,
    offset: 200,
    disable: 'phone'/*function() {
        return window.innerWidth < minAnimationWidth;
      }*/
  });
};

export {aos}
