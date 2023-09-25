let home = document.getElementById('home');
let game = document.getElementById('game');
let pres = document.getElementById('presentation');
let welcome = document.getElementById('welcome');
let welcome2 = document.getElementById('welcome2');
let homeContent = document.getElementById ('homeContent');
let gameContent = document.getElementById ('gameContent');
home.addEventListener("click", mode);
game.addEventListener("click", mode);

function mode(){
    if (home.checked == true) {
        pres.style.backgroundImage = 'url("Media/Bathome1.png")';
        welcome.style.display = "flex";
        welcome2.style.display = "none";
        homeContent.style.display = "block";
        gameContent.style.display = "none";
    }
    else{
        pres.style.backgroundImage = 'url("Media/Batgame_1.png")';
        welcome.style.display = "none";
        welcome2.style.display = "block";
        homeContent.style.display = "none";
        gameContent.style.display = "flex";
    }
}