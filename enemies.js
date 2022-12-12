import {indexacion} from './graphics.js'
import {PlayFx, FutureCollide, shoots, CollideEnemy, CollideFloor, player, gravity, canvas, enemies} from './game.js'
import {Shoot} from './shoot.js'

let numEnemy = 0;

export class Enemy {
    constructor(x,y,graphic,direction,speedX,timerShoot,noGravity, spawnTime){
        numEnemy++;
        this.id=numEnemy;
        this.direction = direction;
        this.offsetX=3;
        this.timerShoot = timerShoot;
        this.speedX=speedX
        this.speedY=0
        this.noGravity=noGravity
        this.X=x
        this.Y=y
        this.graphic = graphic
        indexacion(this,graphic);
        
        this.moveForward = function(){
            if (FutureCollide(this,this.speedX*this.direction)==false){
                this.X += this.speedX*this.direction
            } else {
                this.direction = this.direction*-1
                this.X += this.speedX*this.direction
            }
            CollideEnemy(player);
        }
        this.moveBackward = function(){
            if (FutureCollide(this,this.speedX*this.direction)==false){
                this.X += this.speedX*this.direction
            } else {
                this.direction = this.direction*-1
                this.X += this.speedX*this.direction
            }
            CollideEnemy(player);
        }
        this.eliminate = function(){
            let search = this.id
            let index = enemies.findIndex(function(number){
                return number.id == search
            });
            enemies.splice(index, 1);
        }
        this.gravity = function(){
            if (this.noGravity != 1){
            this.speedY += gravity
            if (this.speedY > 20) this.speedY=20
            this.Y += this.speedY
            if (this.speedY > 0) {
                if (CollideFloor(this)){
                    this.speedY = 0;
                }
            }
            if (this.Y > canvas.height){
                this.eliminate();
            }
        }}
        this.shoot = function(){
            PlayFx("fireball.mp3");
            shoots.push(new Shoot(this.X,this.Y+10,22,this,this.direction)); //fire
        }
    }
}