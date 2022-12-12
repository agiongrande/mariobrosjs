import {readRanking, readLastUserPoints, readRankingLength, UpdateRanking, maxUsersInRanking} from './firebase.js'
import {LoadLevel, DinamicEnemies} from './levels.js'
import {Shoot} from './shoot.js'
import {Enemy} from './enemies.js'
import {Player, ResetCoins, dinamicsX, offsetX, numCoins} from './player.js'
import {indexacion, imgMusicOff, imgMusicOn, imgWin, imgStart, imgGameOver, imgBackground, imgLives, imgCoins, joystick, joystickDown, joystickDownRight, joystickDownLeft, joystickUp, joystickUpRight, joystickUpLeft, joystickRight, joystickLeft, buttonA, buttonAPush, buttonS, buttonSPush} from './graphics.js'
import {PreloadGame} from './preload.js'

export let gravity = 5;
export let enemies = [];
export let shoots = [];
export let powerUps = [];
export let platforms = [];
export let player;
export let tileX = 30
export let tileY=30
export let canvas = document.querySelector('canvas')
let rankingButton = document.querySelector('rankingButton')
let timerEnemies=0;
let timerDead = 0;
let timerWin = 0;
let lives
let numCoinsStart=0
let numLevel
let c = canvas.getContext("2d")
const lastLevel = 4
const firstLevel = 1
canvas.width = 1280;
canvas.height = 570;

let offsetCanvasX= canvas.getBoundingClientRect().x
let offsetCanvasY= canvas.getBoundingClientRect().y

let buttonWidth =75
let buttonHeight =75

let buttonAX =canvas.width-buttonWidth - 120
let buttonAY =canvas.height-buttonHeight - 40
let buttonSX =canvas.width-buttonWidth - 40
let buttonSY =canvas.height-buttonHeight - 40

let fireButton = 83;
let jumpButton = 65;
let upArrowKey = 38;
let downArrowKey = 40;
let leftArrowKey = 37;
let rightArrowKey = 39;


let joystickX = 50
let joystickWidth = 100
let joystickHeight = 100
let joystickY=canvas.height-joystickHeight - 50

let keyboard = {};
let mouse = 0;
let mouseX =0;
let mouseY =0;
let mouseJump = false;
let mouseShoot = false;
let mouseID = 0
let mouseShootID= 0

let musicOn = false
let actualSong = ""
let actualSongLoop = false
const timeWinLevelMusicOn = 120
const timeWinLevelMusicOff = 20
const timeDeadLevelMusicOn = 70
const timeDeadLevelMusicOff = 20

const moveInterval=45

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

let gameStage = 0 // 0 loading - 1 start - 2 game - 3 gameover
let rank = []

async function ActualizateRanking(){
    rank = await readRanking();
    if (rank != ""){
        gameStage = 1;
    }
}

async function LoadGame(){
    rank = await PreloadGame();
    
    if (rank != ""){
        gameStage = 1;
    }
}
LoadGame();


function StartGame(){
    lives = 3;
    ResetCoins(0);
    numLevel = firstLevel;
    StartLevel()
    }

function ResetLevel(){
    shoots = [];
    powerUps = [];
    enemies = [];
    platforms = [];
    timerEnemies=0;
}


function StartLevel(reload){
    ResetLevel();
    player = new Player(60,0,17);
    numCoinsStart = numCoins

    if (numLevel > lastLevel){
        blockRanking=true;
        gameStage = 4;
        PlayFx("celebrate.mp3");
        CheckRanking();
    }else{
        LoadLevel(numLevel)
        PlayMusic("theme.mp3",true);
        gameStage = 2;
    }
}

