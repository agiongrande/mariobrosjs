import {PlayFx, PlayMusic, platforms, powerUps, enemies, shoots, GetDamage, NextLevel} from './game.js'
import {indexacion} from './graphics.js'
import {FutureCollide, CollideEnemy, CollideRoof, CollideFloor, player, gravity, canvas} from './game.js'

export let dinamicsX =0;
export let offsetX =0;
export let numCoins =0;
export class Player {
    constructor(x,y,graphic){
        this.moving = false;
        this.isBend= false;
        this.powerUp = 0; //0 small / 1 big / 2 fire 
        this.timerInmortal = 0; //star
        this.timerShoot = 0;
        this.offsetX = 3
        this.jumping = 0;
        this.timerBounce = 0;
        this.jumpForce = 40;
        this.X=x
        this.Y=y
        offsetX=0;
        this.direction = 1;
        indexacion(this,graphic);
        this.speedX=10
        this.speedY=0
        dinamicsX=0
        this.gravity = function(){
            this.speedY += gravity
            if (this.speedY > 20) this.speedY=20
            this.Y += this.speedY
            if (this.speedY > 0) {
                if (CollideFloor(this)){
                    if (this.jumping>0){
                    this.jumping = 0;
                        if (player.isBend==0){
                            if (player.powerUp ==0){
                                indexacion(player,17);
                            }else if (player.powerUp ==1){
                                indexacion(player,2);
                            }else if (player.powerUp ==2){
                                indexacion(player,19);
                            }
                        }
                    }
                    this.speedY = 0;
                }
            } else {
                if (CollideRoof(player)==true){
                    this.speedY = 0
                }        
        
            }
            if (player.Y +player.height > canvas.height){
                player.powerUp=0;
                GetDamage();
            }
        }
        this.moveForward = function(){
            this.direction = 1;
            if (FutureCollide(this,this.speedX*this.direction)==false){
                
            if (this.X > canvas.width/2){
                dinamicsX +=this.speedX*this.direction
                offsetX += this.speedX*this.direction
                
                for (const a of enemies){
                    a.X -= this.speedX*this.direction
                }
                for (const a of platforms){
                    a.X -= this.speedX*this.direction
                }
                for (const a of shoots){
                    a.X -= this.speedX*this.direction
                }
                for (const a of powerUps){
                    a.X -= this.speedX*this.direction
                } 
            }else {
                    this.X += this.speedX*this.direction
                }
        
            }
                CollideEnemy(this)

            
        }
        this.moveBackward = function(){
            this.direction = -1;
            if (FutureCollide(this,this.speedX*this.direction)==false && player.X >= 0){
                
                if (this.X < canvas.width/2){
                    dinamicsX += this.speedX*this.direction
                    offsetX += this.speedX*this.direction
                    
                for (const a of enemies){
                    a.X -= this.speedX*this.direction
                }
                for (const a of platforms){
                    a.X -= this.speedX*this.direction
                }
                for (const a of shoots){
                    a.X -= this.speedX*this.direction
                }
                for (const a of powerUps){
                    a.X -= this.speedX*this.direction
                }
            } else{
                    this.X += this.speedX*this.direction
                } 
                
            }   
            CollideEnemy(this)     
        }

        this.jump = function(){
            this.speedY += -this.jumpForce;
            PlayFx("jump.mp3");
        }
        this.bend = function(){
            if (player.powerUp == 1){
                indexacion(this,4)
                this.moving= false;
                this.isBend = true;
            } else if (player.powerUp == 2){
                indexacion(this,21)
                this.moving= false;
                this.isBend= true;
            }
        }
        this.graphicStartLevel = function(){
            if (this.powerUp==1){
                indexacion(this,2)
            }else if (this.powerUp==2){
                indexacion(this,19)
            }else{
                indexacion(this,17)
            }
        }
        this.usePowerUp = function(powerUp){
           
            if (powerUp == 12){
                if (this.powerUp ==0){
                    indexacion(this,2)
                    this.powerUp=1;
                    PlayFx("mushroom.mp3");
                }
            } else if (powerUp == 13){
                this.timerInmortal = 150; //star duration
                PlayMusic("star.mp3");
            } else if (powerUp == 14){
                this.powerUp=2;
                PlayFx("mushroom.mp3");
                indexacion(this,19)
            } else if (powerUp == 15) {
                numCoins++
                PlayFx("coin.mp3");
            } else if (powerUp == 16) {
                numCoins++
                PlayFx("coin.mp3");
            } else if (powerUp == 60) {
                NextLevel();
            }
    
                
            
            }
    }
}

export function ResetCoins(coins){
    numCoins = coins;
}