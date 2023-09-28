
//Acces à l'élement canvas de la page web pour dessiner la chauve-souris qui suit le curseur
let canvas = document.getElementById('canvas');
let c = canvas.getContext ('2d');

//Acces à l'image de la chauve-souris dans le dossier media
let img = new Image();
img.src = 'Media/logohome.png'

//La création du dessin de la chauve-souris
let bat = {
    positions: [],
    draw(){
        c.drawImage (img, 0, 0, 50, 20)
    }
}

//faire en sorte que la chauve-souris suit le curseur
window.addEventListener ("mousemove", deplacement);
function deplacement (event){
    canvas.style.top = event.clientY+ window.scrollY + 20 + "px" ;
    canvas.style.left = event.clientX + window.scrollX + 20 + "px";
}

bat.draw ();