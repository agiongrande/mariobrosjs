import {indexacion} from '/graficos.js'
import {PlayFx,premios, plataformas} from '/juego.js'
import {Premio} from '/premio.js'

let numPlataforma = 0;
export class Plataforma {
    constructor(x,y,grafico,romper,reemplazar,premio,movimiento,distancia){
        numPlataforma++;
        this.romper=romper;
        this.premio = premio;
        this.X = x;
        this.reemplazar = reemplazar;
        this.Y = y
        this.id=numPlataforma;
        this.movimiento=movimiento //0 no se mueve, 1 horizontal, 2 vertical
        this.distancia=distancia
        this.contador = -distancia;
        indexacion(this,grafico);

        this.moverX = function(){
            
            this.contador++
            this.X += Math.sin(this.contador * Math.PI / 50) *this.distancia
        }

        this.moverY = function(){
            this.contador++
            this.Y += Math.sin(this.contador * Math.PI / 50) *this.distancia
        }

        this.eliminar = function(){
            if (this.premio >0){
                premios.push(new Premio(this.X+4,this.Y-24,this.premio));
            }
            let buscar = this.id
            let index = plataformas.findIndex(function(cual){
                return cual.id == buscar
            });
            plataformas.splice(index, 1);
            if (this.reemplazar >0){
                plataformas.push(new Plataforma(this.X,this.Y,reemplazar,0));
                PlayFx("bump.mp3");
            } else{
                PlayFx("break_brick_block.mp3");
            }
        }

    }
}