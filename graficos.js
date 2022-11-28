let imgEnemigos = new Image();
imgEnemigos.src = 'graficos/4307.png';

export let botonA = new Image();
botonA.src = 'graficos/botonA.png';

export let botonAPush = new Image();
botonAPush.src = 'graficos/botonAPush.png';

export let palanca = new Image();
palanca.src = 'graficos/palanca.png';

export let palancaDer = new Image();
palancaDer.src = 'graficos/palancaDer.png';

export let palancaIzq = new Image();
palancaIzq.src = 'graficos/palancaIzq.png';

export let palancaAba = new Image();
palancaAba.src = 'graficos/palancaAba.png';

export let palancaArr = new Image();
palancaArr.src = 'graficos/palancaArr.png';

export let palancaArrDer = new Image();
palancaArrDer.src = 'graficos/palancaArrDer.png';

export let palancaArrIzq = new Image();
palancaArrIzq.src = 'graficos/palancaArrIzq.png';

export let palancaAbaDer = new Image();
palancaAbaDer.src = 'graficos/palancaAbaDer.png';

export let palancaAbaIzq = new Image();
palancaAbaIzq.src = 'graficos/palancaAbaIzq.png';

let imgVarios = new Image();
imgVarios.src = 'graficos/4320.png';

export let imgGameOver = new Image();
imgGameOver.src = 'graficos/gameover.png';

export let imgGanar = new Image();
imgGanar.src = 'graficos/imgganar.png';

export let imgPresentacion = new Image();
imgPresentacion.src = 'graficos/presentacion.png';

let imgPremios = new Image();
imgPremios.src = 'graficos/31609.png';

export let imgFondo = new Image();
imgFondo.src = 'graficos/65292.png';

let imgMundo = new Image();
imgMundo.src = 'graficos/105636.png';

let imgMario = new Image();
imgMario.src = 'graficos/mariob.png';

export let imgMusicOff = new Image();
imgMusicOff.src = 'graficos/music_off.png';

export let imgMusicOn = new Image();
imgMusicOn.src = 'graficos/music_on.png';

export let imgVidas = {"imagen": imgVarios, "x": 2, "y": 58, "ancho": 32, "alto":32, "margenX":35,"margenY": 10}
export let imgMonedas = {"imagen": imgMundo, "x": 653, "y": 167, "ancho": 26, "alto":26, "margenX":1243,"margenY": 8}

