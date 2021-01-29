const contacts = () => {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-us', 'hidden');

  const headline = document.createElement('h2');
  headline.innerText = 'Contact Us at these socials';

  const facebook = document.createElement('div');
  facebook.classList.add('m');

  const fHeadline = document.createElement('h4');
  fHeadline.innerText = 'Facebook: HottestBites';

  const twitter = document.createElement('div');
  twitter.classList.add('k');

  const tHeadline = document.createElement('h4');
  tHeadline.innerText = 'Twitter: @hottestBites';

  facebook.appendChild(fHeadline);
  twitter.appendChild(tHeadline);

  contactDiv.appendChild(headline);
  contactDiv.appendChild(facebook);
  contactDiv.appendChild(twitter);

  return contactDiv;
}

export default contacts;