import {indexacion} from './graphics.js'
import {FutureCollide, CollidePlayer, CollideEnemy, shoots, player, canvas} from './game.js'

let numShoot = 0;

export class Shoot {
    constructor(x,y,graphic,whoShoot,direction){
        numShoot++;
        this.id=numShoot;
        this.direction = direction;
        this.whoShoot = whoShoot
        this.speedX=15
        this.speedY=0
        this.offsetX = 0
        this.X=x
        this.Y=y
        indexacion(this,graphic);
        
        this.moveForward = function(){
            if (FutureCollide(this,this.speedX*this.direction)==false && this.X +this.width < canvas.width && this.X > 0){
                this.X += this.speedX*this.direction
            } else {
                this.eliminate();
            }
            if (this.whoShoot == player){
                CollideEnemy(this);
            } else{
                CollidePlayer(this);
            }
        }
        this.moveBackward = function(){
            if (FutureCollide(this,this.speedX*this.direction)==false && (this.X +this.width < canvas.width && this.X > 0)){
                this.X += this.speedX*this.direction
            } else {
                this.eliminate()
            }
            if (this.whoShoot == player){
                CollideEnemy(this);
            } else{
                CollidePlayer(this);
            }
        }
        this.eliminate = function(){
            let search = this.id
            let index = shoots.findIndex(function(who){
                return who.id == search
            });
            shoots.splice(index, 1);
        }

    }
}