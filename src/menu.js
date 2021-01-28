const menu = () => {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('relative');

  const bg = document.createElement('div');
  bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1576777647209-e8733d7b851d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60')";
  bg.classList.add('bg-cover', 'bg-no-repeat', 'bg-center', 'w-5/6', 'h-96', 'mx-auto');

  const info = document.createElement('div');
  info.classList.add('absolute', 'top-0', 'pl-96', 'pt-40', 'text-lg', 'text-red', 'text-center');

  const infoP = document.createElement('p');
  infoP.innerText = 'Paradise in Hawaiin combos for your tastes. Paradise in Hawaiin combos for your tastes';

  const infoBtn = document.createElement('button');
  infoBtn.innerText = 'Order';
  infoBtn.classList.add('bg-red-500', 'hover:bg-red-700', 'py-2', 'px-4', 'rounded-full');


  info.appendChild(infoP);
  info.appendChild(infoBtn)

  menuDiv.appendChild(bg);
  menuDiv.appendChild(info);

  return menuDiv;
}

export default menu;