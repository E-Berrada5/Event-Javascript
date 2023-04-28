/* EXERCICE 1 
Ajoutez un écouteur d'événement sur le bouton pour incrémenter
 le compteur à chaque click
 */
 //on sélectionne l'objet de l'id  #click-btn 
const btnincrement = document.querySelector("#click-btn")
//on ajoute une écoute pour le clique 
btnincrement.addEventListener("click", function () {
    //   console.log("Le bouton a été cliqué");
    // on sélectionne l'id click counter  qui est une balise <p> </p> contenant un 0 on 
    //l'incrémente chaque fois que l'évènements a lieu 
    const counter = document.querySelector("#click-counter");
   // qui est une balise <p> </p> contenant un 0 on 
   // l'incrémente chaque fois que l'évènements a lieu 
    counter.textContent = parseInt(counter.textContent) + 1;
  });


  /*EXERCICE 2 
  En ajoutant un écouteur d'événement sur un input, on peut réagir au changement 
  de sa valeur Ecrivez le code Javascript qui permettra en temps réel de compter le nombre 
  de caractères de l'input */

  /*on séléctionne l'objet input et  le id qui va afficher le nombre de paramètres
  après notre éxécution du code javascript
  */  
  const leinput = document.querySelector("#text-input")
  const countcarac = document.querySelector("#char-count")
  // on ajoute  une écoute sur le input
  leinput.addEventListener('input', function (e){
    const target = e.target;
    // get the 'maxlength' attribute
    const maxLength = target.getAttribute('maxlength');
    //count the current number of characters
    const currentLength = target.value.length;
    countcarac.innerHTML = `${currentLength}/${maxLength}`;
  });

  /* EXERCICES 3
    Ecrivez le code Javascript qui permettra en temps réel de récupérer les 
  valeurs des inputs pour modifier la couleur de fond de la div
  */
const sectionColor = document.querySelector('.color-display')
const hue = document.querySelector("#hue")
const saturation = document.querySelector("#saturation")
const lightness = document.querySelector("#lightness")

let hueValue = 0
let satValue = 0
let lightValue = 0

hue.addEventListener('input', (event) => {
    hueValue = event.target.value
   updatestyle(sectionColor)
 })
 saturation.addEventListener('input', (event) => {
    satValue = event.target.value
    updatestyle(sectionColor)
})
lightness.addEventListener('input', (event) => {
    lightValue = event.target.value
    updatestyle(sectionColor)
})

function updatestyle (elem){
    elem.style.background = `hsl(${hueValue} ${satValue}% ${lightValue}%)`

}

  /* EXERCICES 4
   Réagir au changement de taille de la fenêtre du navigateur
En ajoutant un écouteur d'événement sur la fenêtre du navigateur on peut récupérer sa hauteur
 et sa largeur Dans un premier temps, affichez grâce à Javascript la largeur et la hauteur du 
 viewport au chargement de la page Ensuite, écrivez le code qui permettra en temps réel 
 d'afficher la taille de la fenêtre du navigateur lorsqu'elle est redimensionnée */

// on déclare 2 variable qui vont stocker la largeur et la longueur 
let w = window.innerWidth;
let h = window.innerHeight;
// on sélectionne les 2 objets du document tml sur lesquels nous allons afficher les valeurs 
//du viewport
let width = document.querySelector("#window-width");
let height = document.querySelector("#window-height");
// on ajouter les valeur au document sélectionner 
width.innerHTML =  w;
height.innerHTML =  h;

/* EXERCICES 5
 Ecrivez le code Javascript qui empêchera la soumission du formulaire si :
Le nom n'est pas renseigné ou est d'une longueur inférieure à 2 caractères
L'age n'est pas renseigné ou est inférieur à 18 */
const form =document.querySelector("form")
form.addEventListener("submit", function(e) {
    var age = document.querySelector("#age").value;
    var name = document.querySelector("#name").value;
    
    if (age < 18 || name.length <= 2) {
      e.preventDefault();

      alert("Vous devez renseigner un âge valide et un nom d'au moins 3 caractères");
    }
 else if (age < 18 && name.length <= 2) {
    e.preventDefault();
    alert("Vous devez renseigner un âge valide et un nom d'au moins 3 caractères");
  }
    else {
        e.submit();
      }
  });

  /* EXERCICES 6 
  Vous pouvez écouter les événements liés à l'interaction de l'utilisateur sur son clavier
Créez le script Javascript qui vous permettra de déplacer le point bleu dans la div grâce aux 
flêches de de votre clavier Attention : le point ne doit pas sortir du cadre */
let point = null
function init() {
     point = document.querySelector("#square");
     document.addEventListener('keydown',getKeyAndMove)
     point.style.position = "relative";
        point.style.left = "200px";
        point.style.top = "0px";
}
function getKeyAndMove(e) {
    let key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
    }
}
function moveLeft() {
    point.style.left = parseInt(point.style.left) - 5 + "px";
}
function moveUp() {
    point.style.top = parseInt(point.style.top) - 5 + "px";
}
function moveRight() {
    point.style.left = parseInt(point.style.left) + 5 + "px";
}
function moveDown() {
    point.style.top = parseInt(point.style.top) + 5 + "px";
}
window.onload = init;

/*EXERCICES 7
 Vous pouvez écouter les événements liés au drag et au drop drop
Créez le script Javascript qui vous permettra de drag and drop l'élément "Drag me !" 
dans la zone de drop */

let dragged;

/* events fired on the draggable target */
const dragElement = document.querySelector('.drag-element'); 
const dropZone= document.querySelector('.drop-zone'); 
dragElement.addEventListener('dragstart',
(event) => {event.dataTransfer.setData('text/plain', event.target.id);});
dropZone.addEventListener('dragover', (event) => {event.preventDefault();});

dropZone.addEventListener('drop', (event) => {event.preventDefault();
const data = event.dataTransfer.getData('text');

const draggedElement = document.getElementById(data);
dropZone.appendChild(draggedElement);});