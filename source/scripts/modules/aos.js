import AOS from 'aos';
import {minAnimationWidth} from '../utils/vars.js'

 function aos() {

  AOS.init({
    startEvent: 'DOMContentLoaded',
    delay: 300,
    duration: 1300,
    once: true,
    offset: 200,
    disable: /*'phone'/**/function() {
        return window.innerWidth < minAnimationWidth;
      }
    /**/
  });





    // код ниже не работает  тк при смене ширины, формируется масонри и высота адекватно не определяется !!! исправить поведение аос при смене ширины
  /*onElementHeightChange(document.body, function(){
    AOS.refresh();
  });

function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;

    (function run() {
        newHeight = elm.clientHeight;
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer);
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }*/
};

export {aos}
