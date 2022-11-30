import {readRanking, readLastUserPoints, readRankingLength, UpdateRanking, maxUsersInRanking} from 'https://agiongrande.github.io/mariobrosjs/firebase.js'
import {cargarNivel, enemigosDinamicos} from 'https://agiongrande.github.io/mariobrosjs/niveles.js'
import {Disparo} from 'https://agiongrande.github.io/mariobrosjs/disparo.js'
import {Enemigo} from 'https://agiongrande.github.io/mariobrosjs/enemigo.js'
import {Personaje, resetCoins, dinamicosX, offsetX, cantMonedas} from 'https://agiongrande.github.io/mariobrosjs/personaje.js'
import {indexacion, imgMusicOff, imgMusicOn, imgGanar, imgPresentacion, imgGameOver, imgFondo, imgVidas, imgMonedas, palanca, palancaAba, palancaAbaDer, palancaAbaIzq, palancaArr, palancaArrDer, palancaArrIzq, palancaDer, palancaIzq, botonA, botonAPush} from 'https://agiongrande.github.io/mariobrosjs/graficos.js'
import {preLoadGame} from 'https://agiongrande.github.io/mariobrosjs/precarga.js'

export let gravedad = 5;
export let enemigos = [];
export let disparos = [];
export let premios = [];
export let plataformas = [];
export let personaje;
export let tileX = 30
export let tileY=30
export let canvas = document.querySelector('canvas')
let rankingButton = document.querySelector('rankingButton')
let timerCriaturas=0;
let timerMuerto = 0;
let timerGanar = 0;
let vidas
let cantMonedasInicio=0
let numeroNivel
let c = canvas.getContext("2d")
const ultimoNivel = 4
const nivelInicial = 1
canvas.width = 1280;
canvas.height = 570;

let offsetCanvasX= canvas.getBoundingClientRect().x
let offsetCanvasY= canvas.getBoundingClientRect().y

let botonAncho =75
let botonAlto =75
let botonX =canvas.width-botonAncho - 100
let botonY =canvas.height-botonAlto - 50

let controlX = 50
let controlAncho = 100
let controlAlto = 100
let controlY=canvas.height-controlAlto - 50

let keyboard = {};
let mouse = 0;
let mouseX =0;
let mouseY =0;
let mouseSaltar = false;
let mouseDisparar = false;
let mouseID = 0
let mouseDispararID= 0

let musicOn = false
let actualSong = ""
let actualSongLoop = false
const timeWinLevelMusicOn = 120
const timeWinLevelMusicOff = 20
const timeDeadLevelMusicOn = 70
const timeDeadLevelMusicOff = 20

const intervaloMover=45

var music; 
var fx;

function ChangeMusicStatus(){
    musicOn = !musicOn;
    if (musicOn) {
        if (music) {
            music.play();
        } else {
            PlayMusic();
        }
    } else {
        if (music) music.pause();
    }
}

let blockRanking = false;

let etapaJuego = 0 // 0 cargando - 1 inicio - 2 jugando - 3 gameover
let rank = []

async function ActualizateRanking(){
    rank = await readRanking();
    if (rank != ""){
        etapaJuego = 1;
    }
}

async function cargarJuego(){
    rank = await preLoadGame();
    
    if (rank != ""){
        etapaJuego = 1;
    }
}
cargarJuego();


function empezarJuego(){
    vidas = 3;
    resetCoins(0);
    numeroNivel = nivelInicial;
    empezarNivel()
    }

function resetNivel(){
    disparos = [];
    premios = [];
    enemigos = [];
    plataformas = [];
    timerCriaturas=0;
}


function empezarNivel(reload){
    resetNivel();
    personaje = new Personaje(60,0,17);
    cantMonedasInicio = cantMonedas
    console.log("offsetX" + offsetX)

    if (numeroNivel > ultimoNivel){
        blockRanking=true;
        etapaJuego = 4;
        PlayFx("celebrate.mp3");
        checkRanking();
    }else{
        cargarNivel(numeroNivel)
        PlayMusic("theme.mp3",true);
        etapaJuego = 2;
    }
}