function Render(){
    if (gameStage == 0){
        c.fillStyle = "white";
        c.fillRect(0, 0, canvas.width, canvas.height);
        c.font = "bold 24px verdana, sans-serif ";
        let welcomeMessage2 ="Loading";
        c.textAlign = "center";
        c.textBaseline = "bottom";
        c.fillStyle = "#ff0000";
        c.fillText(welcomeMessage2, canvas.width/2, canvas.height/2);
        c.fillStyle = "#ffffff";
    } else if (gameStage == 1){
        c.drawImage(imgStart,0,0)
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
    } else if (gameStage == 3){
        c.drawImage(imgGameOver,0,0) 
    } else if (gameStage == 4){
        c.drawImage(imgWin,0,0)
    } else if (gameStage == 2){

        c.drawImage(imgBackground,300,0,300,0,300,0,300,0)
        var pat = c.createPattern(imgBackground, "repeat");
        c.rect(0, 0, 1500, 768);
        c.fillStyle = pat;
        c.save();
        c.translate(offsetX*-1, 0);
        c.fillRect(-650, 0, 15000, 700);
        c.restore();

        for (let index = 0; index < lives; index++) {
            c.drawImage(imgLives.image,imgLives.x,imgLives.y,imgLives.width,imgLives.height,imgLives.marginX*index+10,imgLives.marginY,imgLives.width,imgLives.height)
        }

        c.drawImage(imgCoins.image,imgCoins.x,imgCoins.y,imgCoins.width,imgCoins.height,imgCoins.marginX,imgCoins.marginY,imgCoins.width,imgCoins.height)

        c.font = "bold 24px verdana, sans-serif ";
        var welcomeMessage =numCoins;
        c.textAlign = "right";
        c.textBaseline = "bottom";
        c.fillStyle = "#ff0000";
        c.fillText(welcomeMessage, canvas.width-26-20, 36);

        c.font = "bold 24px verdana, sans-serif ";
        var welcomeMessage ="World " + numLevel;
        c.textAlign = "start";
        c.textBaseline = "bottom";
        c.fillStyle = "#ff0000";
        c.fillText(welcomeMessage, 10, 80);



        for (const platIndex of platforms){
            c.drawImage(platIndex.img,platIndex.imgX[platIndex.actualFrame],platIndex.imgY[platIndex.actualFrame],platIndex.imgWidth[platIndex.actualFrame],platIndex.imgHeight[platIndex.actualFrame],platIndex.X,platIndex.Y,platIndex.imgWidth[platIndex.actualFrame],platIndex.imgHeight[platIndex.actualFrame])
            platIndex.actualFrame = platIndex.actualFrame+1;
            if(platIndex.actualFrame>=platIndex.frames) platIndex.actualFrame=0
        }

        for (const powerIndex of powerUps){
            c.drawImage(powerIndex.img,powerIndex.imgX[powerIndex.actualFrame],powerIndex.imgY[powerIndex.actualFrame],powerIndex.imgWidth[powerIndex.actualFrame],powerIndex.imgHeight[powerIndex.actualFrame],powerIndex.X,powerIndex.Y,powerIndex.imgWidth[powerIndex.actualFrame],powerIndex.imgHeight[powerIndex.actualFrame])
            powerIndex.actualFrame = powerIndex.actualFrame+1;
            if(powerIndex.actualFrame>=powerIndex.frames) powerIndex.actualFrame=0
        }

        for (const shootIndex of shoots){
            c.drawImage(shootIndex.img,shootIndex.imgX[shootIndex.actualFrame],shootIndex.imgY[shootIndex.actualFrame],shootIndex.imgWidth[shootIndex.actualFrame],shootIndex.imgHeight[shootIndex.actualFrame],shootIndex.X,shootIndex.Y,shootIndex.imgWidth[shootIndex.actualFrame],shootIndex.imgHeight[shootIndex.actualFrame])
            shootIndex.actualFrame = shootIndex.actualFrame+1;
            if(shootIndex.actualFrame>=shootIndex.frames) shootIndex.actualFrame=0
        }

        for (const enemyIndex of enemies){
            if (enemyIndex.direction ==-1){
                c.drawImage(enemyIndex.img,enemyIndex.imgX[enemyIndex.actualFrame],enemyIndex.imgY[enemyIndex.actualFrame],enemyIndex.imgWidth[enemyIndex.actualFrame],enemyIndex.imgHeight[enemyIndex.actualFrame],enemyIndex.X,enemyIndex.Y,enemyIndex.imgWidth[enemyIndex.actualFrame],enemyIndex.imgHeight[enemyIndex.actualFrame])
            } else {
                c.save()
                c.translate(1280,0)
                c.scale(-1,1)
                c.drawImage(enemyIndex.img,enemyIndex.imgX[enemyIndex.actualFrame],enemyIndex.imgY[enemyIndex.actualFrame],enemyIndex.imgWidth[enemyIndex.actualFrame],enemyIndex.imgHeight[enemyIndex.actualFrame],canvas.width-enemyIndex.X-enemyIndex.imgWidth[enemyIndex.actualFrame],enemyIndex.Y,enemyIndex.imgWidth[enemyIndex.actualFrame],enemyIndex.imgHeight[enemyIndex.actualFrame])
                c.restore();
            }
            if (enemyIndex.speedX != 0){
                enemyIndex.actualFrame = enemyIndex.actualFrame+1;
                if(enemyIndex.actualFrame>=enemyIndex.frames) enemyIndex.actualFrame=0
            }

        }

        if (player.moving==true){
            if (player.direction ==1){
                c.drawImage(player.img,player.imgX[player.actualFrame],player.imgY[player.actualFrame],player.imgWidth[player.actualFrame],player.imgHeight[player.actualFrame],player.X,player.Y,player.imgWidth[player.actualFrame],player.imgHeight[player.actualFrame])
            }else {
                c.save()
                c.translate(1280,0)
                c.scale(-1,1)
                c.drawImage(player.img,player.imgX[player.actualFrame],player.imgY[player.actualFrame],player.imgWidth[player.actualFrame],player.imgHeight[player.actualFrame],canvas.width-player.X-player.imgWidth[player.actualFrame],player.Y,player.imgWidth[player.actualFrame],player.imgHeight[player.actualFrame])
                c.restore();
            }
        } else {
            if (player.direction ==1){
                c.drawImage(player.img,player.imgX[0],player.imgY[0],player.imgWidth[0],player.imgHeight[0],player.X,player.Y,player.imgWidth[0],player.imgHeight[0])
            }else {
                c.save()
                c.translate(1280,0)
                c.scale(-1,1)
                c.drawImage(player.img,player.imgX[0],player.imgY[0],player.imgWidth[0],player.imgHeight[0],canvas.width-player.X-player.imgWidth[0],player.Y,player.imgWidth[0],player.imgHeight[0])
                c.restore()
            }
        }
        if (player.timerInmortal>0){
            c.globalAlpha = 0.7;
            c.fillStyle = 'yellow';
        } else{
            c.globalAlpha = 1;
            c.fillStyle = '';
        }
        player.actualFrame ++;
        if(player.actualFrame>=player.frames) player.actualFrame=0

        c.save()
        c.globalAlpha = 0.5;
        if (player.isBend == true || keyboard[downArrowKey] == true){
            if (player.moving==0){
                c.drawImage(joystickDown,joystickX,joystickY)
            } else {
                if(player.direction<1){
                    c.drawImage(joystickDownLeft,joystickX,joystickY)
                } else {
                    c.drawImage(joystickDownRight,joystickX,joystickY)
                }
            }
        } else if (mouseJump == true || keyboard[upArrowKey] == true){
            if (player.moving==0){
                c.drawImage(joystickUp,joystickX,joystickY)
            } else {
                if(player.direction<1){
                    c.drawImage(joystickUpLeft,joystickX,joystickY)
                } else {
                    c.drawImage(joystickUpRight,joystickX,joystickY)
                }    
            }
        } else {
            if (player.moving==0){
                c.drawImage(joystick,joystickX,joystickY)
            }else{
                if(player.direction<1){
                    c.drawImage(joystickLeft,joystickX,joystickY)
                } else {
                    c.drawImage(joystickRight,joystickX,joystickY)
                }
            }    
        }


        if (keyboard[jumpButton] == true || mouseShoot == true){
            c.drawImage(buttonAPush,buttonAX,buttonAY)
        } else{
            c.drawImage(buttonA,buttonAX,buttonAY)
        }
        

        if (player.powerUp ==2){
            if (keyboard[fireButton] == true || mouseShoot == true){
                c.drawImage(buttonSPush,buttonSX,buttonSY)
            } else{
                c.drawImage(buttonS,buttonSX,buttonSY)
            }
        }
        c.restore()
    }
}



