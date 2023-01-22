// sélecteurs
const bouton = document.getElementById("bouton");
const ronaldo = document.getElementById("ronaldo");

// réaction a un événement + condition "if/else" pour pouvoir alterner la couleur du h1 en faisant un "click"
bouton.addEventListener("click", () => {
  if (ronaldo.style.color == `red`) {
    ronaldo.style.color = `rgb(138, 226, 56)`; 
  } else {
    ronaldo.style.color = `red`;
  }
});

// sélection d'un élément -> 'div p' + réaction a un événement + boucle "for" + propriété "classList" avec la fonction "Toggle" = pour pouvoir créer un effet de slide sur le 'p'
const button2 = document.querySelector("#btn");

const paragraph = document.querySelectorAll("div p");

console.log(paragraph);

button2.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    paragraph[i].classList.toggle("animateText");
  }
});

// sélection d'un élément (audio) pour faire en sorte que lorsqu'on "click" sur la balle et sur le bouton "SIIIUUU" l'audio sii.mp3 s'active
const element = document.querySelector("#h1");
const Suiii = document.querySelector("#suiii");

const myaudio = document.querySelector("audio");

Suiii.addEventListener("click", () => {
  myaudio.play();
});

// sélection d'un élément (ballon) + console.log pour afficher la valeur dans la console
const ballon = document.querySelector("#objet");
console.log("fdfsfd");
console.log(ballon);

// réaction a un événement, pour qu'au click la balle parte aléatoirement entre -0,5 et 0,5 + le setTimeout qui permet de définir la durée d'envoie et du retour du ballon
ballon.addEventListener("click", () => {
  const tirX = (Math.random() - 0.5) * 600;
  ballon.style.transform = `translate(${tirX}px, -550px)`;
  myaudio.play();

  setTimeout(() => {
    ballon.style.transform = `translate(0, 0)`;
  }, 2000);
});

const bouton2 = document.getElementById("bouton");
bouton2.innerHTML = "Color";
