import nav from './nav';
import tabs from './tabs';
import menu from './menu';
import contacts from './contact';
// import switchTabs from './switchTabs';
// import contact from './contact';

const content = document.getElementById('content');
content.classList.add('bg-gray-700', 'h-screen', 'text-white');

const homePage = () => {
  content.appendChild(nav());
  content.appendChild(tabs());
  content.appendChild(menu());
  content.appendChild(contacts());

  // content.appendChild(switchTabs());


};



export default homePage;
