let imgEnemies = new Image();
imgEnemies.src = 'graphics/4307.png';

export let buttonA = new Image();
buttonA.src = 'graphics/botonA.png';

export let buttonAPush = new Image();
buttonAPush.src = 'graphics/botonAPush.png';

export let buttonS = new Image();
buttonS.src = 'graphics/botonS.png';

export let buttonSPush = new Image();
buttonSPush.src = 'graphics/botonSPush.png';

export let joystick = new Image();
joystick.src = 'graphics/palanca.png';

export let joystickRight = new Image();
joystickRight.src = 'graphics/palancaDer.png';

export let joystickLeft = new Image();
joystickLeft.src = 'graphics/palancaIzq.png';

export let joystickDown = new Image();
joystickDown.src = 'graphics/palancaAba.png';

export let joystickUp = new Image();
joystickUp.src = 'graphics/palancaArr.png';

export let joystickUpRight = new Image();
joystickUpRight.src = 'graphics/palancaArrDer.png';

export let joystickUpLeft = new Image();
joystickUpLeft.src = 'graphics/palancaArrIzq.png';

export let joystickDownRight = new Image();
joystickDownRight.src = 'graphics/palancaAbaDer.png';

export let joystickDownLeft = new Image();
joystickDownLeft.src = 'graphics/palancaAbaIzq.png';

let imgOthers = new Image();
imgOthers.src = 'graphics/4320.png';

export let imgGameOver = new Image();
imgGameOver.src = 'graphics/gameover.png';

export let imgWin = new Image();
imgWin.src = 'graphics/imgganar.png';

export let imgStart = new Image();
imgStart.src = 'graphics/presentacion.png';

let imgPowerUps = new Image();
imgPowerUps.src = 'graphics/31609.png';

export let imgBackground = new Image();
imgBackground.src = 'graphics/65292.png';

let imgWorld = new Image();
imgWorld.src = 'graphics/105636.png';

let imgMario = new Image();
imgMario.src = 'graphics/mariob.png';

export let imgMusicOff = new Image();
imgMusicOff.src = 'graphics/music_off.png';

export let imgMusicOn = new Image();
imgMusicOn.src = 'graphics/music_on.png';

export let imgLives = {"image": imgOthers, "x": 2, "y": 58, "width": 32, "height":32, "marginX":35,"marginY": 10}
export let imgCoins = {"image": imgWorld, "x": 653, "y": 167, "width": 26, "height":26, "marginX":1243,"marginY": 8}

