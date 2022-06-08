let fondo = document.querySelector(".background").getBoundingClientRect();
let ave = document.querySelector(".bird");
let ave2 = document.querySelectorAll(".background");
let contenido2 = document.createElement("div");
let avePropiedades = ave.getBoundingClientRect();
let valorPuntaje = document.querySelector(".score_val");
let logoGameHover = document.querySelector(".logoGameHover");
let velocidadMovimiento = 6;
let gravedad = 0.5;
let mensaje = document.querySelector(".mensaje");
let tituloPuntaje = document.querySelector(".score_title");
let logoReturn = document.querySelector(".logoReturn");
let mensaje2 = document.querySelector(".mensaje2");
let estadoJuego = "Start";

let audio = new Audio("audio.mp3");
audio.play();
audio.loop = false;
audio.playbackRate = 2;

let inpacto = new Audio("inpacto.mp3");
inpacto.loop = false;
inpacto.playbackRate = 2;
inpacto.play();

let gameover = new Audio("gameOver.mp3");
gameover.loop = false;
gameover.playbackRate = 2;
gameover.play();

let finJuego = new Audio("007741506_prev.mp3");
finJuego.loop = false;
finJuego.playbackRate = 2;
finJuego.play();

document.addEventListener("keydown", (e) => {
    // Inicia el juego si se presiona la tecla enter
    if (e.key == "Enter" && estadoJuego != "Play") {
        document.querySelectorAll(".muroSprite").forEach((e) => {
            e.remove();
        });

        estadoJuego = "Play";
        mensaje.innerHTML = "";

        tituloPuntaje.innerHTML = "Score : ";
        valorPuntaje.innerHTML = "0";
        play();
    }
});