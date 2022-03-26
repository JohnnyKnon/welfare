'use strict';
// Scroll Up btn
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

const SCROLL_UP_BTN = document.querySelector('.scrollUp');

SCROLL_UP_BTN.addEventListener('click', () => {
  scrollIntoView('#total__header');
});

// scroll event
window.addEventListener('scroll', () => {
  let scrollValue = window.scrollY;
  if (scrollValue > 200) {
    SCROLL_UP_BTN.classList.add('scrollUp-active');
  } else if (scrollValue < 200) {
    SCROLL_UP_BTN.classList.remove('scrollUp-active');
  }
});
