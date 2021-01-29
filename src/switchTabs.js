import contact from './contact';
// import tabs from './tabs';
import menu from './menu';
import contact from './contact';

const switchTabs = (value) => {
  if (value === 'home') {
    menu();
  } else if (value === 'contact') {
    contact();
  }
}

export default switchTabs;