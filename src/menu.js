const menu = () => {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('relative');

  const bg = document.createElement('div');
  bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1576777647209-e8733d7b851d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60')";
  // bg.style.backgroundImage = "url('ceviche.jpeg')";
  // bg.style.backgroundColor = 'red';
  bg.classList.add('bg-cover', 'bg-no-repeat', 'bg-center', 'w-3/6', 'h-96');

  const info = document.createElement('div');
  info.classList.add('absolute', 'top-0');

  const infoP = document.createElement('p');
  infoP.innerText = 'Paradise Paradise';

  info.appendChild(infoP);
  menuDiv.appendChild(bg);
  menuDiv.appendChild(info);

  return menuDiv;
}

export default menu;