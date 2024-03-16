// Write your code here!
const mainElement = document.getElementById('main');
mainElement.parentNode.removeChild(mainElement);

var newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");


newHeader.textContent = "Steph is the champion";