



function appendToHome(emptyElement) {
  const title = document.createElement('div');
  const someText = document.createElement('div');
  
  
  title.innerHTML = 'Melipnos Calamari Restaurant';
  someText.innerHTML = 'The best calamari in town!';

  title.className = 'title';
  someText.className = 'some-text';

  emptyElement.appendChild(title);
  emptyElement.appendChild(someText);
}

export default appendToHome;