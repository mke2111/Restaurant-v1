const contacts = () => {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-us', 'hidden', 'bg-gray-800', 'shadow-lg', 'w-3/6', 'mx-auto', 'mt-9', 'h-48', 'flex', 'flex-col', 'content-between', 'text-center');

  const headline = document.createElement('h2');
  headline.innerText = 'Contact Us at these socials';

  const facebook = document.createElement('div');
  facebook.classList.add('py-9');

  const fHeadline = document.createElement('h4');
  fHeadline.innerText = 'Facebook: HottestBites';

  const twitter = document.createElement('div');
  twitter.classList.add('m');

  const tHeadline = document.createElement('h4');
  tHeadline.innerText = 'Twitter: @hottestBites';

  facebook.appendChild(fHeadline);
  twitter.appendChild(tHeadline);

  contactDiv.appendChild(headline);
  contactDiv.appendChild(facebook);
  contactDiv.appendChild(twitter);

  return contactDiv;
};

export default contacts;