function render(){
    if (etapaJuego == 0){
        c.fillStyle = "white";
        c.fillRect(0, 0, canvas.width, canvas.height);
        c.font = "bold 24px verdana, sans-serif ";
        let welcomeMessage2 ="Cargando";
        c.textAlign = "center";
        c.textBaseline = "bottom";
        c.fillStyle = "#ff0000";
        c.fillText(welcomeMessage2, canvas.width/2, canvas.height/2);
        c.fillStyle = "#ffffff";
    } else if (etapaJuego == 1){
        c.drawImage(imgPresentacion,0,0)
        musicOn ? c.drawImage(imgMusicOn,1020,10) : c.drawImage(imgMusicOff,1020,10)
        c.font = "bold 24px verdana, sans-serif ";
        
        c.textAlign = "center";
        c.textBaseline = "bottom";
        c.fillStyle = "#ff0000";

        for (let i = 0; i < rank[0].length; i++) {
            c.fillText(rank[0][i], 1010, 200 + i*30)
            c.fillText(rank[1][i], 1120, 200 + i*30)
        } 

        
        c.fillStyle = "#ffffff";
    } else if (etapaJuego == 3){
        c.drawImage(imgGameOver,0,0) 
    } else if (etapaJuego == 4){
        c.drawImage(imgGanar,0,0)
    } else if (etapaJuego == 2){

        c.drawImage(imgFondo,300,0,300,0,300,0,300,0)
        var pat = c.createPattern(imgFondo, "repeat");
        c.rect(0, 0, 1500, 768);
        c.fillStyle = pat;
        c.save();
        c.translate(offsetX*-1, 0);
        c.fillRect(-650, 0, 15000, 700);
        c.restore();

        for (let index = 0; index < vidas; index++) {
            c.drawImage(imgVidas.imagen,imgVidas.x,imgVidas.y,imgVidas.ancho,imgVidas.alto,imgVidas.margenX*index+10,imgVidas.margenY,imgVidas.ancho,imgVidas.alto)
        }

        c.drawImage(imgMonedas.imagen,imgMonedas.x,imgMonedas.y,imgMonedas.ancho,imgMonedas.alto,imgMonedas.margenX,imgMonedas.margenY,imgMonedas.ancho,imgMonedas.alto)

        c.font = "bold 24px verdana, sans-serif ";
        var welcomeMessage =cantMonedas;
        c.textAlign = "right";
        c.textBaseline = "bottom";
        c.fillStyle = "#ff0000";
        c.fillText(welcomeMessage, canvas.width-26-20, 36);

        c.font = "bold 24px verdana, sans-serif ";
        var welcomeMessage ="Mundo " + numeroNivel;
        c.textAlign = "start";
        c.textBaseline = "bottom";
        c.fillStyle = "#ff0000";
        c.fillText(welcomeMessage, 10, 80);

        for (const plat of plataformas){
            c.drawImage(plat.img,plat.imgX[plat.frameActual],plat.imgY[plat.frameActual],plat.imgAncho[plat.frameActual],plat.imgAlto[plat.frameActual],plat.X,plat.Y,plat.imgAncho[plat.frameActual],plat.imgAlto[plat.frameActual])
            plat.frameActual = plat.frameActual+1;
            if(plat.frameActual>=plat.frames) plat.frameActual=0
        }

        for (const prem of premios){
            c.drawImage(prem.img,prem.imgX[prem.frameActual],prem.imgY[prem.frameActual],prem.imgAncho[prem.frameActual],prem.imgAlto[prem.frameActual],prem.X,prem.Y,prem.imgAncho[prem.frameActual],prem.imgAlto[prem.frameActual])
            prem.frameActual = prem.frameActual+1;
            if(prem.frameActual>=prem.frames) prem.frameActual=0
        }

        for (const disp of disparos){
            c.drawImage(disp.img,disp.imgX[disp.frameActual],disp.imgY[disp.frameActual],disp.imgAncho[disp.frameActual],disp.imgAlto[disp.frameActual],disp.X,disp.Y,disp.imgAncho[disp.frameActual],disp.imgAlto[disp.frameActual])
            disp.frameActual = disp.frameActual+1;
            if(disp.frameActual>=disp.frames) disp.frameActual=0
        }

        for (const enemigo of enemigos){
            if (enemigo.direccion ==-1){
                c.drawImage(enemigo.img,enemigo.imgX[enemigo.frameActual],enemigo.imgY[enemigo.frameActual],enemigo.imgAncho[enemigo.frameActual],enemigo.imgAlto[enemigo.frameActual],enemigo.X,enemigo.Y,enemigo.imgAncho[enemigo.frameActual],enemigo.imgAlto[enemigo.frameActual])
            } else {
                c.save()
                c.translate(1280,0)
                c.scale(-1,1)
                c.drawImage(enemigo.img,enemigo.imgX[enemigo.frameActual],enemigo.imgY[enemigo.frameActual],enemigo.imgAncho[enemigo.frameActual],enemigo.imgAlto[enemigo.frameActual],canvas.width-enemigo.X-enemigo.imgAncho[enemigo.frameActual],enemigo.Y,enemigo.imgAncho[enemigo.frameActual],enemigo.imgAlto[enemigo.frameActual])
                c.restore();
            }
            if (enemigo.velocidadX != 0){
                enemigo.frameActual = enemigo.frameActual+1;
                if(enemigo.frameActual>=enemigo.frames) enemigo.frameActual=0
            }

        }

        if (personaje.moviendo==true){
            if (personaje.direccion ==1){
                c.drawImage(personaje.img,personaje.imgX[personaje.frameActual],personaje.imgY[personaje.frameActual],personaje.imgAncho[personaje.frameActual],personaje.imgAlto[personaje.frameActual],personaje.X,personaje.Y,personaje.imgAncho[personaje.frameActual],personaje.imgAlto[personaje.frameActual])
            }else {
                c.save()
                c.translate(1280,0)
                c.scale(-1,1)
                c.drawImage(personaje.img,personaje.imgX[personaje.frameActual],personaje.imgY[personaje.frameActual],personaje.imgAncho[personaje.frameActual],personaje.imgAlto[personaje.frameActual],canvas.width-personaje.X-personaje.imgAncho[personaje.frameActual],personaje.Y,personaje.imgAncho[personaje.frameActual],personaje.imgAlto[personaje.frameActual])
                c.restore();
            }
        } else {
            if (personaje.direccion ==1){
                c.drawImage(personaje.img,personaje.imgX[0],personaje.imgY[0],personaje.imgAncho[0],personaje.imgAlto[0],personaje.X,personaje.Y,personaje.imgAncho[0],personaje.imgAlto[0])
            }else {
                c.save()
                c.translate(1280,0)
                c.scale(-1,1)
                c.drawImage(personaje.img,personaje.imgX[0],personaje.imgY[0],personaje.imgAncho[0],personaje.imgAlto[0],canvas.width-personaje.X-personaje.imgAncho[0],personaje.Y,personaje.imgAncho[0],personaje.imgAlto[0])
                c.restore()
            }
        }
        if (personaje.timerInmortal>0){
            c.globalAlpha = 0.7;
            c.fillStyle = 'yellow';
        } else{
            c.globalAlpha = 1;
            c.fillStyle = '';
        }
        personaje.frameActual ++;
        if(personaje.frameActual>=personaje.frames) personaje.frameActual=0

        c.save()
        c.globalAlpha = 0.5;
        if (personaje.agachado == true || keyboard[40] == true){
            if (personaje.moviendo==0){
                c.drawImage(palancaAba,controlX,controlY)
            } else {
                if(personaje.direccion<1){
                    c.drawImage(palancaAbaIzq,controlX,controlY)
                } else {
                    c.drawImage(palancaAbaDer,controlX,controlY)
                }
            }
        } else if (mouseSaltar == true || keyboard[38] == true){
            if (personaje.moviendo==0){
                c.drawImage(palancaArr,controlX,controlY)
            } else {
                if(personaje.direccion<1){
                    c.drawImage(palancaArrIzq,controlX,controlY)
                } else {
                    c.drawImage(palancaArrDer,controlX,controlY)
                }    
            }
        } else {
            if (personaje.moviendo==0){
                c.drawImage(palanca,controlX,controlY)
            }else{
                if(personaje.direccion<1){
                    c.drawImage(palancaIzq,controlX,controlY)
                } else {
                    c.drawImage(palancaDer,controlX,controlY)
                }
            }    
        }



        if (keyboard[65] == true || mouseDisparar == true){
            c.drawImage(botonAPush,botonX,botonY)
        } else{
            c.drawImage(botonA,botonX,botonY)
        }
        c.restore()
    }
}



