let gravedad = 5;
let numEnemigo = 0
let numDisparo = 0
let numPremio = 0
let numPlataforma = 0
let enemigos = [];
let disparos = [];
let premios = [];
let plataformas = [];
let personaje
let timerCriaturas=0;
let cantMonedas = 0;
let vidas
let numeroNivel
let tileX = 30
let tileY=30
let jugando = false
let enemigosDinamicos = [];
let dinamicosX= 0
let canvas = document.querySelector('canvas')
let c = canvas.getContext("2d")

canvas.width = 1280;
canvas.height = 570;

let fondo = new Image();
fondo.src = "graficos/65292.png"

let intervaloMover=1000/20

let escenario = [];
escenario = {}


empezarJuego();



function empezarJuego(){
    vidas = 3;
    numeroNivel = 3;
    empezarNivel()
    }

    function resetNivel(){
        enemigosDinamicos = [];
        numDisparo = 0
        dinamicosX=0
        numPremio = 0
        numPlataforma = 0
        numEnemigo = 0
        disparos = [];
        premios = [];
        enemigos = [];
        plataformas = [];
        timerCriaturas=0;
    }

function empezarNivel(){
    resetNivel();
    cargarNivel(numeroNivel)
    jugando = true;
}

let keyboard = {};



function render(){

    c.drawImage(fondo,0,0)

    var pat = c.createPattern(fondo, "repeat");
    c.rect(0, 0, 1500, 1500);
    c.fillStyle = pat;
    c.fill();

    let imgVidas = new Image();
    imgVidas.src = "graficos/4320.png"

    for (let index = 0; index < vidas; index++) {
        c.drawImage(imgVidas,2,58,32,32,32*index+10,10,32,32)
    }

    let imgMonedas = new Image();
    imgMonedas.src = "graficos/105636b.png"    

    c.drawImage(imgMonedas,653,167,26,26,canvas.width-26-10,10,26,26)

    c.font = "bold 24px verdana, sans-serif ";
    var welcomeMessage =cantMonedas;
    c.textAlign = "right";
    c.textBaseline = "bottom";
    c.fillStyle = "#ff0000";
    c.fillText(welcomeMessage, canvas.width-26-20, 36);

    c.font = "bold 24px verdana, sans-serif ";
    var welcomeMessage ="Nivel " + numeroNivel;
    c.textAlign = "start";
    c.textBaseline = "bottom";
    c.fillStyle = "#ff0000";
    c.fillText(welcomeMessage, 10, 80);

    for (const prem of premios){
        c.drawImage(prem.img,prem.imgX[prem.frameActual],prem.imgY[prem.frameActual],prem.imgAncho[prem.frameActual],prem.imgAlto[prem.frameActual],prem.X,prem.Y,prem.imgAncho[prem.frameActual],prem.imgAlto[prem.frameActual])
        prem.frameActual = prem.frameActual+1;
        if(prem.frameActual>=prem.frames){
            prem.frameActual=0
        }
    }
    
    

    for (const plat of plataformas){
        c.drawImage(plat.img,plat.imgX[plat.frameActual],plat.imgY[plat.frameActual],plat.imgAncho[plat.frameActual],plat.imgAlto[plat.frameActual],plat.X,plat.Y,plat.imgAncho[plat.frameActual],plat.imgAlto[plat.frameActual])
        plat.frameActual = plat.frameActual+1;
        if(plat.frameActual>=plat.frames){
            plat.frameActual=0
        }
    }

    for (const disp of disparos){
        c.drawImage(disp.img,disp.imgX[disp.frameActual],disp.imgY[disp.frameActual],disp.imgAncho[disp.frameActual],disp.imgAlto[disp.frameActual],disp.X,disp.Y,disp.imgAncho[disp.frameActual],disp.imgAlto[disp.frameActual])
        disp.frameActual = disp.frameActual+1;
        if(disp.frameActual>=disp.frames){
            disp.frameActual=0
        }
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
        if(enemigo.frameActual>=enemigo.frames){
            enemigo.frameActual=0
        }
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
        //c.fillRect(personaje.X, personaje.Y, 32, 32);
        //c.drawImage(personaje.img,personaje.imgX[0],personaje.imgY[0],personaje.imgAncho[0],personaje.imgAlto[0],personaje.X,personaje.Y,personaje.imgAncho[0],personaje.imgAlto[0])    
    } else{
        c.globalAlpha = 1;
        c.fillStyle = '';
    }
    personaje.frameActual ++;
    if(personaje.frameActual>=personaje.frames){
        personaje.frameActual=0
    }
}

