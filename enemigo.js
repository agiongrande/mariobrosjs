import {indexacion} from 'https://agiongrande.github.io/mariobrosjs/graficos.js'
import {PlayFx, colisionFutura, disparos, chocarEnemigo, colisionPiso, personaje, gravedad, canvas, enemigos} from 'https://agiongrande.github.io/mariobrosjs/juego.js'
import {Disparo} from 'https://agiongrande.github.io/mariobrosjs/disparo.js'

let numEnemigo = 0;

export class Enemigo {
    constructor(x,y,grafico,direccion,velX,timerDisparo,antiGravedad, spawnTime){
        numEnemigo++;
        this.id=numEnemigo;
        this.direccion = direccion;
        this.offsetX=3;
        this.timerDisparo = timerDisparo;
        this.velocidadX=velX
        this.velocidadY=0
        this.antiGravedad=antiGravedad
        this.X=x
        this.Y=y
        this.grafico = grafico
        indexacion(this,grafico);
        
        this.avanzar = function(){
            if (colisionFutura(this,this.velocidadX*this.direccion)==false){
                this.X += this.velocidadX*this.direccion
            } else {
                this.direccion = this.direccion*-1
                this.X += this.velocidadX*this.direccion
            }
            chocarEnemigo(personaje);
        }
        this.retroceder = function(){
            if (colisionFutura(this,this.velocidadX*this.direccion)==false){
                this.X += this.velocidadX*this.direccion
            } else {
                this.direccion = this.direccion*-1
                this.X += this.velocidadX*this.direccion
            }
            chocarEnemigo(personaje);
        }
        this.eliminar = function(){
            let buscar = this.id
            let index = enemigos.findIndex(function(cual){
                return cual.id == buscar
            });
            enemigos.splice(index, 1);
        }
        this.gravedad = function(){
            if (this.antiGravedad != 1){
            this.velocidadY += gravedad
            if (this.velocidadY > 20) this.velocidadY=20
            this.Y += this.velocidadY
            if (this.velocidadY > 0) {
                if (colisionPiso(this)){
                    this.velocidadY = 0;
                }
            }
            if (this.Y > canvas.height){
                this.eliminar();
            }
        }}
        this.disparar = function(){
            PlayFx("fireball.mp3");
            disparos.push(new Disparo(this.X,this.Y+10,22,this,this.direccion)); //fuego
        }
    }
}