export function perder(){
    if (personaje.poder >0){
        personaje.poder = 0;
        personaje.agachado=0;
        indexacion(personaje,17)
    }else{
        indexacion(personaje,64)
        vidas--;
        musicOn ? timerMuerto=timeDeadLevelMusicOn : timerMuerto = timeDeadLevelMusicOff;
        PlayMusic("loseLive.mp3")
    }
}

function moverEnemigos(){
    for (const enemigo of enemigos){
        if (enemigo.direccion == 1){
            enemigo.avanzar();
        } else{
            enemigo.retroceder();
        }
    }
}

function moverPremios(){
    for (const prem of premios){
        if (prem.movimiento > 0){
            if (prem.direccion > 0){
                prem.avanzar();
            } else{
                prem.retroceder();
        
            }
            prem.gravedad();
    
        }

    }
}

function moverDisparos(){
    for (const disp of disparos){
            if (disp.direccion > 0){
                disp.avanzar();
            } else{
                disp.retroceder();
        
            }
    
        

    }
}

function moverPlataformas(){
    for (const plat of plataformas){
        if (plat.movimiento ==1){
            plat.moverX();
        }else if(plat.movimiento ==2){
            plat.moverY();
        }
    }
}

function personajeEnPlataforma(plataforma,personaje){
    if (plataforma.X<personaje.X && plataforma.Y > personaje.Y) {
        if (plataforma.Y == personaje.Y+personaje.alto){
            return true
        }
    }
}

