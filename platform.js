import {indexacion} from './graphics.js';
import {PlayFx, powerUps, platforms} from './game.js';
import {PowerUp} from './powerUps.js';

let numPlatform = 0;
export class Platform {
    constructor(x,y,graphic,canBreak,replace,powerUp,movement,distance){
        numPlatform++;
        this.canBreak=canBreak;
        this.powerUp = powerUp;
        this.X = x;
        this.replace = replace;
        this.Y = y
        this.id=numPlatform;
        this.movement=movement //0 no se mueve, 1 horizontal, 2 vertical
        this.distance=distance
        this.counter = -distance;
        indexacion(this,graphic);

        this.moveX = function(){
            
            this.counter++
            this.X += Math.sin(this.counter * Math.PI / 50) *this.distance
        }

        this.moveY = function(){
            this.counter++
            this.Y += Math.sin(this.counter * Math.PI / 50) *this.distance
        }

        this.eliminate = function(){
            if (this.powerUp >0){
                powerUps.push(new PowerUp(this.X+4,this.Y-24,this.powerUp));
            }
            let search = this.id
            let index = platforms.findIndex(function(num){
                return num.id == search
            });
            platforms.splice(index, 1);
            if (this.replace >0){
                platforms.push(new Platform(this.X,this.Y,replace,0));
                PlayFx("bump.mp3");
            } else{
                PlayFx("break_brick_block.mp3");
            }
        }

    }
}