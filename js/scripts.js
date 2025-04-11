const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const body = document.body;

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('menu-active'); // Active la classe pour ajuster l'état du fond
});

const video = document.getElementById('presentation-video');
const soundButton = document.getElementById('sound-button');

soundButton.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false; // Active le son
        soundButton.textContent = "🔊";
    } else {
        video.muted = true; // Désactive le son
        soundButton.textContent = "🔇";
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const check = document.getElementById("check"); // Sélectionne l'input checkbox de la navbar
    const body = document.body;
    const html = document.documentElement;

    if (check) { // Vérifie si l'élément existe pour éviter une erreur
        check.addEventListener("change", function() {
            if (this.checked) {
                body.classList.add("no-scroll");
                html.classList.add("no-scroll");
            } else {
                body.classList.remove("no-scroll");
                html.classList.remove("no-scroll");
            }
        });
    }
});
