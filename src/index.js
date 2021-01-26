import homePage from './home'

const content = document.getElementById('content');

// header

const topDisplay = document.createElement('div');
topDisplay.setAttribute('class', 'header');

const home = document.createElement('div');
home.setAttribute('class', 'home');
home.innerHTML = '<h1>HOME</h1>';

const contact = document.createElement('div');
contact.setAttribute('class', 'contact');
contact.innerHTML = '<h1>CONTACT</h1>';


topDisplay.appendChild(home);
topDisplay.appendChild(contact);

content.appendChild(topDisplay)

home.addEventListener('click', (e) => {
  e.preventDefault();
  homePage();
})