export function GetDamage(){
    if (player.powerUp >0){
        player.powerUp = 0;
        player.isBend=0;
        indexacion(player,17)
    }else{
        indexacion(player,64)
        lives--;
        musicOn ? timerDead=timeDeadLevelMusicOn : timerDead = timeDeadLevelMusicOff;
        PlayMusic("loseLive.mp3")
    }
}

function MoveEnemies(){
    for (const enemyIndex of enemies){
        if (enemyIndex.direction == 1){
            enemyIndex.moveForward();
        } else{
            enemyIndex.moveBackward();
        }
    }
}

function MovePowerUps(){
    for (const powerIndex of powerUps){
        if (powerIndex.movement > 0){
            if (powerIndex.direction > 0){
                powerIndex.moveForward();
            } else{
                powerIndex.moveBackward();
        
            }
            powerIndex.gravity();
    
        }

    }
}

function MoveShoots(){
    for (const indexShoot of shoots){
            if (indexShoot.direction > 0){
                indexShoot.moveForward();
            } else{
                indexShoot.moveBackward();
        
            }
    
        

    }
}

function MovePlatforms(){
    for (const platIndex of platforms){
        if (platIndex.movement ==1){
            platIndex.moveX();
        }else if(platIndex.movement ==2){
            platIndex.moveY();
        }
    }
}

