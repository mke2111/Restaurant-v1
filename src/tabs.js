const tabs = () => {
  const tabsDiv = document.createElement('div');
  tabsDiv.classList.add('flex', 'flex-row', 'justify-around', 'bg-gray-500', 'py-2');

  const home = document.createElement('div');
  home.classList.add('text-center', 'text-lg', 'bg-gray-600', 'rounded-md', 'font-mono', 'p-2');
  home.innerText = 'Home';

  const contact = document.createElement('div');
  contact.classList.add('text-center', 'text-lg', 'bg-gray-600', 'rounded-md', 'font-mono', 'p-2');
  contact.innerText = 'Contact';

  tabsDiv.appendChild(home);
  tabsDiv.appendChild(contact);

  return tabsDiv;
}

export default tabs;