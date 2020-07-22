const showIntroTitle = () => {
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
};

export default showIntroTitle;