function PlayerInPlatform(platform,player){
    if (platform.X<player.X && platform.Y > player.Y) {
        if (platform.Y == player.Y+player.height){
            return true
        }
    }
}

function MovePlayer(){
    player.moving=0
    
    if (player.isBend ==1){
        player.isBend =0
        if (player.powerUp==1){
            indexacion(player,2)
        } else if (player.powerUp ==2){
            indexacion(player,19)
        }
    }
    if (keyboard[downArrowKey] == true){
        player.bend();
    }
    
    if (keyboard[leftArrowKey] == true && player.isBend ==false  || (mouse < 0)){
        player.moveBackward();
        player.moving=1;
    }
    if (keyboard[rightArrowKey] == true && player.isBend ==false  || (mouse > 0)){
        player.moving=1;
        player.moveForward();
    }
    if ((keyboard[fireButton] == true || mouseShoot == true) && player.powerUp ==2 && player.timerShoot == 0){
        player.timerShoot = 50;
        PlayFx("fireball.mp3");
        shoots.push(new Shoot(player.X,player.Y + player.height/2,22,player,player.direction)); //fuego
    }
    if ((keyboard[jumpButton] == true || mouseJump==true) && (player.jumping == 0 || player.timerBounce >0)){
        //player.actualFrame=0;
        if (player.powerUp == 0){
        indexacion(player,18);
    } else if (player.powerUp ==1) {
        indexacion(player,3);
    } else if (player.powerUp ==2) {
        indexacion(player,20);

    }
        player.timerBounce = 0;
        player.jumping =1;
        player.jump();
     }

}

