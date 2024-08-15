


function appendToMenu(emptyElement) {
  const bakedCalamari = document.createElement('div');
  const friedCalamari = document.createElement('div');
  const rawCalamari = document.createElement('div');

  bakedCalamari.className = 'baked';
  friedCalamari.className = 'fried';
  rawCalamari.className = 'raw';

  bakedCalamari.innerHTML = 'BAKED CALAMARI';
  friedCalamari.innerHTML = 'FRIED CALAMARI';
  rawCalamari.innerHTML = 'RAWCALAMARI';


  emptyElement.appendChild(bakedCalamari);
  emptyElement.appendChild(friedCalamari);
  emptyElement.appendChild(rawCalamari);
}

export default appendToMenu;