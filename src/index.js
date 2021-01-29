import homePage from './homer.js'

homePage();

const homeBtn = document.querySelector('#menu');
const homeDv = document.querySelector('.menu-us');

const contactBtn = document.querySelector('#contact');
const contactDv = document.querySelector('.contact-us');

contactBtn.addEventListener('click', () => {
  contactDv.classList.remove('hidden');
  contactDv.classList.add('block');
  homeDv.classList.add('hidden');
});

homeBtn.addEventListener('click', () => {
  homeDv.classList.remove('hidden');
  homeDv.classList.add('block');
  contactDv.classList.add('hidden');
});