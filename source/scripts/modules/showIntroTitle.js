/*const showIntroTitle = () => {
  const intro = document.querySelector('.intro__description');

  if(intro) {
    const path = document.querySelectorAll('.intro__description path');

    for(let i = 0; i < path.length; i++) {

      let pathLength = path[i].getTotalLength();

      path[i].setAttribute('stroke-dasharray', pathLength);
      path[i].setAttribute('stroke-dashoffset', pathLength);
      path[i].classList.add('start-animation');
    }
  }
};*/

const showIntroTitle = () => {

  const text = document.querySelector('.intro__description');
  const strText = text.textContent;
  const splitText = strText.split('');

  text.textContent = '';

  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>"
  }

  let char = 0;

  let timer= setInterval(onTick, 50);

  function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
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
};

export default showIntroTitle;
