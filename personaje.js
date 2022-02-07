class Personaje {
    constructor(x,y,grafico){
        this.moviendo = false;
        this.agachado= false;
        this.poder = 0; //0 chico / 1 grande (hongo) / 2 fuego (flor)
        this.timerInmortal = 0; //estrella
        this.timerDisparo = 0;
        this.offsetX = 3
        this.saltando = 0;
        this.timerRebote = 0;
        this.salto = 40;
        this.X=x
        this.Y=y
        this.direccion = 1;
        indexacion(this,grafico);
        this.velocidadX=10
        this.velocidadY=0
        this.gravedad = function(){
            this.velocidadY += gravedad
            if (this.velocidadY > 20) this.velocidadY=20
            this.Y += this.velocidadY
            if (this.velocidadY > 0) {
                if (colisionPiso(this)){
                    if (this.saltando>0){
                    this.saltando = 0;
                    if (personaje.agachado==0){
                        if (personaje.poder ==0){
                            indexacion(personaje,17);
                        }else if (personaje.poder ==1){
                            indexacion(personaje,2);
                        }else if (personaje.poder ==2){
                            indexacion(personaje,19);
                        }
                }
                    }
                    this.velocidadY = 0;
                }
            } else {
                if (colisionTecho(personaje)==true){
                    this.velocidadY = 0
                }        
        
            }
            if (personaje.Y +personaje.alto > canvas.height){
                perder();
            }
        }
        this.avanzar = function(){
            
            this.direccion = 1;
            if (colisionFutura(this,this.velocidadX*this.direccion)==false){
                
            if (this.X > canvas.width/2){
                dinamicosX +=this.velocidadX*this.direccion
                for (const a of enemigos){
                    a.X -= this.velocidadX*this.direccion
                }
                for (const a of plataformas){
                    a.X -= this.velocidadX*this.direccion
                }
                for (const a of disparos){
                    a.X -= this.velocidadX*this.direccion
                }
                for (const a of premios){
                    a.X -= this.velocidadX*this.direccion
                } 
            }else {
                    this.X += this.velocidadX*this.direccion
                }
        
            }
                chocarEnemigo(this)

            
        }
        this.retroceder = function(){
            this.direccion = -1;
            if (colisionFutura(this,this.velocidadX*this.direccion)==false && personaje.X >= 0){
                
                if (this.X < canvas.width/2){
                    dinamicosX += this.velocidadX*this.direccion
                    
                for (const a of enemigos){
                    a.X -= this.velocidadX*this.direccion
                }
                for (const a of plataformas){
                    a.X -= this.velocidadX*this.direccion
                }
                for (const a of disparos){
                    a.X -= this.velocidadX*this.direccion
                }
                for (const a of premios){
                    a.X -= this.velocidadX*this.direccion
                }
            } else{
                    this.X += this.velocidadX*this.direccion
                } 
                
            }   
            chocarEnemigo(this)     
        }

        this.saltar = function(){
            this.velocidadY += -this.salto;
        }
        this.agachar = function(){
            if (personaje.poder == 1){
                indexacion(this,4)
                this.moviendo= false;
                this.agachado = true;
            } else if (personaje.poder == 2){
                indexacion(this,21)
                this.moviendo= false;
                this.agachado = true;
            }
        }
        this.aplicarPremio = function(cualPoder){
           
            if (cualPoder == 12){
                if (this.poder ==0){
                    indexacion(this,2)
                    this.poder=1;
                }
            } else if (cualPoder == 13){
                this.timerInmortal = 150; //estrella duracion
            } else if (cualPoder == 14){
                this.poder=2;
                indexacion(this,19)
            } else if (cualPoder == 15) {
                cantMonedas++
            } else if (cualPoder == 16) {
                cantMonedas++
        } else if (cualPoder == 60) {
            numeroNivel++
                empezarNivel()
            }
    
                
            
            }
    }
}