function moverPersonaje(){
    personaje.moviendo=0
    if (personaje.agachado ==1){
        personaje.agachado =0
        if (personaje.poder==1){
            indexacion(personaje,2)
        } else if (personaje.poder ==2){
            indexacion(personaje,19)
        }
    }
    if (keyboard[40] == true){
        personaje.agachar();
    }
    if (keyboard[37] == true && personaje.agachado ==false  || (mouse < 0)){
        personaje.retroceder();
        personaje.moviendo=1;
    }
    if (keyboard[39] == true && personaje.agachado ==false  || (mouse > 0)){
        personaje.moviendo=1;
        personaje.avanzar();
    }
    if ((keyboard[16] == true || mouseDisparar == true) && personaje.poder ==2 && personaje.timerDisparo == 0){
        personaje.timerDisparo = 50;
        PlayFx("fireball.mp3");
        disparos.push(new Disparo(personaje.X,personaje.Y + personaje.alto/2,22,personaje,personaje.direccion)); //fuego
    }
    if ((keyboard[38] == true || mouseSaltar==true) && (personaje.saltando == 0 || personaje.timerRebote >0)){
        //personaje.frameActual=0;
        if (personaje.poder == 0){
        indexacion(personaje,18);
    } else if (personaje.poder ==1) {
        indexacion(personaje,3);
    } else if (personaje.poder ==2) {
        indexacion(personaje,20);

    }
        personaje.timerRebote = 0;
        personaje.saltando =1;
        personaje.saltar();
     }

}

setInterval(function TimerGame(){
    render();
    if (etapaJuego == 1){
        if (keyboard[13] == true){
            empezarJuego();
        }
    }else if (etapaJuego == 3 || etapaJuego == 4){
        if (keyboard[13] == true && blockRanking==false){
            etapaJuego=0;
            ActualizateRanking();
        }
    }else if (etapaJuego == 2){
        if (timerMuerto ==0 && timerGanar == 0){

            moverPersonaje();
            moverEnemigos();
            moverPremios();
            moverDisparos();
            moverPlataformas();
            chocarPremios();
            if (personaje.timerRebote >0) personaje.timerRebote--
            if (personaje.timerInmortal>0) {
                personaje.timerInmortal--
                if (personaje.timerInmortal == 0) {
                    PlayMusic("theme.mp3",true);
                }
            }
            if (personaje.timerDisparo>0) personaje.timerDisparo--

            timerCriaturas++
            for (const a of enemigosDinamicos){
                if ((timerCriaturas % a.tiempo)==0){
                    enemigos.push(new Enemigo(30*a.X-dinamicosX,30*a.Y,a.grafico,a.direccion,a.velocidad,a.timerDisparo,a.antiGravedad));
                }
            }

            personaje.gravedad();
            for (const enemigo of enemigos) {
                enemigo.gravedad();
                if (enemigo.timerDisparo>0) {
                    enemigo.timerDisparo--
                    if (enemigo.timerDisparo==0){
                        enemigo.disparar()
                        enemigo.timerDisparo =50
                    }
                }
            }
        } else if (timerMuerto>0) {
            timerMuerto--;
            if (timerMuerto == 0){
                if (vidas<=0){
                    etapaJuego=3;
                    blockRanking=true;
                    PlayMusic("gameOver.mp3");
                    checkRanking();
                } else{
                    resetCoins(cantMonedasInicio)
                    empezarNivel()
                }
            }
    
        } else {
            timerGanar--;
            if (timerGanar == 0){
                {
                    numeroNivel++
                    empezarNivel()
                }
            }
        }
    }
},intervaloMover);

