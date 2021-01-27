import nav from './nav';
import tabs from './tabs';

const content = document.getElementById('content');
content.classList.add('bg-gray-700', 'h-screen', 'text-white');

const homePage = () => {
  content.appendChild(nav());
  content.appendChild(tabs());
};

export default homePage;
