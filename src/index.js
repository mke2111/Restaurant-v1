import homePage from './homer.js'

// const homePage = () => {
//   const content = document.getElementById('content');

//   const homeContent = document.createElement('div');
//   homeContent.setAttribute('class', home-content);
//   homeContent.style.display = 'block';

//   // image section
//   const bg = document.createElement('div');
//   bg.setAttribute('class', 'bg');

//   const bgImage = document.createElement('div');
//   bgImage.setAttribute('class', 'bg-image');

//   const bgContent = document.createElement('div');
//   bgContent.setAttribute('class', 'bg-content');
//   // const hTwo = document.createElement('h2');
//   bgContent.innerHTML = '<h2>Welcome to HotBites</h2>';
//   bgContent.innerHTML = '<p>Your one stop eatery</p>';

//   bg.appendChild(bgImage);
//   bg.appendChild(bgContent);

//   homeContent.appendChild(bg);

//   content.appendChild(homeContent);
// }

// const navBar = () => {
//   const content = document.getElementById('content');

//   // header

//   const topDisplay = document.createElement('div');
//   topDisplay.setAttribute('class', 'header');

//   const homeBtn = document.createElement('div');
//   homeBtn.setAttribute('class', 'home-end');
//   // homeBtn.textContent = 'HOMEE';
//   homeBtn.innerHTML = '<h1>HOME</h1>';

//   homeBtn.addEventListener('click', homePage);

//   const contact = document.createElement('div');
//   contact.setAttribute('class', 'contact');
//   contact.innerHTML = '<h1>CONTACT</h1>';

//   topDisplay.appendChild(homeBtn);
//   topDisplay.appendChild(contact);

//   content.appendChild(topDisplay);
// }


// navBar();
homePage();

