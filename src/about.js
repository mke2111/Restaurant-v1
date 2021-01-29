const about = () => {
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about-us', 'hidden', 'bg-gray-800', 'shadow-lg', 'w-4/6', 'mx-auto', 'mt-9', 'h-96', 'flex', 'flex-col', 'content-between', 'text-center');

  const headline = document.createElement('h2');
  headline.innerText = 'About HotBites';

  const facebook = document.createElement('div');
  facebook.classList.add('py-9');

  const fHeadline = document.createElement('p');
  fHeadline.classList.add('w-2/3', 'mx-auto');
  fHeadline.innerText = 'Live a well-travelled life in style and experience authentic cuisines, indigenous aesthetics and spectacular delights in some of the world’s most extraordinary locations with Serena Hotels. Our diverse collection of thirty-five hotels, resorts, safari lodges, camps and forts within East Africa, Mozambique and South and Central Asia are for those who. Our diverse collection of thirty-five hotels, resorts, safari lodges, camps and forts within East Africa, Mozambique and South and Central Asia are for those who';

  facebook.appendChild(fHeadline);

  aboutDiv.appendChild(headline);
  aboutDiv.appendChild(facebook);

  return aboutDiv;
};

export default about;