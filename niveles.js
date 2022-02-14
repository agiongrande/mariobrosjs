function cargarNivel(nivel){
    switch (nivel) {
        case 1:
            personaje = new Personaje(60,0,17);
            plataformas.push(new Plataforma(tileX*0,tileY*0,59));
            plataformas.push(new Plataforma(tileX*115,tileY*0,59));
            
            for (let index = -22; index < 20; index++) {
                plataformas.push(new Plataforma(index*tileX,tileY*17,27));
                plataformas.push(new Plataforma(index*tileX,tileY*18,30));
            }            

            
            plataformas.push(new Plataforma(20*tileX,tileY*15,26));
            plataformas.push(new Plataforma(20*tileX,tileY*16,29));
            plataformas.push(new Plataforma(20*tileX,tileY*17,30));
            plataformas.push(new Plataforma(20*tileX,tileY*18,30));

            plataformas.push(new Plataforma(21*tileX,tileY*15,27));
            plataformas.push(new Plataforma(21*tileX,tileY*16,30));
            plataformas.push(new Plataforma(21*tileX,tileY*17,30));
            plataformas.push(new Plataforma(21*tileX,tileY*18,30));

            plataformas.push(new Plataforma(22*tileX,tileY*15,28));
            plataformas.push(new Plataforma(22*tileX,tileY*16,31));
            plataformas.push(new Plataforma(22*tileX,tileY*17,31));
            plataformas.push(new Plataforma(22*tileX,tileY*18,31));

            plataformas.push(new Plataforma(21*tileX,tileY*11,5,1,6,15,0,0));

            
            plataformas.push(new Plataforma(25*tileX,tileY*15,26));
            plataformas.push(new Plataforma(25*tileX,tileY*16,29));
            plataformas.push(new Plataforma(25*tileX,tileY*17,29));
            plataformas.push(new Plataforma(25*tileX,tileY*18,29));

            plataformas.push(new Plataforma(26*tileX,tileY*15,28));
            plataformas.push(new Plataforma(26*tileX,tileY*16,30));
            plataformas.push(new Plataforma(26*tileX,tileY*17,30));
            plataformas.push(new Plataforma(26*tileX,tileY*18,30));

            for (let index = 27; index < 33; index++) {
                plataformas.push(new Plataforma(index*tileX,tileY*16,27));
                plataformas.push(new Plataforma(index*tileX,tileY*17,30));
                plataformas.push(new Plataforma(index*tileX,tileY*18,30));
            }

            plataformas.push(new Plataforma(40*tileX,tileY*12,39,1));
            plataformas.push(new Plataforma(41*tileX,tileY*12,39,1));
            plataformas.push(new Plataforma(42*tileX,tileY*12,39,1));
            plataformas.push(new Plataforma(43*tileX,tileY*12,39,1));
            plataformas.push(new Plataforma(44*tileX,tileY*12,39,1));

            plataformas.push(new Plataforma(29*tileX,tileY*8,39,1));
            plataformas.push(new Plataforma(30*tileX,tileY*8,39,1));
            plataformas.push(new Plataforma(31*tileX,tileY*8,39,1));
            plataformas.push(new Plataforma(32*tileX,tileY*8,39,1));
            plataformas.push(new Plataforma(33*tileX,tileY*8,39,1));
            plataformas.push(new Plataforma(34*tileX,tileY*8,39,1));
            plataformas.push(new Plataforma(35*tileX,tileY*8,39,1));

            
            plataformas.push(new Plataforma(33*tileX,tileY*15,26));
            plataformas.push(new Plataforma(33*tileX,tileY*16,30));
            plataformas.push(new Plataforma(33*tileX,tileY*17,30));
            plataformas.push(new Plataforma(33*tileX,tileY*18,30));

            plataformas.push(new Plataforma(34*tileX,tileY*15,27));
            plataformas.push(new Plataforma(34*tileX,tileY*16,30));
            plataformas.push(new Plataforma(34*tileX,tileY*17,30));
            plataformas.push(new Plataforma(34*tileX,tileY*18,30));

            plataformas.push(new Plataforma(35*tileX,tileY*15,28));
            plataformas.push(new Plataforma(35*tileX,tileY*16,31));
            plataformas.push(new Plataforma(35*tileX,tileY*17,31));
            plataformas.push(new Plataforma(35*tileX,tileY*18,31));

            premios.push(new Premio(tileX*30,tileY*5,16));
            premios.push(new Premio(tileX*31,tileY*5,16));
            premios.push(new Premio(tileX*32,tileY*5,16));
            premios.push(new Premio(tileX*33,tileY*5,16));
            premios.push(new Premio(tileX*34,tileY*5,16));

            enemigos.push(new Enemigo(tileX*34,tileY*10,1,-1,5));

            plataformas.push(new Plataforma(47*tileX,tileY*15,26));
            plataformas.push(new Plataforma(47*tileX,tileY*16,29));
            plataformas.push(new Plataforma(47*tileX,tileY*17,29));
            plataformas.push(new Plataforma(47*tileX,tileY*18,29));

            plataformas.push(new Plataforma(48*tileX,tileY*15,27));
            plataformas.push(new Plataforma(48*tileX,tileY*16,30));
            plataformas.push(new Plataforma(48*tileX,tileY*17,30));
            plataformas.push(new Plataforma(48*tileX,tileY*18,30));

            plataformas.push(new Plataforma(49*tileX,tileY*15,28));
            plataformas.push(new Plataforma(49*tileX,tileY*16,31));
            plataformas.push(new Plataforma(49*tileX,tileY*17,31));
            plataformas.push(new Plataforma(49*tileX,tileY*18,31));

            plataformas.push(new Plataforma(52*tileX,tileY*11,26));
            for (let index = 12; index <= 18; index++) {
                plataformas.push(new Plataforma(52*tileX,tileY*index,29));
            }

            plataformas.push(new Plataforma(53*tileX,tileY*11,27));
            for (let index = 12; index <= 18; index++) {
            plataformas.push(new Plataforma(53*tileX,tileY*index,30));
            }

            plataformas.push(new Plataforma(54*tileX,tileY*11,28));
            for (let index = 12; index <= 18; index++) {
            plataformas.push(new Plataforma(54*tileX,tileY*index,31));
            }


            plataformas.push(new Plataforma(57*tileX,tileY*7,26));
            for (let index = 8; index <= 18; index++) {
                plataformas.push(new Plataforma(57*tileX,tileY*index,29));
            }

            plataformas.push(new Plataforma(58*tileX,tileY*7,27));
            for (let index = 8; index <= 18; index++) {
            plataformas.push(new Plataforma(58*tileX,tileY*index,30));
            }

            plataformas.push(new Plataforma(59*tileX,tileY*7,28));
            for (let index = 8; index <= 18; index++) {
            plataformas.push(new Plataforma(59*tileX,tileY*index,31));
            }

            plataformas.push(new Plataforma(59*tileX,tileY*0,38));
            plataformas.push(new Plataforma(60*tileX,tileY*0,38));
            plataformas.push(new Plataforma(61*tileX,tileY*0,38));
            plataformas.push(new Plataforma(62*tileX,tileY*0,38));

            plataformas.push(new Plataforma(60*tileX,tileY*1,53));
            plataformas.push(new Plataforma(60*tileX,tileY*2,54));


            plataformas.push(new Plataforma(62*tileX,tileY*11,26));
            for (let index = 12; index <= 18; index++) {
                plataformas.push(new Plataforma(62*tileX,tileY*index,29));
            }

            plataformas.push(new Plataforma(63*tileX,tileY*11,27));
            for (let index = 12; index <= 18; index++) {
            plataformas.push(new Plataforma(63*tileX,tileY*index,30));
            }

            plataformas.push(new Plataforma(64*tileX,tileY*11,28));
            for (let index = 12; index <= 18; index++) {
            plataformas.push(new Plataforma(64*tileX,tileY*index,31));
            }

            plataformas.push(new Plataforma(64*tileX,tileY*7,5,1,6,12,0,0));

            plataformas.push(new Plataforma(74*tileX,tileY*15,26));
            for (let index = 16; index <= 18; index++) {
                plataformas.push(new Plataforma(74*tileX,tileY*index,29));
            }

            for (let indexX = 75; indexX <= 95; indexX++) {
                plataformas.push(new Plataforma(indexX*tileX,tileY*15,27));
                for (let index = 16; index <= 18; index++) {
                    plataformas.push(new Plataforma(indexX*tileX,tileY*index,30));
                }
            }
        
            plataformas.push(new Plataforma(87*tileX,tileY*13,55));
            plataformas.push(new Plataforma(88*tileX,tileY*13,56));
            plataformas.push(new Plataforma(89*tileX,tileY*13,57));
            plataformas.push(new Plataforma(90*tileX,tileY*13,58));

            plataformas.push(new Plataforma(96*tileX,tileY*15,28));
            for (let index = 16; index <= 18; index++) {
            plataformas.push(new Plataforma(96*tileX,tileY*index,31));
            }

            plataformas.push(new Plataforma(84*tileX,tileY*9,39,1));
            plataformas.push(new Plataforma(85*tileX,tileY*9,39,1));
            plataformas.push(new Plataforma(86*tileX,tileY*9,39,1));

            plataformas.push(new Plataforma(84*tileX,tileY*5,39,1));
            plataformas.push(new Plataforma(85*tileX,tileY*5,39,1));

            premios.push(new Premio(tileX*87,tileY*2,16));
            premios.push(new Premio(tileX*88,tileY*2,16));
            premios.push(new Premio(tileX*87,tileY*3,16));
            premios.push(new Premio(tileX*88,tileY*3,16));

            plataformas.push(new Plataforma(99*tileX,tileY*10,42,0,0,0,2,10));
            plataformas.push(new Plataforma(100*tileX,tileY*10,43,0,0,0,2,10));
            plataformas.push(new Plataforma(101*tileX,tileY*10,44,0,0,0,2,10));

            plataformas.push(new Plataforma(104*tileX,tileY*7,42,0,0,0,2,5));
            plataformas.push(new Plataforma(105*tileX,tileY*7,43,0,0,0,2,5));
            plataformas.push(new Plataforma(106*tileX,tileY*7,44,0,0,0,2,5));

            plataformas.push(new Plataforma(109*tileX,tileY*9,39,1));
            premios.push(new Premio(tileX*109,tileY*8,60));

            enemigosDinamicos = [
                { "id": 0, "grafico": 0, "tiempo": 110, "X": 85, "Y": 14, "direccion": -1, "velocidad": 5, "timerDisparo":0}, 
                { "id": 1, "grafico": 1, "tiempo": 90, "X": 92, "Y": 14, "direccion": 1, "velocidad": 5, "timerDisparo":0 },
                { "id": 2, "grafico": 0, "tiempo": 110, "X": 60, "Y": 3, "direccion": -1, "velocidad": 5, "timerDisparo":0}, 

            ]

            break;
    
        case 2:
            personaje = new Personaje(60,0,17);
            personaje.X = 60
            personaje.Y = 0;
            plataformas.push(new Plataforma(tileX*0,tileY*0,59));
            plataformas.push(new Plataforma(tileX*180,tileY*0,59));

            for (let index = -22; index <= 20; index++) {
                plataformas.push(new Plataforma(index*tileX,tileY*17,49));
            }            
            plataformas.push(new Plataforma(21*tileX,tileY*17,50));

            plataformas.push(new Plataforma(24*tileX,tileY*11,48,0,0,0,2,8));
            plataformas.push(new Plataforma(25*tileX,tileY*11,49,0,0,0,2,8));
            plataformas.push(new Plataforma(26*tileX,tileY*11,50,0,0,0,2,8));

            plataformas.push(new Plataforma(29*tileX,tileY*9,48,0,0,0,1,20));
            plataformas.push(new Plataforma(30*tileX,tileY*9,49,0,0,0,1,20));
            plataformas.push(new Plataforma(31*tileX,tileY*9,50,0,0,0,1,20));

            plataformas.push(new Plataforma(34*tileX,tileY*3,48,0,0,0,2,3));
            plataformas.push(new Plataforma(35*tileX,tileY*3,49,0,0,0,2,3));
            plataformas.push(new Plataforma(36*tileX,tileY*3,50,0,0,0,2,3));

            plataformas.push(new Plataforma(50*tileX,tileY*8,48,0,0,0,2,3));
            plataformas.push(new Plataforma(51*tileX,tileY*8,49,0,0,0,2,3));
            plataformas.push(new Plataforma(52*tileX,tileY*8,49,0,0,0,2,3));
            plataformas.push(new Plataforma(53*tileX,tileY*8,49,0,0,0,2,3));
            plataformas.push(new Plataforma(54*tileX,tileY*8,50,0,0,0,2,3));

            plataformas.push(new Plataforma(58*tileX,tileY*3,48,0,0,0,2,3));
            plataformas.push(new Plataforma(59*tileX,tileY*3,49,0,0,0,2,3));
            plataformas.push(new Plataforma(60*tileX,tileY*3,49,0,0,0,2,3));
            plataformas.push(new Plataforma(61*tileX,tileY*3,50,0,0,0,2,3));

            plataformas.push(new Plataforma(58*tileX,tileY*10,48,0,0,0,2,6));
            plataformas.push(new Plataforma(59*tileX,tileY*10,49,0,0,0,2,6));
            plataformas.push(new Plataforma(60*tileX,tileY*10,49,0,0,0,2,6));
            plataformas.push(new Plataforma(61*tileX,tileY*10,50,0,0,0,2,6));

            plataformas.push(new Plataforma(83*tileX,tileY*3,38));
            plataformas.push(new Plataforma(83*tileX,tileY*4,38));
            plataformas.push(new Plataforma(83*tileX,tileY*5,38));
            plataformas.push(new Plataforma(83*tileX,tileY*6,38));

            plataformas.push(new Plataforma(81*tileX,tileY*4,55));
            plataformas.push(new Plataforma(82*tileX,tileY*4,56));

            plataformas.push(new Plataforma(78*tileX,tileY*10,48,0,0,0,2,6));
            plataformas.push(new Plataforma(79*tileX,tileY*10,49,0,0,0,2,6));
            plataformas.push(new Plataforma(80*tileX,tileY*10,49,0,0,0,2,6));
            plataformas.push(new Plataforma(81*tileX,tileY*10,50,0,0,0,2,6));

            plataformas.push(new Plataforma(88*tileX,tileY*7,48,0,0,0,2,15));
            plataformas.push(new Plataforma(89*tileX,tileY*7,49,0,0,0,2,15));
            plataformas.push(new Plataforma(90*tileX,tileY*7,49,0,0,0,2,15));
            plataformas.push(new Plataforma(91*tileX,tileY*7,50,0,0,0,2,15));

            plataformas.push(new Plataforma(95*tileX,tileY*8,48,0,0,0,2,13));
            plataformas.push(new Plataforma(96*tileX,tileY*8,49,0,0,0,2,13));
            plataformas.push(new Plataforma(97*tileX,tileY*8,49,0,0,0,2,13));
            plataformas.push(new Plataforma(98*tileX,tileY*8,50,0,0,0,2,13));

            plataformas.push(new Plataforma(103*tileX,tileY*3,38));
            plataformas.push(new Plataforma(103*tileX,tileY*4,38));
            plataformas.push(new Plataforma(103*tileX,tileY*5,38));
            plataformas.push(new Plataforma(103*tileX,tileY*6,38));

            plataformas.push(new Plataforma(101*tileX,tileY*4,55));
            plataformas.push(new Plataforma(102*tileX,tileY*4,56));

            plataformas.push(new Plataforma(103*tileX,tileY*10,48,0,0,0,2,14));
            plataformas.push(new Plataforma(104*tileX,tileY*10,49,0,0,0,2,14));
            plataformas.push(new Plataforma(105*tileX,tileY*10,49,0,0,0,2,14));
            plataformas.push(new Plataforma(106*tileX,tileY*10,50,0,0,0,2,14));

            plataformas.push(new Plataforma(110*tileX,tileY*14,48,0,0,0,1,10));
            plataformas.push(new Plataforma(111*tileX,tileY*14,49,0,0,0,1,10));
            plataformas.push(new Plataforma(112*tileX,tileY*14,49,0,0,0,1,10));
            plataformas.push(new Plataforma(113*tileX,tileY*14,49,0,0,0,1,10));
            plataformas.push(new Plataforma(114*tileX,tileY*14,50,0,0,0,1,10));

            plataformas.push(new Plataforma(116*tileX,tileY*10,48,0,0,0,1,9));
            plataformas.push(new Plataforma(117*tileX,tileY*10,49,0,0,0,1,9));
            plataformas.push(new Plataforma(118*tileX,tileY*10,49,0,0,0,1,9));
            plataformas.push(new Plataforma(119*tileX,tileY*10,49,0,0,0,1,9));
            plataformas.push(new Plataforma(120*tileX,tileY*10,50,0,0,0,1,9));

            plataformas.push(new Plataforma(122*tileX,tileY*6,48,0,0,0,1,10));
            plataformas.push(new Plataforma(123*tileX,tileY*6,49,0,0,0,1,10));
            plataformas.push(new Plataforma(124*tileX,tileY*6,49,0,0,0,1,10));
            plataformas.push(new Plataforma(125*tileX,tileY*6,49,0,0,0,1,10));
            plataformas.push(new Plataforma(126*tileX,tileY*6,50,0,0,0,1,10));


            plataformas.push(new Plataforma(128*tileX,tileY*2,48,0,0,0,1,11));
            plataformas.push(new Plataforma(129*tileX,tileY*2,49,0,0,0,1,11));
            plataformas.push(new Plataforma(130*tileX,tileY*2,49,0,0,0,1,11));
            plataformas.push(new Plataforma(131*tileX,tileY*2,50,0,0,0,1,11));

            plataformas.push(new Plataforma(133*tileX,tileY*5,48,0,0,0,1,8));
            plataformas.push(new Plataforma(134*tileX,tileY*5,49,0,0,0,1,8));
            plataformas.push(new Plataforma(135*tileX,tileY*5,49,0,0,0,1,8));
            plataformas.push(new Plataforma(136*tileX,tileY*5,50,0,0,0,1,8));

            plataformas.push(new Plataforma(138*tileX,tileY*8,48,0,0,0,1,10));
            plataformas.push(new Plataforma(139*tileX,tileY*8,49,0,0,0,1,10));
            plataformas.push(new Plataforma(140*tileX,tileY*8,49,0,0,0,1,10));
            plataformas.push(new Plataforma(141*tileX,tileY*8,50,0,0,0,1,10));

            plataformas.push(new Plataforma(143*tileX,tileY*12,48,0,0,0,1,11));
            plataformas.push(new Plataforma(144*tileX,tileY*12,49,0,0,0,1,11));
            plataformas.push(new Plataforma(145*tileX,tileY*12,49,0,0,0,1,11));
            plataformas.push(new Plataforma(146*tileX,tileY*12,50,0,0,0,1,11));

            plataformas.push(new Plataforma(160*tileX,tileY*15,48,0,0,0,2,2));
            plataformas.push(new Plataforma(161*tileX,tileY*15,50,0,0,0,2,2));

            plataformas.push(new Plataforma(164*tileX,tileY*10,48,0,0,0,2,10));
            plataformas.push(new Plataforma(165*tileX,tileY*10,50,0,0,0,2,10));

            plataformas.push(new Plataforma(168*tileX,tileY*6,48,0,0,0,0,0));
            plataformas.push(new Plataforma(169*tileX,tileY*6,50,0,0,0,0,0));

            premios.push(new Premio(tileX*169,tileY*5,60));

            plataformas.push(new Plataforma(60*tileX,tileY*1,5,1,6,12,0,0));
            enemigosDinamicos = [
                { "id": 0, "grafico": 61, "tiempo": 400, "X": 80, "Y": 4, "direccion": -1, "velocidad": 5, "timerDisparo":0,"antiGravedad":1}, 
                { "id": 1, "grafico": 61, "tiempo": 700, "X": 100, "Y": 4, "direccion": -1, "velocidad": 5, "timerDisparo":0,"antiGravedad":1 },
              //  { "id": 2, "grafico": 61, "tiempo": 500, "X": 180, "Y": 9, "direccion": -1, "velocidad": 5, "timerDisparo":0,"antiGravedad":1 }
            ]
            enemigos.push(new Enemigo(tileX*40,tileY*7,61,-1,5,0,1));
            enemigos.push(new Enemigo(tileX*50,tileY*12,61,-1,5,0,1));
            break;

            case 3:
                personaje = new Personaje(60,0,17);
                personaje.X = 60
                personaje.Y = 0;
                plataformas.push(new Plataforma(tileX*0,tileY*0,59));
                plataformas.push(new Plataforma(tileX*120,tileY*0,59));
    
                for (let index = -22; index <= 20; index++) {
                    plataformas.push(new Plataforma(index*tileX,tileY*17,33));
                    plataformas.push(new Plataforma(index*tileX,tileY*18,36));
                }
                plataformas.push(new Plataforma(21*tileX,tileY*17,34));
                plataformas.push(new Plataforma(21*tileX,tileY*18,37));

                plataformas.push(new Plataforma(18*tileX,tileY*12,5,1,6,12,0,0));
    
                plataformas.push(new Plataforma(25*tileX,tileY*15,32));
                for (let indexY = 16; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(25*tileX,tileY*indexY,35));
                }

                for (let indexX = 26; indexX <= 27; indexX++) {
                    plataformas.push(new Plataforma(indexX*tileX,tileY*15,33));
                    for (let indexY = 16; indexY <= 18; indexY++) {
                        plataformas.push(new Plataforma(indexX*tileX,tileY*indexY,36));
                    }
                }



                plataformas.push(new Plataforma(28*tileX,tileY*15,34));
                for (let indexY = 16; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(28*tileX,tileY*indexY,37));
                }
                
                enemigos.push(new Enemigo(tileX*27,tileY*14,23,-1,0,3,0));
                premios.push(new Premio(tileX*27,tileY*5,16));

                plataformas.push(new Plataforma(31*tileX,tileY*13,32));
                for (let indexY = 14; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(31*tileX,tileY*indexY,35));
                }

                for (let indexX = 32; indexX <= 33; indexX++) {
                    plataformas.push(new Plataforma(indexX*tileX,tileY*13,33));
                    for (let indexY = 14; indexY <= 18; indexY++) {
                        plataformas.push(new Plataforma(indexX*tileX,tileY*indexY,36));
                    }
                }

                plataformas.push(new Plataforma(34*tileX,tileY*13,34));
                for (let indexY = 14; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(34*tileX,tileY*indexY,37));
                }

                enemigos.push(new Enemigo(tileX*33,tileY*12,23,-1,0,3,0));
                premios.push(new Premio(tileX*33,tileY*3,16));

                plataformas.push(new Plataforma(37*tileX,tileY*11,32));
                for (let indexY = 12; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(37*tileX,tileY*indexY,35));
                }

                for (let indexX = 38; indexX <= 39; indexX++) {
                    plataformas.push(new Plataforma(indexX*tileX,tileY*11,33));
                    for (let indexY = 12; indexY <= 18; indexY++) {
                        plataformas.push(new Plataforma(indexX*tileX,tileY*indexY,36));
                    }
                }

                plataformas.push(new Plataforma(40*tileX,tileY*11,34));
                for (let indexY = 12; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(40*tileX,tileY*indexY,37));
                }

                enemigos.push(new Enemigo(tileX*39,tileY*10,23,-1,0,3,0));
                premios.push(new Premio(tileX*39,tileY*1,16));

                plataformas.push(new Plataforma(43*tileX,tileY*9,32));
                for (let indexY = 10; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(43*tileX,tileY*indexY,35));
                }

                for (let indexX = 44; indexX <= 45; indexX++) {
                    plataformas.push(new Plataforma(indexX*tileX,tileY*9,33));
                    for (let indexY = 10; indexY <= 18; indexY++) {
                        plataformas.push(new Plataforma(indexX*tileX,tileY*indexY,36));
                    }
                }

                plataformas.push(new Plataforma(46*tileX,tileY*9,34));
                for (let indexY = 10; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(46*tileX,tileY*indexY,37));
                }

                enemigos.push(new Enemigo(tileX*45,tileY*8,23,-1,0,3,0));

                plataformas.push(new Plataforma(49*tileX,tileY*7,32));
                for (let indexY = 8; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(49*tileX,tileY*indexY,35));
                }

                for (let indexX = 50; indexX <= 51; indexX++) {
                    plataformas.push(new Plataforma(indexX*tileX,tileY*7,33));
                    for (let indexY = 8; indexY <= 18; indexY++) {
                        plataformas.push(new Plataforma(indexX*tileX,tileY*indexY,36));
                    }
                }

                plataformas.push(new Plataforma(52*tileX,tileY*7,34));
                for (let indexY = 8; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(52*tileX,tileY*indexY,37));
                }

                enemigos.push(new Enemigo(tileX*51,tileY*6,23,-1,0,3,0));


                plataformas.push(new Plataforma(56*tileX,tileY*5,42,0,0,0,2,10));
                plataformas.push(new Plataforma(57*tileX,tileY*5,43,0,0,0,2,10));
                plataformas.push(new Plataforma(58*tileX,tileY*5,44,0,0,0,2,10));


                plataformas.push(new Plataforma(68*tileX,tileY*3,42,0,0,0,2,7));
                plataformas.push(new Plataforma(69*tileX,tileY*3,43,0,0,0,2,7));
                plataformas.push(new Plataforma(70*tileX,tileY*3,44,0,0,0,2,7));

                enemigos.push(new Enemigo(tileX*69,tileY*2,23,-1,0,3,0));

                plataformas.push(new Plataforma(68*tileX,tileY*10,42,0,0,0,2,7));
                plataformas.push(new Plataforma(69*tileX,tileY*10,43,0,0,0,2,7));
                plataformas.push(new Plataforma(70*tileX,tileY*10,44,0,0,0,2,7));

                enemigos.push(new Enemigo(tileX*69,tileY*9,23,-1,0,3,0));

                plataformas.push(new Plataforma(74*tileX,tileY*7,42,0,0,0,2,13));
                plataformas.push(new Plataforma(75*tileX,tileY*7,43,0,0,0,2,13));
                plataformas.push(new Plataforma(76*tileX,tileY*7,43,0,0,0,2,13));
                plataformas.push(new Plataforma(77*tileX,tileY*7,44,0,0,0,2,13));

                enemigos.push(new Enemigo(tileX*75,tileY*6,23,-1,0,3,0));

                plataformas.push(new Plataforma(80*tileX,tileY*11,32));
                for (let indexY = 12; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(80*tileX,tileY*indexY,35));
                }

                for (let indexX = 81; indexX <= 85; indexX++) {
                    plataformas.push(new Plataforma(indexX*tileX,tileY*11,33));
                    for (let indexY = 12; indexY <= 18; indexY++) {
                        plataformas.push(new Plataforma(indexX*tileX,tileY*indexY,36));
                    }
                }

                plataformas.push(new Plataforma(86*tileX,tileY*11,34));
                for (let indexY = 12; indexY <= 16; indexY++) {
                    plataformas.push(new Plataforma(86*tileX,tileY*indexY,37));
                }

                plataformas.push(new Plataforma(86*tileX,tileY*13,36));
                plataformas.push(new Plataforma(86*tileX,tileY*14,36));

                plataformas.push(new Plataforma(86*tileX,tileY*17,36));
                plataformas.push(new Plataforma(86*tileX,tileY*18,36));

                plataformas.push(new Plataforma(87*tileX,tileY*13,57));
                plataformas.push(new Plataforma(88*tileX,tileY*13,58));

                enemigos.push(new Enemigo(tileX*87,tileY*14,23,1,0,3,0));

                for (let indexX = 87; indexX <= 99; indexX++) {
                    plataformas.push(new Plataforma(indexX*tileX,tileY*17,33));
                        plataformas.push(new Plataforma(indexX*tileX,tileY*18,36));
                }

                plataformas.push(new Plataforma(100*tileX,tileY*11,32));
                for (let indexY = 12; indexY <= 16; indexY++) {
                    plataformas.push(new Plataforma(100*tileX,tileY*indexY,35));
                }


                plataformas.push(new Plataforma(100*tileX,tileY*17,36));
                plataformas.push(new Plataforma(100*tileX,tileY*18,36));

                enemigos.push(new Enemigo(tileX*100,tileY*10,23,-1,0,3,0));

                for (let indexX = 101; indexX <= 109; indexX++) {
                    plataformas.push(new Plataforma(indexX*tileX,tileY*11,33));
                    for (let indexY = 12; indexY <= 18; indexY++) {
                        plataformas.push(new Plataforma(indexX*tileX,tileY*indexY,36));
                    }
                }

                plataformas.push(new Plataforma(110*tileX,tileY*11,34));
                for (let indexY = 12; indexY <= 18; indexY++) {
                    plataformas.push(new Plataforma(110*tileX,tileY*indexY,37));
                }

                plataformas.push(new Plataforma(108*tileX,tileY*7,5,1,6,60,0,0));

                enemigosDinamicos = [
                    { "id": 0, "grafico": 25, "tiempo": 400, "X": 89, "Y": 13, "direccion": -1, "velocidad": 10, "timerDisparo":0,"antiGravedad":0}, 
                //   { "id": 1, "grafico": 25, "tiempo": 450, "X": 97, "Y": 11, "direccion": -1, "velocidad": 10, "timerDisparo":0,"antiGravedad":0 },
                //  { "id": 2, "grafico": 61, "tiempo": 500, "X": 180, "Y": 9, "direccion": -1, "velocidad": 5, "timerDisparo":0,"antiGravedad":1 }
                ]

                }
}