async function checkRanking(){
    let lastUserRanking = await readLastUserPoints();
    let usersRanking = await readRankingLength();

    if (cantMonedas == 0){
        blockRanking=false;
        return;
    }

    if (usersRanking < maxUsersInRanking || cantMonedas > lastUserRanking){;
        document.getElementById("wrap").style.display = "flex";
    } else {
        blockRanking=false;
    }

}

function aleatorio(min, max) {
    return Math.random() * ((max+1) - min) + min;
  }

export function pasarNivel(){
    musicOn ? timerGanar=timeWinLevelMusicOn : timerGanar = timeWinLevelMusicOff;
    PlayMusic("stage_clear.mp3");
}

export function chocarEnemigo(a){
    for (const b of enemigos){
        if (b.Y + b.alto >= a.Y && b.Y < a.alto + a.Y) {
            if (b.X < a.X + a.ancho -a.offsetX  && b.X + b.ancho > a.X +a.offsetX  ) {
                if (((a.velocidadY <= 0 && a.timerRebote ==0) && a.Y + a.alto > b.Y + (b.alto /2)) && a.timerInmortal == 0){
                    perder();
                    if (timerMuerto == 0)  b.eliminar();
                } else {
                    b.eliminar()
                    if (a instanceof Disparo == true){
                        a.eliminar();
                    } else {
                        PlayFx("stomp.mp3");
                        a.velocidadY = -15;
                        a.timerRebote = 2;
                    }
                }
            }
        }
    }
}

export function chocarPersonaje(b){
    let a = personaje
        if ((b.Y + b.alto >= a.Y && b.Y + b.alto <= a.alto + a.Y)  || (b.Y  >= a.Y && b.Y <= a.alto + a.Y)) {
            if (b.X < a.X + a.ancho -a.offsetX  && b.X + b.ancho > a.X +a.offsetX  ) {
                if (a.timerInmortal == 0){
                    perder();
                    if (timerMuerto == 0)  b.eliminar();
                } else {
                    b.eliminar()
                }
            }
        
    }
}

export function colisionFutura(a,velocidad){
    let colision = false;
    if (velocidad <0){
        for (const b of plataformas){
            if (a == personaje && b.id == 59){
            }
            if (b.Y + b.alto > a.Y && b.Y < a.alto + a.Y) {
                if (b.X < a.X -a.offsetX && b.X + b.ancho  > a.X -a.offsetX  ) {
                    colision = true;
                }
            }
        }
    }
    if (velocidad >0){
        for (const b of plataformas){
            if (a == personaje && b.id == 59){
            }
            if (b.Y + b.alto > a.Y && b.Y < a.alto + a.Y) {
                if (b.X  < a.X + a.ancho +(a.offsetX) && b.X + b.ancho -(a.offsetX) > a.X + a.ancho  ) {
                    colision = true;
                }
            }
        }
    }
    return colision;
}

export function colisionPiso(a){
    let colision = false;
    for (const b of plataformas){
        if (b.X + b.ancho -a.offsetX > a.X && b.X +a.offsetX < a.ancho + a.X) {
            if (b.Y < a.alto + a.Y && b.Y + b.alto  >= a.alto + a.Y && a.velocidadY >= 0) {
                colision = true;
                a.Y = b.Y - a.alto
            }
        }
    }
    return colision;
}