const graficos = [
    { "id": 0, "nombre": "Pato", "imagen":  imgEnemigos, "ancho": 39, "alto": 48, "frames": 2, "index": [ "0-0-39-48", "39-0-39-48"]}, 
    { "id": 1, "nombre": "Pato Rojo", "imagen":  imgEnemigos, "ancho": 39, "alto": 48, "frames": 2, "index": [ "151-0-39-48", "190-0-39-48"]},
    { "id": 2, "nombre": "Mario grande", "imagen":  imgMario, "ancho": 30, "alto": 54, "frames": 3, "index": [ "88-108-32-54", "126-108-32-54", "164-108-32-54"]},
    { "id": 3, "nombre": "Mario grande saltando", "imagen": imgMario, "ancho": 30, "alto": 54, "frames": 1, "index": [ "238-108-32-54"]},
    { "id": 4, "nombre": "Mario grande agachado", "imagen": imgMario, "ancho": 30, "alto": 40, "frames": 1, "index": [ "454-122-32-40"]},
    { "id": 5, "nombre": "Plataforma signo", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 4, "index": [ "652-29-30-30", "686-29-30-30","720-29-30-30","754-29-30-30"]},
    { "id": 6, "nombre": "Plataforma signo apagado", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": ["788-29-30-30"]},
    { "id": 7, "nombre": "BORRAR", "imagen": imgVarios, "ancho": 32, "alto": 32, "frames": 1, "index": [ "2-58-32-32"]},
    { "id": 8, "nombre": "BORRAR", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "39-804-30-30"]},
    { "id": 9, "nombre": "BORRAR", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "72-804-30-30"]},
    { "id": 10, "nombre": "BORRAR", "imagen": imgMario, "ancho": 26, "alto": 32, "frames": 1, "index": [ "454-124-30-42"]},
    { "id": 11, "nombre": "BORRAR", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": ["788-29-30-30"]},
    { "id": 12, "nombre": "Hongo", "imagen": imgPremios, "ancho": 26, "alto": 26, "frames": 1, "index": [ "3-18-26-26"]},
    { "id": 13, "nombre": "Estrella", "imagen": imgPremios, "ancho": 26, "alto": 26, "frames": 1, "index": [ "164-18-26-26"]},
    { "id": 14, "nombre": "Flor", "imagen": imgPremios, "ancho": 26, "alto": 26, "frames": 1, "index": [ "30-18-26-26"]},
    { "id": 15, "nombre": "Moneda movimiento", "imagen": imgMundo, "ancho": 26, "alto": 26, "frames": 4, "index": [ "653-167-26-26", "691-167-26-26","726-167-26-26","752-167-26-26"]},
    { "id": 16, "nombre": "Moneda quieta", "imagen": imgMundo, "ancho": 26, "alto": 26, "frames": 1, "index": [ "653-167-26-26"]},
    { "id": 17, "nombre": "Mario chico", "imagen": imgMario, "ancho": 30, "alto": 30, "frames": 2, "index": [ "80-52-30-30", "112-50-30-32"]},
    { "id": 18, "nombre": "Mario chico saltando", "imagen": imgMario, "ancho": 30, "alto": 30, "frames": 1, "index": [ "184-50-30-32"]},
    { "id": 19, "nombre": "Mario fuego", "imagen": imgMario, "ancho": 30, "alto": 54, "frames": 3, "index": [ "178-182-30-54", "212-182-30-54", "250-182-30-54"]},
    { "id": 20, "nombre": "Mario saltando fuego", "imagen": imgMario, "ancho": 30, "alto": 54, "frames": 1, "index": [ "326-182-30-54"]},
    { "id": 21, "nombre": "Mario agachado fuego", "imagen": imgMario, "ancho": 30, "alto": 40, "frames": 1, "index": [ "610-195-30-40"]},
    { "id": 22, "nombre": "Disparo Fuego", "imagen": imgMario, "ancho": 20, "alto": 20, "frames": 4, "index": [ "88-208-20-20", "108-208-20-20","132-208-20-20","156-208-20-20"]},
    { "id": 23, "nombre": "Tortuga dispara fuego", "imagen": imgEnemigos, "ancho": 24, "alto": 38, "frames": 2, "index": [ "210-248-24-38", "235-248-24-38"]},
    { "id": 24, "nombre": "Tortuga dispara fuego", "imagen": imgEnemigos, "ancho": 24, "alto": 38, "frames": 1, "index": [ "260-250-24-40"]},
    { "id": 25, "nombre": "Hongo enemigo", "imagen": imgEnemigos, "ancho": 38, "alto": 34, "frames": 2, "index": [ "0-446-38-34", "38-446-38-34"]},
    { "id": 26, "nombre": "Pasto izq", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "7-805-30-30"]},
    { "id": 27, "nombre": "Pasto cen", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "40-805-30-30"]},
    { "id": 28, "nombre": "Pasto der", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "74-805-30-30"]},
    { "id": 29, "nombre": "Pasto izq abajo", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "7-837-30-30"]},
    { "id": 30, "nombre": "Pasto cen abajo", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "40-837-30-30"]},
    { "id": 31, "nombre": "Pasto der abajo", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "74-837-30-30"]},
    { "id": 32, "nombre": "Tierra izq", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "7-941-30-30"]},
    { "id": 33, "nombre": "Tierra cen", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "40-941-30-30"]},
    { "id": 34, "nombre": "Tierra der", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "74-941-30-30"]},
    { "id": 35, "nombre": "Tierra izq abajo", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "7-973-30-30"]},
    { "id": 36, "nombre": "Tierra cen abajo", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "40-973-30-30"]},
    { "id": 37, "nombre": "Tierra der abajo", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "74-973-30-30"]},
    { "id": 38, "nombre": "Plataforma ladrillo", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 4, "index": [ "651-62-30-30", "685-62-30-30","719-62-30-30","753-62-30-30"]},
    { "id": 39, "nombre": "Plataforma ladrillo quieto", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": ["787-62-30-30"]},
    { "id": 40, "nombre": "Plataforma ladrillo hielo", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 4, "index": [ "651-96-30-30", "685-96-30-30","719-96-30-30","753-96-30-30"]},
    { "id": 41, "nombre": "Plataforma ladrillo hielo quieto", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": ["787-96-30-30"]},
    { "id": 42, "nombre": "Plataforma madera izq", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "1182-28-30-30"]},
    { "id": 43, "nombre": "Plataforma madera cen", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "1212-28-30-30"]},
    { "id": 44, "nombre": "Plataforma madera der", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "1242-28-30-30"]},
    { "id": 45, "nombre": "Plataforma nube lisa izq", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "1277-28-30-30"]},
    { "id": 46, "nombre": "Plataforma nube lisa cen", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "1307-28-30-30"]},
    { "id": 47, "nombre": "Plataforma nube lisa der", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "1337-28-30-30"]},
    { "id": 48, "nombre": "Plataforma nube izq", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "757-805-30-30"]},
    { "id": 49, "nombre": "Plataforma nube cen", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "787-805-30-30"]},
    { "id": 50, "nombre": "Plataforma nube der", "imagen": imgMundo, "ancho": 30, "alto": 30, "frames": 1, "index": [ "817-805-30-30"]},
    { "id": 51, "nombre": "Cañeria arriba entrada", "imagen": imgMundo, "ancho": 60, "alto": 30, "frames": 1, "index": [ "1203-341-60-30"]},
    { "id": 52, "nombre": "Cañeria arriba tubo", "imagen": imgMundo, "ancho": 60, "alto": 30, "frames": 1, "index": [ "1203-372-60-30"]},
    { "id": 53, "nombre": "Cañeria arriba entrada", "imagen": imgMundo, "ancho": 60, "alto": 30, "frames": 1, "index": [ "1264-341-60-30"]},
    { "id": 54, "nombre": "Cañeria arriba tubo", "imagen": imgMundo, "ancho": 60, "alto": 30, "frames": 1, "index": [ "1264-372-60-30"]},
    { "id": 55, "nombre": "Cañeria arriba entrada", "imagen": imgMundo, "ancho": 30, "alto": 60, "frames": 1, "index": [ "1203-403-30-60"]},
    { "id": 56, "nombre": "Cañeria arriba tubo", "imagen": imgMundo, "ancho": 30, "alto": 60, "frames": 1, "index": [ "1234-403-30-60"]},
    { "id": 57, "nombre": "Cañeria arriba entrada", "imagen": imgMundo, "ancho": 30, "alto": 60, "frames": 1, "index": [ "1265-403-30-60"]},
    { "id": 58, "nombre": "Cañeria arriba tubo", "imagen": imgMundo, "ancho": 30, "alto": 60, "frames": 1, "index": [ "1297-403-30-60"]},
    { "id": 59, "nombre": "Pared invisible", "imagen": imgMundo, "ancho": 10, "alto": 1000, "frames": 1, "index": [ "1800-0-10-1000"]},
    { "id": 60, "nombre": "Pasar nivel", "imagen": imgPremios, "ancho": 26, "alto": 26, "frames": 1, "index": [ "190-18-26-26"]},
    { "id": 61, "nombre": "Pato verde vuela", "imagen": imgEnemigos, "ancho": 39, "alto": 48, "frames": 2, "index": [ "1-49-39-48", "40-49-39-48"]}, 
    { "id": 62, "nombre": "Pato Rojo vuela", "imagen": imgEnemigos, "ancho": 39, "alto": 48, "frames": 2, "index": [ "152-49-39-48", "190-49-39-48"]},
    { "id": 63, "nombre": "BORRAR", "imagen": imgEnemigos, "ancho": 39, "alto": 48, "frames": 2, "index": [ "152-49-39-48", "190-49-39-48"]},
    { "id": 64, "nombre": "Mario chico muere", "imagen": imgMario, "ancho": 30, "alto": 30, "frames": 1, "index": [ "369-52-30-30"]},
    
]

export function indexacion(a,grafico){
    if (grafico==null) return
    a.frameActual=0;
    a.img=new Image();
    a.frames=graficos[grafico].frames
    a.ancho=graficos[grafico].ancho
    a.alto=graficos[grafico].alto
    a.img.src = graficos[grafico].imagen.src

    let indexacion = "";
    let imgX = ""
    let imgY = ""
    let imgAncho = ""
    let imgAlto = ""
    for (let i = 0; i < a.frames; i++) {
        indexacion = graficos[grafico].index[i].split("-")
        imgX += indexacion[0] + "-";
        imgY += indexacion[1] + "-";
        imgAncho += indexacion[2] + "-";
        imgAlto += indexacion[3] + "-";
    }
    a.imgX = imgX.split("-")
    a.imgY = imgY.split("-")
    a.imgAncho = imgAncho.split("-")
    a.imgAlto = imgAlto.split("-")
}