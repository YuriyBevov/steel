import {scrollToEl_toCenterOfPage} from '../utils/func.js';

export const galleryChange = function () {
  const gallery = document.querySelectorAll('.portfolio__gallery');
  const btnPrev = document.querySelector('.portfolio__btn--prev');
  const btnNext = document.querySelector('.portfolio__btn--next');
  const scrollTo = document.querySelector('#portfolio');

  const activeGalleryClass = 'portfolio__gallery--active';
  let currentActiveListID,
      listLength,
      currentActiveList;

  function resetActiveItem (list, activeListClass) {
    for(let i = 0; i < list.length; i++) {
      if(list[i].classList.contains(activeListClass)) {
        list[i].classList.remove(activeListClass);
        currentActiveListID = list[i].getAttribute('data-id');
        currentActiveList = list[i];
        listLength = list.length;
      }
    }
  }

  function setActiveNextItem (currentActiveListID, currentActiveList, listLength, btnPrev, btnNext) {
    if ( currentActiveListID < listLength) {
      currentActiveList = currentActiveList.nextElementSibling;
      currentActiveList.classList.add(activeGalleryClass);
      currentActiveListID++
      scrollToEl_toCenterOfPage(scrollTo);

      setNextBtnDisabled(currentActiveListID, listLength, btnPrev, btnNext);
    }
  }

  function setActivePrevItem (currentActiveListID, currentActiveList, listLength, btnPrev, btnNext) {
    if ( currentActiveListID > 1) {
      currentActiveList = currentActiveList.previousElementSibling;
      currentActiveList.classList.add(activeGalleryClass);
      currentActiveListID--
      scrollToEl_toCenterOfPage(scrollTo);

      setPrevBtnDisabled(currentActiveListID, listLength, btnPrev, btnNext);
    }
  }

  function setPrevBtnDisabled(currentActiveListID, listLength, btnPrev, btnNext) {
    if (btnNext.hasAttribute('disabled') == true) {
      btnNext.removeAttribute('disabled')
    }

    if ( currentActiveListID == 1) {
      btnPrev.setAttribute('disabled', true);
    }
  }

  function setNextBtnDisabled(currentActiveListID, listLength, btnPrev, btnNext) {
    if (btnPrev.hasAttribute('disabled') == true) {
      btnPrev.removeAttribute('disabled')
    }

    if ( currentActiveListID == listLength) {
      btnNext.setAttribute('disabled', true);
    }
  }

  const onNextBtnClickHandler = () => {
    resetActiveItem(gallery, activeGalleryClass);
    setActiveNextItem(currentActiveListID, currentActiveList, listLength, btnPrev, btnNext);
  }

  const onPrevBtnClickHandler = () => {
    resetActiveItem(gallery, activeGalleryClass);
    setActivePrevItem(currentActiveListID, currentActiveList, listLength, btnPrev, btnNext);
  }

  if (document.querySelector('.portfolio')) {
    btnNext.addEventListener('click', onNextBtnClickHandler);
    btnPrev.addEventListener('click', onPrevBtnClickHandler);
  }
}();