setInterval(function TimerGame(){
    Render();
    if (gameStage == 1){
        if (keyboard[13] == true){
            StartGame();
        }
    }else if (gameStage == 3 || gameStage == 4){
        if (keyboard[13] == true && blockRanking==false){
            gameStage=0;
            ActualizateRanking();
        }
    }else if (gameStage == 2){
        if (timerDead ==0 && timerWin == 0){

            MovePlayer();
            MoveEnemies();
            MovePowerUps();
            MoveShoots();
            MovePlatforms();
            GetPowerUps();

            if (player.timerBounce >0) player.timerBounce--
            if (player.timerInmortal>0) {
                player.timerInmortal--
                if (player.timerInmortal == 0) {
                    PlayMusic("theme.mp3",true);
                }
            }
            if (player.timerShoot>0) player.timerShoot--

            timerEnemies++
            for (const a of DinamicEnemies){
                if ((timerEnemies % a.time)==0){
                    enemies.push(new Enemy(30*a.X-dinamicsX,30*a.Y,a.image,a.direction,a.speed,a.timerShoot,a.noGravity));
                }
            }

            player.gravity();
            for (const enemyIndex of enemies) {
                enemyIndex.gravity();
                if (enemyIndex.timerShoot>0) {
                    enemyIndex.timerShoot--
                    if (enemyIndex.timerShoot==0){
                        enemyIndex.shoot()
                        enemyIndex.timerShoot =50
                    }
                }
            }
        } else if (timerDead>0) {
            timerDead--;
            if (timerDead == 0){
                if (lives<=0){
                    gameStage=3;
                    blockRanking=true;
                    PlayMusic("gameOver.mp3");
                    CheckRanking();
                } else{
                    ResetCoins(numCoinsStart)
                    StartLevel()
                }
            }
    
        } else {
            timerWin--;
            if (timerWin == 0){
                {
                    numLevel++
                    StartLevel()
                }
            }
        }
    }
},moveInterval);

async function CheckRanking(){
    let lastUserRanking = await readLastUserPoints();
    let usersRanking = await readRankingLength();

    if (numCoins == 0){
        blockRanking=false;
        return;
    }

    if (usersRanking < maxUsersInRanking || numCoins > lastUserRanking){;
        document.getElementById("wrap").style.display = "flex";
    } else {
        blockRanking=false;
    }

}

function Random(min, max) {
    return Math.random() * ((max+1) - min) + min;
  }

export function NextLevel(){
    musicOn ? timerWin=timeWinLevelMusicOn : timerWin = timeWinLevelMusicOff;
    PlayMusic("stage_clear.mp3");
}

export function CollideEnemy(a){
    for (const b of enemies){
        if (b.Y + b.height >= a.Y && b.Y < a.height + a.Y) {
            if (b.X < a.X + a.width -a.offsetX  && b.X + b.width > a.X +a.offsetX  ) {
                if (((a.speedY <= 0 && a.timerBounce ==0) && a.Y + a.height > b.Y + (b.height /2)) && a.timerInmortal == 0){
                    GetDamage();
                    if (timerDead == 0)  b.eliminate();
                } else {
                    b.eliminate()
                    if (a instanceof Shoot == true){
                        a.eliminate();
                    } else {
                        PlayFx("stomp.mp3");
                        a.speedY = -15;
                        a.timerBounce = 2;
                    }
                }
            }
        }
    }
}

export function CollidePlayer(b){
    let a = player
        if ((b.Y + b.height >= a.Y && b.Y + b.height <= a.height + a.Y)  || (b.Y  >= a.Y && b.Y <= a.height + a.Y)) {
            if (b.X < a.X + a.width -a.offsetX  && b.X + b.width > a.X +a.offsetX  ) {
                if (a.timerInmortal == 0){
                    GetDamage();
                    if (timerDead == 0)  b.eliminate();
                } else {
                    b.eliminate()
                }
            }
        
    }
}

