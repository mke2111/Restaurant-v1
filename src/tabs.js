const tabs = () => {
  const tabsDiv = document.createElement('div');
  tabsDiv.classList.add('flex', 'flex-row', 'justify-around', 'bg-gray-500', 'py-2');

  const home = document.createElement('button');
  home.setAttribute('id', 'home');
  home.classList.add('text-center', 'text-lg', 'bg-gray-600', 'rounded-md', 'font-mono', 'p-2');
  home.innerText = 'Home';
  // home.addEventListener('click', menu);

  const about = document.createElement('button');
  about.setAttribute('id', 'about');
  about.classList.add('text-center', 'text-lg', 'bg-gray-600', 'rounded-md', 'font-mono', 'p-2');
  about.innerText = 'About';

  const contact = document.createElement('button');
  contact.setAttribute('id', 'contact');
  contact.classList.add('text-center', 'text-lg', 'bg-gray-600', 'rounded-md', 'font-mono', 'p-2');
  contact.innerText = 'Contact';

  tabsDiv.appendChild(home);
  tabsDiv.appendChild(about);
  tabsDiv.appendChild(contact);

  return tabsDiv;
};

export default tabs;