const anchorScroll = () => {
  const linkNav = document.querySelectorAll('.scroll-link');

  const SCROLL_SPEED = 0.5;

  linkNav.forEach(link => {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();

      const height = window.pageYOffset;
      const hash = this.href.replace(/[^#]*(.*)/, '$1');
      const top = document.querySelector(hash).getBoundingClientRect().top;

      let start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }
        const progress = time - start;
        const result = (top < 0 ? Math.max(height - progress / SCROLL_SPEED, height + top) : Math.min(height + progress / SCROLL_SPEED, height + top));
        window.scrollTo(0, result);
        if (result !== height + top) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    }, false);
  });
}

export default anchorScroll();