export function FutureCollide(a,speed){
    let colision = false;
    if (speed <0){
        for (const b of platforms){
            if (a == player && b.id == 59){
            }
            if (b.Y + b.height > a.Y && b.Y < a.height + a.Y) {
                if (b.X < a.X -a.offsetX && b.X + b.width  > a.X -a.offsetX  ) {
                    colision = true;
                }
            }
        }
    }
    if (speed >0){
        for (const b of platforms){
            if (a == player && b.id == 59){
            }
            if (b.Y + b.height > a.Y && b.Y < a.height + a.Y) {
                if (b.X  < a.X + a.width +(a.offsetX) && b.X + b.width -(a.offsetX) > a.X + a.width  ) {
                    colision = true;
                }
            }
        }
    }
    return colision;
}

export function CollideFloor(a){
    let colision = false;
    for (const b of platforms){
        if (b.X + b.width -a.offsetX > a.X && b.X +a.offsetX < a.width + a.X) {
            if (b.Y < a.height + a.Y && b.Y + b.height  >= a.height + a.Y && a.speedY >= 0) {
                colision = true;
                a.Y = b.Y - a.height
            }
        }
    }
    return colision;
}

export function CollideRoof(a){
    for (const b of platforms){
        if (b.X + b.width -player.offsetX>= a.X && b.X +player.offsetX < a.width + a.X) {
            if (b.Y + b.height >= a.Y && b.Y -gravity <= a.Y) {
                a.Y = b.Y + b.height
                a.speedY = 0;
                if (b.canBreak == true){
                    b.eliminate();
                }
                return true;
            }
        }
    }
}

function GetPowerUps(){
    let a = player;
    for (const b of powerUps){
        if ((a.Y + a.width  < b.Y + b.height && a.Y + a.height  > b.Y)  || (a.Y < b.Y + b.height && a.Y  > b.Y )  || (a.Y + (a.height/2) < b.Y + b.height && a.Y + (a.height/2)  > b.Y )) {
            if ((a.X + a.width  < b.X + b.width && a.X + a.width  > b.X)  || (a.X < b.X + b.width && a.X  > b.X ) || (a.X+(a.width/2) < b.X + b.width && a.X+(a.width/2)  > b.X )) {
                b.eliminate();
                b.use();
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
    if (gameStage == 1){
        StartGame();
        
    }
    if ((gameStage == 3 || gameStage == 4) && blockRanking==false){
        gameStage=0;
        ActualizateRanking();
    }
    //alert(e.x + " - " + joystickWidth + " " + joystickX + " " + joystickY + " " + joystickHeight)
    if (e.x < joystickWidth + joystickX + offsetCanvasX && e.x > joystickX + offsetCanvasX && e.y  > joystickY + offsetCanvasY && e.y < joystickHeight+joystickY+ offsetCanvasY){
        mouseX=e.x
        mouseY=e.y
        mouseID=e.pointerId
    }
//alert(offsetCanvasX + " " + offsetCanvasY)
    if (e.x < joystickWidth + buttonAX + offsetCanvasX && e.x > buttonAX + offsetCanvasX && e.y > joystickY + offsetCanvasY && e.y < joystickHeight+joystickY+ offsetCanvasY){
        mouseShoot = true
        mouseShootID=e.pointerId 
    }
    if (e.x < joystickWidth + buttonSX + offsetCanvasX && e.x > buttonSX + offsetCanvasX && e.y > joystickY + offsetCanvasY && e.y < joystickHeight+joystickY+ offsetCanvasY){
        mouseShoot = true
        mouseShootID=e.pointerId 
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
        mouseJump=0
        
    } else if (mouseShootID==e.pointerId){
        mouseShoot=false
        mouseShootID=0
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
            mouseJump=true;
        }else{
            mouseJump=false;
        }
    }
    
})

addEvent(rankingButton,"pointerup", function(e){
    let textRanking = document.getElementById("textRanking").value;
    if (textRanking == "") return
    UpdateRanking(textRanking,numCoins)
    document.getElementById("textRanking").value = ""
    document.getElementById("wrap").style.display = "none";
    blockRanking = false;
})


function addEvent(elemento, evento, funcion){
    elemento.addEventListener(evento, funcion, false)
}

