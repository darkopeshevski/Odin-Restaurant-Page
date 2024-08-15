
import appendToMenu from "./menu-element";
import appendToHome from "./home-element";
import './styles.css';

const divContent = document.getElementById('content');
const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const aboutButton = document.querySelector('.about-button');


menuButton.addEventListener('click', function() {
  divContent.replaceChildren();
  appendToMenu(divContent);

});

homeButton.addEventListener('click', function() {
  divContent.replaceChildren();
  appendToHome(divContent);

});


appendToHome(divContent);