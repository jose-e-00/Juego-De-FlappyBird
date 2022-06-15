let fondo = document.querySelector(".background").getBoundingClientRect();
let fondo2 = document.querySelector(".parent-container");
let ave = document.querySelector(".bird");
let ave2 = document.querySelectorAll(".background");
let contenido2 = document.createElement("div");
let avePropiedades = ave.getBoundingClientRect();
let valorPuntaje = document.querySelector(".score_val");
let logoGameHover = document.querySelector(".logoGameHover");
let velocidadMovimiento = 8;
let gravedad = 0.5;
let mensaje = document.querySelector(".mensaje");
let tituloPuntaje = document.querySelector(".score_title");
let logoReturn = document.querySelector(".logoReturn");
let mensaje2 = document.querySelector(".mensaje2");
let botonPlay = document.querySelector(".botonPlay");
let estadoJuego = "Start";

let audio = new Audio("salto.mp3");

audio.loop = false;
audio.playbackRate = 1;

let inpacto = new Audio("inpacto2.mp3");
inpacto.loop = false;
inpacto.playbackRate = 4;


let gameover = new Audio("caida.mp3");
gameover.loop = false;
gameover.playbackRate = 1;


let finJuego = new Audio("007741506_prev.mp3");
finJuego.loop = false;
finJuego.playbackRate = 0.8;

let musicFondo = new Audio("donkey-kong-country.mp3");
musicFondo.loop = true;
musicFondo.playbackRate = 1;

botonPlay.addEventListener("click", playClick);

function playClick() {
    if (estadoJuego != "Play") {
        document.querySelectorAll(".muroSprite").forEach((e) => {
            e.remove();
        });
        musicFondo.play();
        estadoJuego = "Play";
        mensaje.innerHTML = "";

        tituloPuntaje.innerHTML = "Score : ";
        valorPuntaje.innerHTML = "0";
        play();
    }
}

function play() {
    function movimiento() {
        if (estadoJuego != "Play") return;
        switch (valorPuntaje.innerHTML) {
            case "20":
                velocidadMovimiento = 12;
                break;

            case "50":
                mensaje.innerHTML =
                    '<h3>¡Haz Ganado Oprime <B style="color: Orange;">Refrescar</B>!<h3/><br/><img src="Clockwise-arrow256_25064.png" alt="" class="logoReturn">';
                document.body.firstElementChild.style.backgroundImage = "url(juego-de-victoria-ui-elemento-diseño-vectorial-caricatura-nivel-icono-signo-superior-marca-cinta-roja-estrellas-oro-resultado-del-226401100.jpg)"

                finJuego.play();
                estadoJuego = "End";
                musicFondo.pause();
                document.removeEventListener()
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
            if (muroConPropiedades.right <= 365) {
                element.remove();
            } else {
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
                        '<h3>Haz Perdido Oprime <B style="color: Orange;">Refrescar</B></h3><br/><img src="Clockwise-arrow256_25064.png" alt="" class="logoReturn">';
                    musicFondo.pause();

                    ave2[0].firstElementChild.parentElement.replaceChild(contenido2, ave2[0].firstElementChild);

                    contenido2.innerHTML = '<img class="bird2" src="Flappy-Bird-PNG-Picture.png" alt="bird-img" />'
                    inpacto.play();
                    return;
                } else {
                    if (
                        muroConPropiedades.right < avePropiedades.left &&
                        muroConPropiedades.right + velocidadMovimiento >=
                        avePropiedades.left &&
                        element.incrementarRecord == "1"
                    ) {
                        valorPuntaje.innerHTML = +valorPuntaje.innerHTML + 1;
                    }
                    element.style.left =
                        muroConPropiedades.left - velocidadMovimiento + "px";
                }
            }
        });

        requestAnimationFrame(movimiento);
    }
    requestAnimationFrame(movimiento);
    let aveDistancia = 0;

    function gravedadAplicada() {
        if (estadoJuego != "Play") return;
        aveDistancia = aveDistancia + gravedad;
        document.addEventListener("keydown", (e) => {
            if (e.key == "ArrowUp" || e.key == " ") {
                aveDistancia = -7.6;
            }
        });
        if (avePropiedades.top <= 0 || avePropiedades.bottom >= fondo.bottom) {
            estadoJuego = "End";
            mensaje2.innerHTML =
                '<img src="Game-Over-Logo-PNG-Image.png" alt="" class="logoGameHover"><br/><br/><h3>Oprime <b style="color: red;">Refrescar</b> Para Reiniciar<h3/>';
            musicFondo.pause();

            ave2[0].firstElementChild.parentElement.replaceChild(contenido2, ave2[0].firstElementChild);

            contenido2.innerHTML = '<img class="bird2" src="Flappy-Bird-PNG-Picture.png" alt="bird-img" />'
            gameover.play();
            return;
        }
        ave.style.top = avePropiedades.top + aveDistancia + "px";
        avePropiedades = ave.getBoundingClientRect();
        requestAnimationFrame(gravedadAplicada);
    }
    requestAnimationFrame(gravedadAplicada);
    let muroSeparacion = 0;

    function creaMuro() {
        if (estadoJuego != "Play") return;

        if (muroSeparacion >= 35) {
            muroSeparacion = 6;

            let muroPosicion = Math.random() * 235;
            let muroInvertido = document.createElement("div");
            muroInvertido.className = "muroSprite";
            muroInvertido.style.top = "0px";
            muroInvertido.style.left = "1000px";
            muroInvertido.style.height = muroPosicion + "px";
            muroInvertido.style.transform = "rotate(180deg)";


            document.body.firstElementChild.appendChild(muroInvertido);
            let muroHeight = Math.random() * 265;
            let muroSprite = document.createElement("div");
            muroSprite.className = "muroSprite";
            muroSprite.style.bottom = "70px";
            muroSprite.style.height = muroHeight + "px";
            muroSprite.style.left = "1165px";
            muroSprite.incrementarRecord = "1";

            document.body.firstElementChild.appendChild(muroSprite);
        }
        muroSeparacion += 1;
        requestAnimationFrame(creaMuro);
    }
    requestAnimationFrame(creaMuro);
}