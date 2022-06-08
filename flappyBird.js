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

function play() {
    function movimiento() {
        // Detectar si el juego ha terminado
        if (estadoJuego != "Play") return;
        // Vamos incrementando la velocidad del juego
        switch (valorPuntaje.innerHTML) {
            case "10":
                velocidadMovimiento = 8;
                break;
            case "25":
                velocidadMovimiento = 12;
                muroSeparacion = Math.random() * 7;
                break;
            case "35":
                velocidadMovimiento = 15;
                muroSeparacion = Math.random() * 9;
                break;
            case "50":
                mensaje.innerHTML =
                    '<h3>¡Felicidades Terminaste El Juego!</h3><br/><img src="Clockwise-arrow256_25064.png" alt="" class="logoReturn">';
                finJuego.play();
                estadoJuego = "End";
                return;
        }
        document.addEventListener("keydown", (e) => {
            if (e.key == "ArrowUp" || e.key == " ") {
                audio.play();
            }
        })
        let muroSprite = document.querySelectorAll(".muroSprite");
        muroSprite.forEach((element) => {
                    let muroConPropiedades = element.getBoundingClientRect();
                    let muroSprite = document.querySelectorAll(".muroSprite");
                    muroSprite.forEach((element) => {
                                let muroConPropiedades = element.getBoundingClientRect();
                                else {
                                    if (
                                        avePropiedades.left <
                                        muroConPropiedades.left + muroConPropiedades.width &&
                                        avePropiedades.left + avePropiedades.width >
                                        muroConPropiedades.left &&
                                        avePropiedades.top <
                                        muroConPropiedades.top + muroConPropiedades.height &&
                                        avePropiedades.top + avePropiedades.height > muroConPropiedades.top
                                    ) {
                                        estadoJuego = "End";
                                        mensaje.innerHTML =
                                            '<h3>Haz Perdido Pulsa Enter</h3><br/><img src="Clockwise-arrow256_25064.png" alt="" class="logoReturn">';

                                        ave2[0].firstElementChild.parentElement.replaceChild(contenido2, ave2[0].firstElementChild);

                                        contenido2.innerHTML = '<img class="bird2" src="Flappy-Bird-PNG-Picture.png" alt="bird-img" />'
                                        inpacto.play();
                                        return;
                                    }