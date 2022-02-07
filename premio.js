class Premio {
    constructor(x,y,grafico){
        numPremio++;
        this.X = x;
        this.Y = y;
        this.offsetX = 3
        if (grafico==12){ //hongo
            this.velocidadX=4
            this.velocidadY=0
            this.movimiento = 1 //0 quieto, 1 normal, 2 saltando, 3 quieto sin caer
        } else if(grafico==13){ //estrella
            this.velocidadX=4
            this.salto= -40
            this.velocidadY=0
            this.movimiento = 2
        } else if (grafico==14){ //flor
            this.velocidadX=0
            this.velocidadY=0
            this.movimiento = 0
        } else if (grafico==15){ //moneda
            this.velocidadX=0
            this.salto= -40
            this.velocidadY=0
            this.movimiento = 2
        } else if (grafico==16){ //moneda quieta
            this.velocidadX=0
            this.salto= 0
            this.velocidadY=0
            this.movimiento = 3
        } else if (grafico==60){ //pasar nivel
            this.velocidadX=0
            this.salto= -40
            this.velocidadY=0
            this.movimiento = 2
        }
            this.direccion=1
            this.premio = grafico
            this.id=numPremio;
            indexacion(this,grafico);

        this.avanzar = function(){
            if (this.movimiento >0){
                if (colisionFutura(this,this.velocidadX*this.direccion)==false && this.X +this.ancho < canvas.width && this.X > 0){
                    this.X += this.velocidadX*this.direccion
                } else {
                    this.direccion = this.direccion*-1
                    this.X += this.velocidadX*this.direccion
                }
            }
        }
        this.retroceder = function(){
            if (this.movimiento >0){
                if (colisionFutura(this,this.velocidadX*this.direccion)==false && (this.X +this.ancho < canvas.width && this.X > 0)){
                    this.X += this.velocidadX*this.direccion
                } else {
                    this.direccion = this.direccion*-1
                    this.X += this.velocidadX*this.direccion
                }
            }
        }
        this.eliminar = function(){
            let buscar = this.id
            let index = premios.findIndex(function(cual){
                return cual.id == buscar
            });
            premios.splice(index, 1);
            
        }
        this.aplicar = function(){
            personaje.aplicarPremio(this.premio);
        }

        this.gravedad = function(){
            if (this.movimiento != 3){
                this.velocidadY += gravedad
                if (this.velocidadY > 20) this.velocidadY=20
                this.Y += this.velocidadY
                if (this.velocidadY > 0) {
                    if (colisionPiso(this)){
                        if (this.movimiento ==2){
                            this.velocidadY = this.salto;
                        }
                    }
                }
            }
            if (this.Y > canvas.height){
                this.eliminar();
            }
            if (colisionTecho(this)==true){
                this.velocidadY = 0
            }
        }
    }
}