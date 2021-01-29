const nav = () => {
  const tab = document.createElement('div');

  const element = document.createElement('h2');
  element.classList.add('text-center', 'text-4xl', 'font-mono', 'pt-9');
  element.innerText = 'HotBites Special';

  const elementPara = document.createElement('p');
  elementPara.classList.add('text-center', 'text-2xl', 'font-mono', 'p-2');
  elementPara.innerText = 'First and fast to have you finger-licking!';

  tab.appendChild(element);
  tab.appendChild(elementPara);

  return tab;
};

export default nav;