export function colisionTecho(a){
    for (const b of plataformas){
        if (b.X + b.ancho -personaje.offsetX>= a.X && b.X +personaje.offsetX < a.ancho + a.X) {
            if (b.Y + b.alto >= a.Y && b.Y -gravedad <= a.Y) {
                a.Y = b.Y + b.alto
                a.velocidadY = 0;
                if (b.romper == true){
                    b.eliminar();
                }
                return true;
            }
        }
    }
}

function chocarPremios(){
    let a = personaje;
    for (const b of premios){
        if ((a.Y + a.ancho  < b.Y + b.alto && a.Y + a.alto  > b.Y)  || (a.Y < b.Y + b.alto && a.Y  > b.Y )  || (a.Y + (a.alto/2) < b.Y + b.alto && a.Y + (a.alto/2)  > b.Y )) {
            if ((a.X + a.ancho  < b.X + b.ancho && a.X + a.ancho  > b.X)  || (a.X < b.X + b.ancho && a.X  > b.X ) || (a.X+(a.ancho/2) < b.X + b.ancho && a.X+(a.ancho/2)  > b.X )) {
                b.eliminar();
                b.aplicar();
            }
        }
    }
}

export function PlayFx(effect){
    if (!musicOn) return
    fx = new Audio("music/"+effect);
    fx.play();
}

export function PlayMusic(song,loop){
    if (!song) {
        song = actualSong;
        loop = actualSongLoop
    } else {
        actualSong = song
        actualSongLoop = loop
    }
    if (!musicOn) return
    if (music) music.pause();
    music = new Audio("music/"+song);
    music.loop = loop;
    music.play();
}




addEvent(document,"keydown", function(e){
    if (e.keyCode == 77){
        ChangeMusicStatus()
        return;
    }
    keyboard[e.keyCode] = true;
})
addEvent(document,"keyup", function(e){
    keyboard[e.keyCode] = false;
})

addEvent(canvas,"pointerdown", function(e){
    if (etapaJuego == 1){
            empezarJuego();
        
    }
    if (etapaJuego == 2) {
        console.log(e.x)
        console.log(e.y)
    }
    if ((etapaJuego == 3 || etapaJuego == 4) && blockRanking==false){
        etapaJuego=0;
        ActualizateRanking();
    }
    //alert(e.x + " - " + controlAncho + " " + controlX + " " + controlY + " " + controlAlto)
    if (e.x < controlAncho + controlX + offsetCanvasX && e.x > controlX + offsetCanvasX && e.y  > controlY + offsetCanvasY && e.y < controlAlto+controlY+ offsetCanvasY){
        mouseX=e.x
        mouseY=e.y
        mouseID=e.pointerId
    }
//alert(offsetCanvasX + " " + offsetCanvasY)
    if (e.x < controlAncho + botonX + offsetCanvasX && e.x > botonX + offsetCanvasX && e.y > controlY + offsetCanvasY && e.y < controlAlto+controlY+ offsetCanvasY){
        mouseDisparar = true
        mouseDispararID=e.pointerId 
    }
})

addEvent(canvas,"pointerup", function(e){
    cancelarMouse(e);
})

addEvent(canvas,"pointercancel", function(e){
    cancelarMouse(e);
   })

   function cancelarMouse(e){
    if (mouseID == e.pointerId){
        mouse = 0;
        mouseX=0;
        mouseY=0;
        mouseID=0;
        mouseSaltar=0
        
    } else if (mouseDispararID==e.pointerId){
        mouseDisparar=false
        mouseDispararID=0
    }
   }

addEvent(canvas,"pointermove", function(e){
    if (mouseX != 0){
        if (e.x>mouseX+30){
            mouse=1;
        }else if (e.x<mouseX-30){
            mouse=-1
        }else{
            mouse=0
        }
    }
    if (mouseY != 0){
        if (e.y>mouseY+30){
            //agachar();
        }else if (e.y<mouseY-30){
            mouseSaltar=true;
        }else{
            mouseSaltar=false;
        }
    }
    
})

addEvent(rankingButton,"pointerup", function(e){
    let textRanking = document.getElementById("textRanking").value;
    if (textRanking == "") return
    UpdateRanking(textRanking,cantMonedas)
    document.getElementById("textRanking").value = ""
    document.getElementById("wrap").style.display = "none";
    blockRanking = false;
})


function addEvent(elemento, evento, funcion){
    elemento.addEventListener(evento, funcion, false)
}