function perder(){
    if (personaje.poder >0){
        personaje.poder = 0;
        personaje.agachado=0;
        indexacion(personaje,17)
    }else{
        vidas--;
        if (vidas<=0){
            empezarJuego()
        } else{
            empezarNivel(numeroNivel)
        }
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
    if (keyboard[37] == true && personaje.agachado ==false ){
        personaje.retroceder();
        personaje.moviendo=1;
    }
    if (keyboard[39] == true && personaje.agachado ==false){
        personaje.moviendo=1;
        personaje.avanzar();
    }
    if (keyboard[16] == true && personaje.poder ==2 && personaje.timerDisparo == 0){
        personaje.timerDisparo = 50;
        disparos.push(new Disparo(personaje.X,personaje.Y + personaje.alto/2,22,personaje,personaje.direccion)); //fuego
    }
    if (keyboard[38] == true && (personaje.saltando == 0 || personaje.timerRebote >0)){
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

Timer();

function Timer(){
    render();
    if (jugando==true){

        moverPersonaje();
        moverEnemigos();
        moverPremios();
        moverDisparos();
        moverPlataformas();
        chocarPremios();
        if (personaje.timerRebote >0) personaje.timerRebote--
        if (personaje.timerInmortal>0) personaje.timerInmortal--
        if (personaje.timerDisparo>0) personaje.timerDisparo--

        timerCriaturas++
        for (a of enemigosDinamicos){
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
        setTimeout("Timer();",intervaloMover);
    }
}

function aleatorio(min, max) {
    return Math.random() * ((max+1) - min) + min;
  }

function chocarEnemigo(a){
    for (const b of enemigos){
        if (b.Y + b.alto >= a.Y && b.Y < a.alto + a.Y) {
            if (b.X < a.X + a.ancho -a.offsetX  && b.X + b.ancho > a.X +a.offsetX  ) {
                if (((a.velocidadY <= 0 && a.timerRebote ==0) && a.Y + a.alto > b.Y + (b.alto /2)) && a.timerInmortal == 0){
                    b.eliminar();
                    perder();
                } else {
                    b.eliminar()
                    if (a instanceof Disparo == true){
                        a.eliminar();
                    } else {
                        a.velocidadY = -15;
                        a.timerRebote = 2;
                    }
                }
            }
        }
    }
}

function chocarPersonaje(b){
    let a = personaje
        if (b.Y + b.alto >= a.Y && b.Y < a.alto + a.Y) {
            if (b.X < a.X + a.ancho -a.offsetX  && b.X + b.ancho > a.X +a.offsetX  ) {
                if (a.timerInmortal == 0){
                    b.eliminar();
                    perder();
                } else {
                    b.eliminar()
                }
            }
        
    }
}

function colisionFutura(a,velocidad){
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

function colisionPiso(a){
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

function colisionTecho(a){
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
                b.aplicar();
                b.eliminar();
            }
        }
    }
}



addEvent(document,"keydown", function(e){
    keyboard[e.keyCode] = true;
})
addEvent(document,"keyup", function(e){
    keyboard[e.keyCode] = false;
})

function addEvent(elemento, evento, funcion){
    elemento.addEventListener(evento, funcion, false)
}
