import {indexacion} from './graphics.js'
import {FutureCollide, CollideFloor, player, canvas, CollideRoof, gravity, powerUps} from './game.js'

let numPowerUp = 0;
export class PowerUp {
    constructor(x,y,graphic){
        numPowerUp++;
        this.X = x;
        this.Y = y;
        this.offsetX = 3
        if (graphic==12){ //hongo
            this.speedX=4
            this.speedY=0
            this.movement = 1 //0 quieto, 1 normal, 2 saltando, 3 quieto sin caer
        } else if(graphic==13){ //estrella
            this.speedX=4
            this.jump = -40
            this.speedY=0
            this.movement = 2
        } else if (graphic==14){ //flor
            this.speedX=0
            this.speedY=0
            this.movement = 0
        } else if (graphic==15){ //moneda
            this.speedX=0
            this.jump = -40
            this.speedY=0
            this.movement = 2
        } else if (graphic==16){ //moneda quieta
            this.speedX=0
            this.jump = 0
            this.speedY=0
            this.movement = 3
        } else if (graphic==60){ //pasar nivel
            this.speedX=0
            this.jump= -40
            this.speedY=0
            this.movement = 2
        }
            this.direction=1
            this.powerUp = graphic
            this.id=numPowerUp;
            indexacion(this,graphic);

        this.moveForward = function(){
            if (this.movement >0){
                if (FutureCollide(this,this.speedX*this.direction)==false && this.X +this.width < canvas.width && this.X > 0){
                    this.X += this.speedX*this.direction
                } else {
                    this.direction = this.direction*-1
                    this.X += this.speedX*this.direction
                }
            }
        }
        this.moveBackward = function(){
            if (this.movement >0){
                if (FutureCollide(this,this.speedX*this.direction)==false && (this.X +this.width < canvas.width && this.X > 0)){
                    this.X += this.speedX*this.direction
                } else {
                    this.direction = this.direction*-1
                    this.X += this.speedX*this.direction
                }
            }
        }
        this.eliminate = function(){
            let search = this.id
            let index = powerUps.findIndex(function(num){
                return num.id == search
            });
            powerUps.splice(index, 1);
            
        }
        this.use = function(){
            player.usePowerUp(this.powerUp);
        }

        this.gravity = function(){
            if (this.movement != 3){
                this.speedY += gravity
                if (this.speedY > 20) this.speedY=20
                this.Y += this.speedY
                if (this.speedY > 0) {
                    if (CollideFloor(this)){
                        if (this.movement ==2){
                            this.speedY = this.jump;
                        }
                    }
                }
            }
            if (this.Y > canvas.height){
                this.eliminate();
            }
            if (CollideRoof(this)==true){
                this.speedY = 0
            }
        }
    }
}