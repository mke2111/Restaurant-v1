import nav from './nav';
import tabs from './tabs';
import menu from './menu';
import about from './about';
import contacts from './contact';

const content = document.getElementById('content');
content.classList.add('bg-gray-900', 'h-screen', 'text-white');

const homePage = () => {
  content.appendChild(nav());
  content.appendChild(tabs());
  content.appendChild(menu());
  content.appendChild(about());
  content.appendChild(contacts());

  const homeBtn = document.querySelector('#home');
  const homeDv = document.querySelector('.menu-us');

  const contactBtn = document.querySelector('#contact');
  const contactDv = document.querySelector('.contact-us');

  const aboutBtn = document.querySelector('#about');
  const aboutDv = document.querySelector('.about-us');


  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      contactDv.classList.remove('hidden');
      contactDv.classList.add('block');
      homeDv.classList.add('hidden');
      aboutDv.classList.add('hidden');
    });
  }

  if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
      aboutDv.classList.remove('hidden');
      aboutDv.classList.add('block');
      homeDv.classList.add('hidden');
      contactDv.classList.add('hidden');
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      homeDv.classList.remove('hidden');
      homeDv.classList.add('block');
      contactDv.classList.add('hidden');
      aboutDv.classList.add('hidden');
    });
  }

};



export default homePage;
