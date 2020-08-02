import {minAnimationWidth} from '../utils/vars.js';

const showIntroTitle = () => {
  const text = document.querySelector('.intro__description');
  if(window.innerWidth > minAnimationWidth) {
    if(text) {
      const strText = text.textContent;
      const splitText = strText.split('');

      text.textContent = '';

      for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>"
      }

      let char = 0;
      let timer= setInterval(onTick, 50);

      function onTick(){
        text.classList.add('animated');
        const span = text.querySelectorAll('span')[char];
        span.classList.add('animated');
        char++
        if(char === splitText.length) {
          complete();
          return;
        }
      }

      function complete(){
        clearInterval(timer);
        timer = null;
      }
    }
  } else if(text) {
    text.style.transform = 'translateY(0)';
  }
};

export default showIntroTitle;
