const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const items = document.querySelector('.navigation__list');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);

const itemsClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
}

items.addEventListener('click', itemsClick);

AOS.init({
  easing: 'ease',
  duration: 1800,
  once: true
});
