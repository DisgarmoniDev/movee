'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Slider
  const slides   = document.querySelectorAll('.reviews__block'),
    slideNext    = document.querySelector('.reviews__slider-next'),
    slidePrev    = document.querySelector('.reviews__slider-prev');
  let indexSlide = 1;

  const updateSlide = (n) => {
    if (n > slides.length) {
      indexSlide = 1;
    } else if (n < 1) {
      indexSlide = slides.length;
    }
    slides.forEach((slide) => slide.style.display = 'none');
    slides[indexSlide - 1].style.display = 'block';
  };
  updateSlide(indexSlide);

  const changeSlide = (n) => {
    indexSlide += n;
    updateSlide(indexSlide);
  };

  slideNext.addEventListener('click', () => changeSlide(1));
  slidePrev.addEventListener('click', () => changeSlide(-1));
});
