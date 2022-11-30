import {indexacion} from './graficos.js'
import {colisionFutura, chocarPersonaje, chocarEnemigo, disparos, personaje, canvas} from './juego.js'

let numDisparo = 0;

export class Disparo {
    constructor(x,y,grafico,quienDisparo,direccion){
        numDisparo++;
        this.id=numDisparo;
        this.direccion = direccion;
        this.quienDisparo = quienDisparo
        this.velocidadX=15
        this.velocidadY=0
        this.offsetX = 0
        this.X=x
        this.Y=y
        indexacion(this,grafico);
        
        this.avanzar = function(){
            if (colisionFutura(this,this.velocidadX*this.direccion)==false && this.X +this.ancho < canvas.width && this.X > 0){
                this.X += this.velocidadX*this.direccion
            } else {
                this.eliminar();
            }
            if (this.quienDisparo == personaje){
                chocarEnemigo(this);
            } else{
                chocarPersonaje(this);
            }
        }
        this.retroceder = function(){
            if (colisionFutura(this,this.velocidadX*this.direccion)==false && (this.X +this.ancho < canvas.width && this.X > 0)){
                this.X += this.velocidadX*this.direccion
            } else {
                this.eliminar()
            }
            if (this.quienDisparo == personaje){
                chocarEnemigo(this);
            } else{
                chocarPersonaje(this);
            }
        }
        this.eliminar = function(){
            let buscar = this.id
            let index = disparos.findIndex(function(cual){
                return cual.id == buscar
            });
            disparos.splice(index, 1);
        }
/*        this.gravedad = function(){
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
        }*/
    }
}