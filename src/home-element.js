



function appendToHome(emptyElement) {
  const text = document.createElement('p');
  const shit = document.createElement('p');
  const da = document.createElement('p');
  // ovie bea za primer, ovde kje gi dodadam ostanatite elementi: image, headline, text bla bla...
  
  text.innerHTML = 'blabla';
  shit.innerHTML = 'shiitt';
  da.innerHTML = 'hi';

  emptyElement.appendChild(text);
  emptyElement.appendChild(shit);
  emptyElement.appendChild(da);
}

export default appendToHome;