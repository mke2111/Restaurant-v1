const homePage = () => {
  const homeContent = document.createElement('div');
  homeContent.setAttribute('class', home-content);

  // image section
  const bg = document.createElement('div');
  bg.setAttribute('class', 'bg');

  const bgImage = document.createElement('div');
  bgImage.setAttribute('class', 'bg-image');

  const bgContent = document.createElement('div');
  bgContent.setAttribute('class', 'bg-content');
  // const hTwo = document.createElement('h2');
  bgContent.innerHTML = '<h2>Welcome to HotBites</h2>';
  bgContent.innerHTML = '<p>Your one stop eatery</p>';

  bg.appendChild(bgImage);
  bg.appendChild(bgContent);

  homeContent.appendChild(bg);
}

export { homePage };