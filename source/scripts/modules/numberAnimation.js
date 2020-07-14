export const numberAnimation = function () {
  const time  = 1500; // ms
  const step = 1;

  const numAnimation = function (startNum, endNum, element) {
    let el = document.querySelector(element);
    let currentNum = startNum;
    let delay = Math.round(time / (endNum / step));
    let interval = setInterval(() => {
      currentNum = currentNum + step;
      if ( currentNum == endNum) {
        clearInterval(interval);
      }
      el.innerHTML = currentNum;
    }, delay);
  };

  const block = document.querySelector('.advantages__list');

  const onScrollNumberAnimation = function () {
    let coords = block.getBoundingClientRect();
    let pageHeight = document.documentElement.clientHeight;
    if(coords.top < pageHeight) {
      numAnimation( 38, 200, '#projects');
      numAnimation( 0, 5, '#year');
      window.removeEventListener('scroll', onScrollNumberAnimation)
    }
  }

  if (block) {
    window.addEventListener('scroll', onScrollNumberAnimation)
  }
}();