const graphics = [
    { "id": 0, "name": "Pato", "image":  imgEnemies, "width": 39, "height": 48, "frames": 2, "index": [ "0-0-39-48", "39-0-39-48"]}, 
    { "id": 1, "name": "Pato Rojo", "image":  imgEnemies, "width": 39, "height": 48, "frames": 2, "index": [ "151-0-39-48", "190-0-39-48"]},
    { "id": 2, "name": "Mario grande", "image":  imgMario, "width": 30, "height": 54, "frames": 3, "index": [ "88-108-32-54", "126-108-32-54", "164-108-32-54"]},
    { "id": 3, "name": "Mario grande saltando", "image": imgMario, "width": 30, "height": 54, "frames": 1, "index": [ "238-108-32-54"]},
    { "id": 4, "name": "Mario grande agachado", "image": imgMario, "width": 30, "height": 40, "frames": 1, "index": [ "454-122-32-40"]},
    { "id": 5, "name": "Plataforma signo", "image": imgWorld, "width": 30, "height": 30, "frames": 4, "index": [ "652-29-30-30", "686-29-30-30","720-29-30-30","754-29-30-30"]},
    { "id": 6, "name": "Plataforma signo apagado", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": ["788-29-30-30"]},
    { "id": 7, "name": "BORRAR", "image": imgOthers, "width": 32, "height": 32, "frames": 1, "index": [ "2-58-32-32"]},
    { "id": 8, "name": "BORRAR", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "39-804-30-30"]},
    { "id": 9, "name": "BORRAR", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "72-804-30-30"]},
    { "id": 10, "name": "BORRAR", "image": imgMario, "width": 26, "height": 32, "frames": 1, "index": [ "454-124-30-42"]},
    { "id": 11, "name": "BORRAR", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": ["788-29-30-30"]},
    { "id": 12, "name": "Hongo", "image": imgPowerUps, "width": 26, "height": 26, "frames": 1, "index": [ "3-18-26-26"]},
    { "id": 13, "name": "Estrella", "image": imgPowerUps, "width": 26, "height": 26, "frames": 1, "index": [ "164-18-26-26"]},
    { "id": 14, "name": "Flor", "image": imgPowerUps, "width": 26, "height": 26, "frames": 1, "index": [ "30-18-26-26"]},
    { "id": 15, "name": "Moneda movimiento", "image": imgWorld, "width": 26, "height": 26, "frames": 4, "index": [ "653-167-26-26", "691-167-26-26","726-167-26-26","752-167-26-26"]},
    { "id": 16, "name": "Moneda quieta", "image": imgWorld, "width": 26, "height": 26, "frames": 1, "index": [ "653-167-26-26"]},
    { "id": 17, "name": "Mario chico", "image": imgMario, "width": 30, "height": 30, "frames": 2, "index": [ "80-52-30-30", "112-50-30-32"]},
    { "id": 18, "name": "Mario chico saltando", "image": imgMario, "width": 30, "height": 30, "frames": 1, "index": [ "184-50-30-32"]},
    { "id": 19, "name": "Mario fuego", "image": imgMario, "width": 30, "height": 54, "frames": 3, "index": [ "178-182-30-54", "212-182-30-54", "250-182-30-54"]},
    { "id": 20, "name": "Mario saltando fuego", "image": imgMario, "width": 30, "height": 54, "frames": 1, "index": [ "326-182-30-54"]},
    { "id": 21, "name": "Mario agachado fuego", "image": imgMario, "width": 30, "height": 40, "frames": 1, "index": [ "610-195-30-40"]},
    { "id": 22, "name": "Disparo Fuego", "image": imgMario, "width": 20, "height": 20, "frames": 4, "index": [ "88-208-20-20", "108-208-20-20","132-208-20-20","156-208-20-20"]},
    { "id": 23, "name": "Tortuga dispara fuego", "image": imgEnemies, "width": 24, "height": 38, "frames": 2, "index": [ "210-248-24-38", "235-248-24-38"]},
    { "id": 24, "name": "Tortuga dispara fuego", "image": imgEnemies, "width": 24, "height": 38, "frames": 1, "index": [ "260-250-24-40"]},
    { "id": 25, "name": "Hongo enemigo", "image": imgEnemies, "width": 38, "height": 34, "frames": 2, "index": [ "0-446-38-34", "38-446-38-34"]},
    { "id": 26, "name": "Pasto izq", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "7-805-30-30"]},
    { "id": 27, "name": "Pasto cen", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "40-805-30-30"]},
    { "id": 28, "name": "Pasto der", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "74-805-30-30"]},
    { "id": 29, "name": "Pasto izq abajo", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "7-837-30-30"]},
    { "id": 30, "name": "Pasto cen abajo", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "40-837-30-30"]},
    { "id": 31, "name": "Pasto der abajo", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "74-837-30-30"]},
    { "id": 32, "name": "Tierra izq", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "7-941-30-30"]},
    { "id": 33, "name": "Tierra cen", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "40-941-30-30"]},
    { "id": 34, "name": "Tierra der", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "74-941-30-30"]},
    { "id": 35, "name": "Tierra izq abajo", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "7-973-30-30"]},
    { "id": 36, "name": "Tierra cen abajo", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "40-973-30-30"]},
    { "id": 37, "name": "Tierra der abajo", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "74-973-30-30"]},
    { "id": 38, "name": "Plataforma ladrillo", "image": imgWorld, "width": 30, "height": 30, "frames": 4, "index": [ "651-62-30-30", "685-62-30-30","719-62-30-30","753-62-30-30"]},
    { "id": 39, "name": "Plataforma ladrillo quieto", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": ["787-62-30-30"]},
    { "id": 40, "name": "Plataforma ladrillo hielo", "image": imgWorld, "width": 30, "height": 30, "frames": 4, "index": [ "651-96-30-30", "685-96-30-30","719-96-30-30","753-96-30-30"]},
    { "id": 41, "name": "Plataforma ladrillo hielo quieto", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": ["787-96-30-30"]},
    { "id": 42, "name": "Plataforma madera izq", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "1182-28-30-30"]},
    { "id": 43, "name": "Plataforma madera cen", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "1212-28-30-30"]},
    { "id": 44, "name": "Plataforma madera der", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "1242-28-30-30"]},
    { "id": 45, "name": "Plataforma nube lisa izq", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "1277-28-30-30"]},
    { "id": 46, "name": "Plataforma nube lisa cen", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "1307-28-30-30"]},
    { "id": 47, "name": "Plataforma nube lisa der", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "1337-28-30-30"]},
    { "id": 48, "name": "Plataforma nube izq", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "757-805-30-30"]},
    { "id": 49, "name": "Plataforma nube cen", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "787-805-30-30"]},
    { "id": 50, "name": "Plataforma nube der", "image": imgWorld, "width": 30, "height": 30, "frames": 1, "index": [ "817-805-30-30"]},
    { "id": 51, "name": "Cañeria arriba entrada", "image": imgWorld, "width": 60, "height": 30, "frames": 1, "index": [ "1203-341-60-30"]},
    { "id": 52, "name": "Cañeria arriba tubo", "image": imgWorld, "width": 60, "height": 30, "frames": 1, "index": [ "1203-372-60-30"]},
    { "id": 53, "name": "Cañeria arriba entrada", "image": imgWorld, "width": 60, "height": 30, "frames": 1, "index": [ "1264-341-60-30"]},
    { "id": 54, "name": "Cañeria arriba tubo", "image": imgWorld, "width": 60, "height": 30, "frames": 1, "index": [ "1264-372-60-30"]},
    { "id": 55, "name": "Cañeria arriba entrada", "image": imgWorld, "width": 30, "height": 60, "frames": 1, "index": [ "1203-403-30-60"]},
    { "id": 56, "name": "Cañeria arriba tubo", "image": imgWorld, "width": 30, "height": 60, "frames": 1, "index": [ "1234-403-30-60"]},
    { "id": 57, "name": "Cañeria arriba entrada", "image": imgWorld, "width": 30, "height": 60, "frames": 1, "index": [ "1265-403-30-60"]},
    { "id": 58, "name": "Cañeria arriba tubo", "image": imgWorld, "width": 30, "height": 60, "frames": 1, "index": [ "1297-403-30-60"]},
    { "id": 59, "name": "Pared invisible", "image": imgWorld, "width": 10, "height": 1000, "frames": 1, "index": [ "1800-0-10-1000"]},
    { "id": 60, "name": "Pasar nivel", "image": imgPowerUps, "width": 26, "height": 26, "frames": 1, "index": [ "190-18-26-26"]},
    { "id": 61, "name": "Pato verde vuela", "image": imgEnemies, "width": 39, "height": 48, "frames": 2, "index": [ "1-49-39-48", "40-49-39-48"]}, 
    { "id": 62, "name": "Pato Rojo vuela", "image": imgEnemies, "width": 39, "height": 48, "frames": 2, "index": [ "152-49-39-48", "190-49-39-48"]},
    { "id": 63, "name": "BORRAR", "image": imgEnemies, "width": 39, "height": 48, "frames": 2, "index": [ "152-49-39-48", "190-49-39-48"]},
    { "id": 64, "name": "Mario chico muere", "image": imgMario, "width": 30, "height": 30, "frames": 1, "index": [ "369-52-30-30"]},
    
]

export function indexacion(a,graphic){
    
    if (graphic==null) return
    a.actualFrame=0;
    a.img=new Image();
    a.frames=graphics[graphic].frames
    a.width=graphics[graphic].width
    a.height=graphics[graphic].height
    a.img.src = graphics[graphic].image.src

    let indexacion = "";
    let imgX = ""
    let imgY = ""
    let imgWidth = ""
    let imgHeight = ""
    for (let i = 0; i < a.frames; i++) {
        indexacion = graphics[graphic].index[i].split("-")
        imgX += indexacion[0] + "-";
        imgY += indexacion[1] + "-";
        imgWidth += indexacion[2] + "-";
        imgHeight += indexacion[3] + "-";
    }
    a.imgX = imgX.split("-")
    a.imgY = imgY.split("-")
    a.imgWidth = imgWidth.split("-")
    a.imgHeight = imgHeight.split("-")
}