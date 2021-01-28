const contact = () => {
  const contactDiv = document.createElement('div');
  // contactDiv.classList.add('relative');

  const headline = document.createElement('h2');
  headline.innerText = 'Contact Us at these socials';

  const facebook = document.createElement('div');
  facebook.classList.add('');

  const fHeadline = document.createElement('h4');
  fHeadline.innerText = 'Facebook: HottestBites';
  facebook.appendChild(fHeadline);

  const twitter = document.createElement('div');
  twitter.classList.add('');

  const tHeadline = document.createElement('h4');
  tHeadline.innerText = 'Twitter: @hottestBites';
  twitter.appendChild(tHeadline);

  contactDiv.appendChild(headline);
  contactDiv.appendChild(facebook);
  contactDiv.appendChild(twitter);

  return contactDiv;
}

export default contact;