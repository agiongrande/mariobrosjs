import {platforms,player, tileX, tileY, powerUps, enemies} from './game.js'
import {Platform} from './platform.js'
import {PowerUp} from './powerUps.js'
import {Enemy} from './enemies.js'

export let DinamicEnemies = []


export function LoadLevel(level){
    switch (level) {
        case 1:
            
            platforms.push(new Platform(tileX*0,tileY*0,59));
            platforms.push(new Platform(tileX*115,tileY*0,59));
            
            for (let index = -22; index < 20; index++) {
                platforms.push(new Platform(index*tileX,tileY*17,27));
                platforms.push(new Platform(index*tileX,tileY*18,30));
            }            

            
            platforms.push(new Platform(20*tileX,tileY*15,26));
            platforms.push(new Platform(20*tileX,tileY*16,29));
            platforms.push(new Platform(20*tileX,tileY*17,30));
            platforms.push(new Platform(20*tileX,tileY*18,30));

            platforms.push(new Platform(21*tileX,tileY*15,27));
            platforms.push(new Platform(21*tileX,tileY*16,30));
            platforms.push(new Platform(21*tileX,tileY*17,30));
            platforms.push(new Platform(21*tileX,tileY*18,30));

            platforms.push(new Platform(22*tileX,tileY*15,28));
            platforms.push(new Platform(22*tileX,tileY*16,31));
            platforms.push(new Platform(22*tileX,tileY*17,31));
            platforms.push(new Platform(22*tileX,tileY*18,31));

            platforms.push(new Platform(21*tileX,tileY*11,5,1,6,15,0,0));
            
            platforms.push(new Platform(25*tileX,tileY*15,26));
            platforms.push(new Platform(25*tileX,tileY*16,29));
            platforms.push(new Platform(25*tileX,tileY*17,29));
            platforms.push(new Platform(25*tileX,tileY*18,29));

            platforms.push(new Platform(26*tileX,tileY*15,28));
            platforms.push(new Platform(26*tileX,tileY*16,30));
            platforms.push(new Platform(26*tileX,tileY*17,30));
            platforms.push(new Platform(26*tileX,tileY*18,30));

            for (let index = 27; index < 33; index++) {
                platforms.push(new Platform(index*tileX,tileY*16,27));
                platforms.push(new Platform(index*tileX,tileY*17,30));
                platforms.push(new Platform(index*tileX,tileY*18,30));
            }

            platforms.push(new Platform(40*tileX,tileY*12,39,1));
            platforms.push(new Platform(41*tileX,tileY*12,39,1));
            platforms.push(new Platform(42*tileX,tileY*12,39,1));
            platforms.push(new Platform(43*tileX,tileY*12,39,1));
            platforms.push(new Platform(44*tileX,tileY*12,39,1));

            platforms.push(new Platform(29*tileX,tileY*8,39,1));
            platforms.push(new Platform(30*tileX,tileY*8,39,1));
            platforms.push(new Platform(31*tileX,tileY*8,39,1));
            platforms.push(new Platform(32*tileX,tileY*8,39,1));
            platforms.push(new Platform(33*tileX,tileY*8,39,1));
            platforms.push(new Platform(34*tileX,tileY*8,39,1));
            platforms.push(new Platform(35*tileX,tileY*8,39,1));

            
            platforms.push(new Platform(33*tileX,tileY*15,26));
            platforms.push(new Platform(33*tileX,tileY*16,30));
            platforms.push(new Platform(33*tileX,tileY*17,30));
            platforms.push(new Platform(33*tileX,tileY*18,30));

            platforms.push(new Platform(34*tileX,tileY*15,27));
            platforms.push(new Platform(34*tileX,tileY*16,30));
            platforms.push(new Platform(34*tileX,tileY*17,30));
            platforms.push(new Platform(34*tileX,tileY*18,30));

            platforms.push(new Platform(35*tileX,tileY*15,28));
            platforms.push(new Platform(35*tileX,tileY*16,31));
            platforms.push(new Platform(35*tileX,tileY*17,31));
            platforms.push(new Platform(35*tileX,tileY*18,31));

            powerUps.push(new PowerUp(tileX*30,tileY*5,16));
            powerUps.push(new PowerUp(tileX*31,tileY*5,16));
            powerUps.push(new PowerUp(tileX*32,tileY*5,16));
            powerUps.push(new PowerUp(tileX*33,tileY*5,16));
            powerUps.push(new PowerUp(tileX*34,tileY*5,16));

            enemies.push(new Enemy(tileX*34,tileY*10,1,-1,5));

            platforms.push(new Platform(47*tileX,tileY*15,26));
            platforms.push(new Platform(47*tileX,tileY*16,29));
            platforms.push(new Platform(47*tileX,tileY*17,29));
            platforms.push(new Platform(47*tileX,tileY*18,29));

            platforms.push(new Platform(48*tileX,tileY*15,27));
            platforms.push(new Platform(48*tileX,tileY*16,30));
            platforms.push(new Platform(48*tileX,tileY*17,30));
            platforms.push(new Platform(48*tileX,tileY*18,30));

            platforms.push(new Platform(49*tileX,tileY*15,28));
            platforms.push(new Platform(49*tileX,tileY*16,31));
            platforms.push(new Platform(49*tileX,tileY*17,31));
            platforms.push(new Platform(49*tileX,tileY*18,31));

            platforms.push(new Platform(52*tileX,tileY*11,26));
            for (let index = 12; index <= 18; index++) {
                platforms.push(new Platform(52*tileX,tileY*index,29));
            }

            platforms.push(new Platform(53*tileX,tileY*11,27));
            for (let index = 12; index <= 18; index++) {
            platforms.push(new Platform(53*tileX,tileY*index,30));
            }

            platforms.push(new Platform(54*tileX,tileY*11,28));
            for (let index = 12; index <= 18; index++) {
            platforms.push(new Platform(54*tileX,tileY*index,31));
            }


            platforms.push(new Platform(57*tileX,tileY*7,26));
            for (let index = 8; index <= 18; index++) {
                platforms.push(new Platform(57*tileX,tileY*index,29));
            }

            platforms.push(new Platform(58*tileX,tileY*7,27));
            for (let index = 8; index <= 18; index++) {
            platforms.push(new Platform(58*tileX,tileY*index,30));
            }

            platforms.push(new Platform(59*tileX,tileY*7,28));
            for (let index = 8; index <= 18; index++) {
            platforms.push(new Platform(59*tileX,tileY*index,31));
            }

            platforms.push(new Platform(59*tileX,tileY*0,38));
            platforms.push(new Platform(60*tileX,tileY*0,38));
            platforms.push(new Platform(61*tileX,tileY*0,38));
            platforms.push(new Platform(62*tileX,tileY*0,38));

            platforms.push(new Platform(60*tileX,tileY*1,53));
            platforms.push(new Platform(60*tileX,tileY*2,54));


            platforms.push(new Platform(62*tileX,tileY*11,26));
            for (let index = 12; index <= 18; index++) {
                platforms.push(new Platform(62*tileX,tileY*index,29));
            }

            platforms.push(new Platform(63*tileX,tileY*11,27));
            for (let index = 12; index <= 18; index++) {
            platforms.push(new Platform(63*tileX,tileY*index,30));
            }

            platforms.push(new Platform(64*tileX,tileY*11,28));
            for (let index = 12; index <= 18; index++) {
            platforms.push(new Platform(64*tileX,tileY*index,31));
            }

            platforms.push(new Platform(64*tileX,tileY*7,5,1,6,12,0,0));

            platforms.push(new Platform(74*tileX,tileY*15,26));
            for (let index = 16; index <= 18; index++) {
                platforms.push(new Platform(74*tileX,tileY*index,29));
            }

            for (let indexX = 75; indexX <= 95; indexX++) {
                platforms.push(new Platform(indexX*tileX,tileY*15,27));
                for (let index = 16; index <= 18; index++) {
                    platforms.push(new Platform(indexX*tileX,tileY*index,30));
                }
            }
        
            platforms.push(new Platform(87*tileX,tileY*13,55));
            platforms.push(new Platform(88*tileX,tileY*13,56));
            platforms.push(new Platform(89*tileX,tileY*13,57));
            platforms.push(new Platform(90*tileX,tileY*13,58));

            platforms.push(new Platform(96*tileX,tileY*15,28));
            for (let index = 16; index <= 18; index++) {
            platforms.push(new Platform(96*tileX,tileY*index,31));
            }

            platforms.push(new Platform(84*tileX,tileY*9,39,1));
            platforms.push(new Platform(85*tileX,tileY*9,39,1));
            platforms.push(new Platform(86*tileX,tileY*9,39,1));

            platforms.push(new Platform(84*tileX,tileY*5,39,1));
            platforms.push(new Platform(85*tileX,tileY*5,39,1));

            powerUps.push(new PowerUp(tileX*87,tileY*2,16));
            powerUps.push(new PowerUp(tileX*88,tileY*2,16));
            powerUps.push(new PowerUp(tileX*87,tileY*3,16));
            powerUps.push(new PowerUp(tileX*88,tileY*3,16));

            platforms.push(new Platform(99*tileX,tileY*10,42,0,0,0,2,10));
            platforms.push(new Platform(100*tileX,tileY*10,43,0,0,0,2,10));
            platforms.push(new Platform(101*tileX,tileY*10,44,0,0,0,2,10));

            platforms.push(new Platform(104*tileX,tileY*7,42,0,0,0,2,5));
            platforms.push(new Platform(105*tileX,tileY*7,43,0,0,0,2,5));
            platforms.push(new Platform(106*tileX,tileY*7,44,0,0,0,2,5));

            platforms.push(new Platform(109*tileX,tileY*9,39,1));
            powerUps.push(new PowerUp(tileX*109,tileY*8,60));

            DinamicEnemies = []

            DinamicEnemies.push({"id": 0, "image": 0, "time": 110, "X": 85, "Y": 14, "direction": -1, "speed": 5, "timerShoot":0})
            DinamicEnemies.push({"id": 1, "image": 1, "time": 90, "X": 92, "Y": 14, "direction": 1, "speed": 5, "timerShoot":0 })
            DinamicEnemies.push({"id": 2, "image": 0, "time": 110, "X": 60, "Y": 3, "direction": -1, "speed": 5, "timerShoot":0})

            break;
    
        case 2:

            player.graphicStartLevel();

            player.X = 60
            player.Y = 0;
            platforms.push(new Platform(tileX*0,tileY*0,59));
            platforms.push(new Platform(tileX*180,tileY*0,59));

            for (let index = -22; index <= 20; index++) {
                platforms.push(new Platform(index*tileX,tileY*17,49));
            }            
            platforms.push(new Platform(21*tileX,tileY*17,50));

            platforms.push(new Platform(24*tileX,tileY*11,48,0,0,0,2,8));
            platforms.push(new Platform(25*tileX,tileY*11,49,0,0,0,2,8));
            platforms.push(new Platform(26*tileX,tileY*11,50,0,0,0,2,8));

            powerUps.push(new PowerUp(tileX*30,tileY*4,16));
            powerUps.push(new PowerUp(tileX*30,tileY*5,16));
            powerUps.push(new PowerUp(tileX*30,tileY*6,16));

            powerUps.push(new PowerUp(tileX*22,tileY*5,16));
            powerUps.push(new PowerUp(tileX*21,tileY*5,16));
            powerUps.push(new PowerUp(tileX*20,tileY*5,16));

            powerUps.push(new PowerUp(tileX*62,tileY*16,16));

            powerUps.push(new PowerUp(tileX*59,tileY*7,16));
            powerUps.push(new PowerUp(tileX*60,tileY*7,16));

            powerUps.push(new PowerUp(tileX*70,tileY*2,16));
            powerUps.push(new PowerUp(tileX*71,tileY*2,16));

            powerUps.push(new PowerUp(tileX*79,tileY*8,16));
            powerUps.push(new PowerUp(tileX*80,tileY*8,16));

            powerUps.push(new PowerUp(tileX*110,tileY*8,16));
            powerUps.push(new PowerUp(tileX*111,tileY*8,16));
            powerUps.push(new PowerUp(tileX*112,tileY*8,16));
            powerUps.push(new PowerUp(tileX*113,tileY*8,16));

            powerUps.push(new PowerUp(tileX*120,tileY*6,16));
            powerUps.push(new PowerUp(tileX*120,tileY*6,16));

            powerUps.push(new PowerUp(tileX*146,tileY*4,16));
            powerUps.push(new PowerUp(tileX*150,tileY*6,16));
            powerUps.push(new PowerUp(tileX*154,tileY*8,16));

            powerUps.push(new PowerUp(tileX*166,tileY*15,16));

            platforms.push(new Platform(29*tileX,tileY*9,48,0,0,0,1,20));
            platforms.push(new Platform(30*tileX,tileY*9,49,0,0,0,1,20));
            platforms.push(new Platform(31*tileX,tileY*9,50,0,0,0,1,20));

            platforms.push(new Platform(34*tileX,tileY*3,48,0,0,0,2,3));
            platforms.push(new Platform(35*tileX,tileY*3,49,0,0,0,2,3));
            platforms.push(new Platform(36*tileX,tileY*3,50,0,0,0,2,3));

            platforms.push(new Platform(50*tileX,tileY*8,48,0,0,0,2,3));
            platforms.push(new Platform(51*tileX,tileY*8,49,0,0,0,2,3));
            platforms.push(new Platform(52*tileX,tileY*8,49,0,0,0,2,3));
            platforms.push(new Platform(53*tileX,tileY*8,49,0,0,0,2,3));
            platforms.push(new Platform(54*tileX,tileY*8,50,0,0,0,2,3));

            platforms.push(new Platform(58*tileX,tileY*3,48,0,0,0,2,3));
            platforms.push(new Platform(59*tileX,tileY*3,49,0,0,0,2,3));
            platforms.push(new Platform(60*tileX,tileY*3,49,0,0,0,2,3));
            platforms.push(new Platform(61*tileX,tileY*3,50,0,0,0,2,3));

            platforms.push(new Platform(58*tileX,tileY*10,48,0,0,0,2,6));
            platforms.push(new Platform(59*tileX,tileY*10,49,0,0,0,2,6));
            platforms.push(new Platform(60*tileX,tileY*10,49,0,0,0,2,6));
            platforms.push(new Platform(61*tileX,tileY*10,50,0,0,0,2,6));

            platforms.push(new Platform(83*tileX,tileY*3,38));
            platforms.push(new Platform(83*tileX,tileY*4,38));
            platforms.push(new Platform(83*tileX,tileY*5,38));
            platforms.push(new Platform(83*tileX,tileY*6,38));

            platforms.push(new Platform(81*tileX,tileY*4,55));
            platforms.push(new Platform(82*tileX,tileY*4,56));

            platforms.push(new Platform(78*tileX,tileY*10,48,0,0,0,2,6));
            platforms.push(new Platform(79*tileX,tileY*10,49,0,0,0,2,6));
            platforms.push(new Platform(80*tileX,tileY*10,49,0,0,0,2,6));
            platforms.push(new Platform(81*tileX,tileY*10,50,0,0,0,2,6));

            platforms.push(new Platform(88*tileX,tileY*7,48,0,0,0,2,15));
            platforms.push(new Platform(89*tileX,tileY*7,49,0,0,0,2,15));
            platforms.push(new Platform(90*tileX,tileY*7,49,0,0,0,2,15));
            platforms.push(new Platform(91*tileX,tileY*7,50,0,0,0,2,15));

            platforms.push(new Platform(95*tileX,tileY*8,48,0,0,0,2,13));
            platforms.push(new Platform(96*tileX,tileY*8,49,0,0,0,2,13));
            platforms.push(new Platform(97*tileX,tileY*8,49,0,0,0,2,13));
            platforms.push(new Platform(98*tileX,tileY*8,50,0,0,0,2,13));

            platforms.push(new Platform(103*tileX,tileY*3,38));
            platforms.push(new Platform(103*tileX,tileY*4,38));
            platforms.push(new Platform(103*tileX,tileY*5,38));
            platforms.push(new Platform(103*tileX,tileY*6,38));

            platforms.push(new Platform(101*tileX,tileY*4,55));
            platforms.push(new Platform(102*tileX,tileY*4,56));

            platforms.push(new Platform(103*tileX,tileY*10,48,0,0,0,2,14));
            platforms.push(new Platform(104*tileX,tileY*10,49,0,0,0,2,14));
            platforms.push(new Platform(105*tileX,tileY*10,49,0,0,0,2,14));
            platforms.push(new Platform(106*tileX,tileY*10,50,0,0,0,2,14));

            platforms.push(new Platform(110*tileX,tileY*14,48,0,0,0,1,10));
            platforms.push(new Platform(111*tileX,tileY*14,49,0,0,0,1,10));
            platforms.push(new Platform(112*tileX,tileY*14,49,0,0,0,1,10));
            platforms.push(new Platform(113*tileX,tileY*14,49,0,0,0,1,10));
            platforms.push(new Platform(114*tileX,tileY*14,50,0,0,0,1,10));

            platforms.push(new Platform(116*tileX,tileY*10,48,0,0,0,1,9));
            platforms.push(new Platform(117*tileX,tileY*10,49,0,0,0,1,9));
            platforms.push(new Platform(118*tileX,tileY*10,49,0,0,0,1,9));
            platforms.push(new Platform(119*tileX,tileY*10,49,0,0,0,1,9));
            platforms.push(new Platform(120*tileX,tileY*10,50,0,0,0,1,9));

            platforms.push(new Platform(122*tileX,tileY*6,48,0,0,0,1,10));
            platforms.push(new Platform(123*tileX,tileY*6,49,0,0,0,1,10));
            platforms.push(new Platform(124*tileX,tileY*6,49,0,0,0,1,10));
            platforms.push(new Platform(125*tileX,tileY*6,49,0,0,0,1,10));
            platforms.push(new Platform(126*tileX,tileY*6,50,0,0,0,1,10));


            platforms.push(new Platform(128*tileX,tileY*2,48,0,0,0,1,11));
            platforms.push(new Platform(129*tileX,tileY*2,49,0,0,0,1,11));
            platforms.push(new Platform(130*tileX,tileY*2,49,0,0,0,1,11));
            platforms.push(new Platform(131*tileX,tileY*2,50,0,0,0,1,11));

            platforms.push(new Platform(133*tileX,tileY*5,48,0,0,0,1,8));
            platforms.push(new Platform(134*tileX,tileY*5,49,0,0,0,1,8));
            platforms.push(new Platform(135*tileX,tileY*5,49,0,0,0,1,8));
            platforms.push(new Platform(136*tileX,tileY*5,50,0,0,0,1,8));

            platforms.push(new Platform(138*tileX,tileY*8,48,0,0,0,1,10));
            platforms.push(new Platform(139*tileX,tileY*8,49,0,0,0,1,10));
            platforms.push(new Platform(140*tileX,tileY*8,49,0,0,0,1,10));
            platforms.push(new Platform(141*tileX,tileY*8,50,0,0,0,1,10));

            platforms.push(new Platform(143*tileX,tileY*12,48,0,0,0,1,11));
            platforms.push(new Platform(144*tileX,tileY*12,49,0,0,0,1,11));
            platforms.push(new Platform(145*tileX,tileY*12,49,0,0,0,1,11));
            platforms.push(new Platform(146*tileX,tileY*12,50,0,0,0,1,11));

            platforms.push(new Platform(160*tileX,tileY*15,48,0,0,0,2,2));
            platforms.push(new Platform(161*tileX,tileY*15,50,0,0,0,2,2));

            platforms.push(new Platform(164*tileX,tileY*10,48,0,0,0,2,10));
            platforms.push(new Platform(165*tileX,tileY*10,50,0,0,0,2,10));

            platforms.push(new Platform(168*tileX,tileY*6,48,0,0,0,0,0));
            platforms.push(new Platform(169*tileX,tileY*6,50,0,0,0,0,0));

         
            powerUps.push(new PowerUp(tileX*169,tileY*5,60));

            platforms.push(new Platform(60*tileX,tileY*1,5,1,6,12,0,0));

            DinamicEnemies = []
            DinamicEnemies.push({ "id": 0, "image": 61, "time": 400, "X": 80, "Y": 4, "direction": -1, "speed": 5, "timerShoot":0,"noGravity":1}) 
            DinamicEnemies.push({ "id": 1, "image": 61, "time": 700, "X": 100, "Y": 4, "direction": -1, "speed": 5, "timerShoot":0,"noGravity":1 })
    
            enemies.push(new Enemy(tileX*40,tileY*7,61,-1,5,0,1));
            enemies.push(new Enemy(tileX*50,tileY*12,61,-1,5,0,1));

            

            break;

            case 3:
                player.graphicStartLevel();

                player.X = 60
                player.Y = 0;
                platforms.push(new Platform(tileX*0,tileY*0,59));
                platforms.push(new Platform(tileX*120,tileY*0,59));
    
                for (let index = -22; index <= 20; index++) {
                    platforms.push(new Platform(index*tileX,tileY*17,33));
                    platforms.push(new Platform(index*tileX,tileY*18,36));
                }
                platforms.push(new Platform(21*tileX,tileY*17,34));
                platforms.push(new Platform(21*tileX,tileY*18,37));

                platforms.push(new Platform(18*tileX,tileY*12,5,1,6,12,0,0));
    
                platforms.push(new Platform(25*tileX,tileY*15,32));
                for (let indexY = 16; indexY <= 18; indexY++) {
                    platforms.push(new Platform(25*tileX,tileY*indexY,35));
                }

                for (let indexX = 26; indexX <= 27; indexX++) {
                    platforms.push(new Platform(indexX*tileX,tileY*15,33));
                    for (let indexY = 16; indexY <= 18; indexY++) {
                        platforms.push(new Platform(indexX*tileX,tileY*indexY,36));
                    }
                }



                platforms.push(new Platform(28*tileX,tileY*15,34));
                for (let indexY = 16; indexY <= 18; indexY++) {
                    platforms.push(new Platform(28*tileX,tileY*indexY,37));
                }
                
                enemies.push(new Enemy(tileX*27,tileY*14,23,-1,0,3,0));
                powerUps.push(new PowerUp(tileX*27,tileY*5,16));

                platforms.push(new Platform(31*tileX,tileY*13,32));
                for (let indexY = 14; indexY <= 18; indexY++) {
                    platforms.push(new Platform(31*tileX,tileY*indexY,35));
                }

                for (let indexX = 32; indexX <= 33; indexX++) {
                    platforms.push(new Platform(indexX*tileX,tileY*13,33));
                    for (let indexY = 14; indexY <= 18; indexY++) {
                        platforms.push(new Platform(indexX*tileX,tileY*indexY,36));
                    }
                }

                platforms.push(new Platform(34*tileX,tileY*13,34));
                for (let indexY = 14; indexY <= 18; indexY++) {
                    platforms.push(new Platform(34*tileX,tileY*indexY,37));
                }

                enemies.push(new Enemy(tileX*33,tileY*12,23,-1,0,3,0));
                powerUps.push(new PowerUp(tileX*33,tileY*3,16));

                platforms.push(new Platform(37*tileX,tileY*11,32));
                for (let indexY = 12; indexY <= 18; indexY++) {
                    platforms.push(new Platform(37*tileX,tileY*indexY,35));
                }

                for (let indexX = 38; indexX <= 39; indexX++) {
                    platforms.push(new Platform(indexX*tileX,tileY*11,33));
                    for (let indexY = 12; indexY <= 18; indexY++) {
                        platforms.push(new Platform(indexX*tileX,tileY*indexY,36));
                    }
                }

                platforms.push(new Platform(40*tileX,tileY*11,34));
                for (let indexY = 12; indexY <= 18; indexY++) {
                    platforms.push(new Platform(40*tileX,tileY*indexY,37));
                }

                enemies.push(new Enemy(tileX*39,tileY*10,23,-1,0,3,0));
                powerUps.push(new PowerUp(tileX*39,tileY*1,16));

                platforms.push(new Platform(43*tileX,tileY*9,32));
                for (let indexY = 10; indexY <= 18; indexY++) {
                    platforms.push(new Platform(43*tileX,tileY*indexY,35));
                }

                for (let indexX = 44; indexX <= 45; indexX++) {
                    platforms.push(new Platform(indexX*tileX,tileY*9,33));
                    for (let indexY = 10; indexY <= 18; indexY++) {
                        platforms.push(new Platform(indexX*tileX,tileY*indexY,36));
                    }
                }

                platforms.push(new Platform(46*tileX,tileY*9,34));
                for (let indexY = 10; indexY <= 18; indexY++) {
                    platforms.push(new Platform(46*tileX,tileY*indexY,37));
                }

                enemies.push(new Enemy(tileX*45,tileY*8,23,-1,0,3,0));

                platforms.push(new Platform(49*tileX,tileY*7,32));
                for (let indexY = 8; indexY <= 18; indexY++) {
                    platforms.push(new Platform(49*tileX,tileY*indexY,35));
                }

                for (let indexX = 50; indexX <= 51; indexX++) {
                    platforms.push(new Platform(indexX*tileX,tileY*7,33));
                    for (let indexY = 8; indexY <= 18; indexY++) {
                        platforms.push(new Platform(indexX*tileX,tileY*indexY,36));
                    }
                }

                platforms.push(new Platform(52*tileX,tileY*7,34));
                for (let indexY = 8; indexY <= 18; indexY++) {
                    platforms.push(new Platform(52*tileX,tileY*indexY,37));
                }

                enemies.push(new Enemy(tileX*51,tileY*6,23,-1,0,3,0));


                platforms.push(new Platform(56*tileX,tileY*5,42,0,0,0,2,10));
                platforms.push(new Platform(57*tileX,tileY*5,43,0,0,0,2,10));
                platforms.push(new Platform(58*tileX,tileY*5,44,0,0,0,2,10));


                platforms.push(new Platform(68*tileX,tileY*3,42,0,0,0,2,7));
                platforms.push(new Platform(69*tileX,tileY*3,43,0,0,0,2,7));
                platforms.push(new Platform(70*tileX,tileY*3,44,0,0,0,2,7));

                enemies.push(new Enemy(tileX*69,tileY*2,23,-1,0,3,0));

                powerUps.push(new PowerUp(tileX*69,tileY,16));

                powerUps.push(new PowerUp(tileX*55,tileY*14,16));

                powerUps.push(new PowerUp(tileX*87,tileY*15,16));
                powerUps.push(new PowerUp(tileX*97,tileY*16,16));
                powerUps.push(new PowerUp(tileX*98,tileY*16,16));
                powerUps.push(new PowerUp(tileX*99,tileY*16,16));

                powerUps.push(new PowerUp(tileX*94,tileY*10,16));
                powerUps.push(new PowerUp(tileX*93,tileY*10,16));

                platforms.push(new Platform(68*tileX,tileY*10,42,0,0,0,2,7));
                platforms.push(new Platform(69*tileX,tileY*10,43,0,0,0,2,7));
                platforms.push(new Platform(70*tileX,tileY*10,44,0,0,0,2,7));

                enemies.push(new Enemy(tileX*69,tileY*9,23,-1,0,3,0));

                platforms.push(new Platform(74*tileX,tileY*7,42,0,0,0,2,13));
                platforms.push(new Platform(75*tileX,tileY*7,43,0,0,0,2,13));
                platforms.push(new Platform(76*tileX,tileY*7,43,0,0,0,2,13));
                platforms.push(new Platform(77*tileX,tileY*7,44,0,0,0,2,13));

                enemies.push(new Enemy(tileX*75,tileY*6,23,-1,0,3,0));

                platforms.push(new Platform(80*tileX,tileY*11,32));
                for (let indexY = 12; indexY <= 18; indexY++) {
                    platforms.push(new Platform(80*tileX,tileY*indexY,35));
                }

                for (let indexX = 81; indexX <= 85; indexX++) {
                    platforms.push(new Platform(indexX*tileX,tileY*11,33));
                    for (let indexY = 12; indexY <= 18; indexY++) {
                        platforms.push(new Platform(indexX*tileX,tileY*indexY,36));
                    }
                }

                platforms.push(new Platform(86*tileX,tileY*11,34));
                for (let indexY = 12; indexY <= 16; indexY++) {
                    platforms.push(new Platform(86*tileX,tileY*indexY,37));
                }

                platforms.push(new Platform(86*tileX,tileY*13,36));
                platforms.push(new Platform(86*tileX,tileY*14,36));

                platforms.push(new Platform(86*tileX,tileY*17,36));
                platforms.push(new Platform(86*tileX,tileY*18,36));

                platforms.push(new Platform(87*tileX,tileY*13,57));
                platforms.push(new Platform(88*tileX,tileY*13,58));

                enemies.push(new Enemy(tileX*87,tileY*14,23,1,0,3,0));

                for (let indexX = 87; indexX <= 99; indexX++) {
                    platforms.push(new Platform(indexX*tileX,tileY*17,33));
                        platforms.push(new Platform(indexX*tileX,tileY*18,36));
                }

                platforms.push(new Platform(100*tileX,tileY*11,32));
                for (let indexY = 12; indexY <= 16; indexY++) {
                    platforms.push(new Platform(100*tileX,tileY*indexY,35));
                }


                platforms.push(new Platform(100*tileX,tileY*17,36));
                platforms.push(new Platform(100*tileX,tileY*18,36));

                enemies.push(new Enemy(tileX*100,tileY*10,23,-1,0,3,0));

                for (let indexX = 101; indexX <= 109; indexX++) {
                    platforms.push(new Platform(indexX*tileX,tileY*11,33));
                    for (let indexY = 12; indexY <= 18; indexY++) {
                        platforms.push(new Platform(indexX*tileX,tileY*indexY,36));
                    }
                }

                platforms.push(new Platform(110*tileX,tileY*11,34));
                for (let indexY = 12; indexY <= 18; indexY++) {
                    platforms.push(new Platform(110*tileX,tileY*indexY,37));
                }

                platforms.push(new Platform(108*tileX,tileY*7,5,1,6,60,0,0));

                DinamicEnemies = []
                DinamicEnemies.push({ "id": 0, "image": 25, "time": 400, "X": 89, "Y": 13, "direction": -1, "speed": 10, "timerShoot":0,"noGravity":0})

                break;

                case 4:
                player.graphicStartLevel();
                player.X = 60
                player.Y = 0;
                platforms.push(new Platform(tileX*0,tileY*0,59));
                platforms.push(new Platform(tileX*120,tileY*0,59));
    
                for (let index = -22; index <= 15; index++) {
                    platforms.push(new Platform(index*tileX,tileY*18,41));
                }

                for (let index = 10; index <= 15; index++) {
                    platforms.push(new Platform(index*tileX,tileY*14,41,1));
                }

                for (let index = 8; index <= 17; index++) {
                    platforms.push(new Platform(index*tileX,tileY*6,41,1));
                }

                powerUps.push(new PowerUp(tileX*11,tileY*2,16));
                powerUps.push(new PowerUp(tileX*12,tileY*2,16));
                powerUps.push(new PowerUp(tileX*13,tileY*2,16));
                powerUps.push(new PowerUp(tileX*14,tileY*2,16));


                powerUps.push(new PowerUp(tileX*32,tileY*2,16));
                powerUps.push(new PowerUp(tileX*33,tileY*2,16));
                powerUps.push(new PowerUp(tileX*34,tileY*2,16));

                powerUps.push(new PowerUp(tileX*33,tileY*13,16));

                powerUps.push(new PowerUp(tileX*45,tileY*10,16));
                powerUps.push(new PowerUp(tileX*45,tileY*14,16));

                powerUps.push(new PowerUp(tileX*68,tileY*16,16));
                powerUps.push(new PowerUp(tileX*67,tileY*16,16));
                powerUps.push(new PowerUp(tileX*68,tileY*5,16));
                powerUps.push(new PowerUp(tileX*67,tileY*5,16));
                powerUps.push(new PowerUp(tileX*67,tileY*8,16));

                powerUps.push(new PowerUp(tileX*85,tileY*16,16));
                powerUps.push(new PowerUp(tileX*85,tileY*5,16));

                powerUps.push(new PowerUp(tileX*94,tileY*2,16));

                platforms.push(new Platform(12*tileX,tileY*10,5,1,6,13,0,0));

                platforms.push(new Platform(21*tileX,tileY*17,41,1));
                platforms.push(new Platform(21*tileX,tileY*17,41,1));

                for (let indexY = 17; indexY <= 18; indexY++) {
                    platforms.push(new Platform(21*tileX,tileY*indexY,41,1));
                }

                for (let indexY = 14; indexY <= 18; indexY++) {
                    platforms.push(new Platform(24*tileX,tileY*indexY,41,1));
                }

                for (let indexY = 11; indexY <= 18; indexY++) {
                    platforms.push(new Platform(27*tileX,tileY*indexY,41,1));
                }

                for (let index = 29; index <= 37; index++) {
                    platforms.push(new Platform(index*tileX,tileY*6,41,1));
                }

                platforms.push(new Platform(23*tileX,tileY*8,41,1));

                for (let index = 30; index <= 33; index++) {
                    platforms.push(new Platform(index*tileX,tileY*11,41,1));
                }

                platforms.push(new Platform(34*tileX,tileY*11,5,1,6,14,0,0));

                platforms.push(new Platform(35*tileX,tileY*11,41,1));

                for (let index = 32; index <= 34; index++) {
                    platforms.push(new Platform(index*tileX,tileY*15,41,1));
                }

                for (let index = 40; index <= 45; index++) {
                    platforms.push(new Platform(index*tileX,tileY*11,41,1));
                }

                enemies.push(new Enemy(tileX*44,tileY*10,23,-1,0,3,0));

                for (let index = 48; index <= 56; index++) {
                    platforms.push(new Platform(index*tileX,tileY*8,41,1));
                }
                
                enemies.push(new Enemy(tileX*44,tileY*14,23,-1,0,3,0));

                for (let index = 40; index <= 45; index++) {
                    platforms.push(new Platform(index*tileX,tileY*15,41,1));
                }

                for (let index = 58; index <= 68; index++) {
                    platforms.push(new Platform(index*tileX,tileY*6,41,1));
                }

                platforms.push(new Platform(36*tileX,tileY*0,40));
                platforms.push(new Platform(37*tileX,tileY*0,40));
                platforms.push(new Platform(38*tileX,tileY*0,40));
                platforms.push(new Platform(39*tileX,tileY*0,40));
    
                platforms.push(new Platform(37*tileX,tileY*1,53));
                platforms.push(new Platform(37*tileX,tileY*2,54));

                platforms.push(new Platform(49*tileX,tileY*0,40));
                platforms.push(new Platform(50*tileX,tileY*0,40));
                platforms.push(new Platform(51*tileX,tileY*0,40));
                platforms.push(new Platform(52*tileX,tileY*0,40));
    
                platforms.push(new Platform(50*tileX,tileY*1,53));
                platforms.push(new Platform(50*tileX,tileY*2,54));

                platforms.push(new Platform(62*tileX,tileY*0,40));
                platforms.push(new Platform(63*tileX,tileY*0,40));
                platforms.push(new Platform(64*tileX,tileY*0,40));
                platforms.push(new Platform(65*tileX,tileY*0,40));
    
                platforms.push(new Platform(63*tileX,tileY*1,53));
                platforms.push(new Platform(63*tileX,tileY*2,54));

                for (let index = 55; index <= 63; index++) {
                    platforms.push(new Platform(index*tileX,tileY*14,41,1));
                }

                platforms.push(new Platform(67*tileX,tileY*9,40));
                platforms.push(new Platform(67*tileX,tileY*10,40));
                platforms.push(new Platform(67*tileX,tileY*11,40));
                platforms.push(new Platform(67*tileX,tileY*12,40));
    
                platforms.push(new Platform(65*tileX,tileY*10,55));
                platforms.push(new Platform(66*tileX,tileY*10,56));

                for (let index = 65; index <= 70; index++) {
                    platforms.push(new Platform(index*tileX,tileY*17,41,1));
                }

                platforms.push(new Platform(74*tileX,tileY*5,48,0,0,0,2,10));
                platforms.push(new Platform(75*tileX,tileY*5,49,0,0,0,2,10));
                platforms.push(new Platform(76*tileX,tileY*5,50,0,0,0,2,10));


                for (let index = 80; index <= 85; index++) {
                    platforms.push(new Platform(index*tileX,tileY*6,41,1));
                }

                enemies.push(new Enemy(tileX*84,tileY*5,23,-1,0,3,0));

                for (let index = 80; index <= 85; index++) {
                    platforms.push(new Platform(index*tileX,tileY*17,41,1));
                }

                enemies.push(new Enemy(tileX*84,tileY*16,23,-1,0,3,0));

                platforms.push(new Platform(89*tileX,tileY*10,48,0,0,0,2,10));
                platforms.push(new Platform(90*tileX,tileY*10,49,0,0,0,2,10));
                platforms.push(new Platform(91*tileX,tileY*10,50,0,0,0,2,10));

                platforms.push(new Platform(95*tileX,tileY*8,48,0,0,0,2,10));
                platforms.push(new Platform(96*tileX,tileY*8,49,0,0,0,2,10));
                platforms.push(new Platform(97*tileX,tileY*8,50,0,0,0,2,10));

                platforms.push(new Platform(101*tileX,tileY*12,48,0,0,0,2,10));
                platforms.push(new Platform(102*tileX,tileY*12,49,0,0,0,2,10));
                platforms.push(new Platform(103*tileX,tileY*12,50,0,0,0,2,10));
                

                platforms.push(new Platform(94*tileX,tileY*5,41,1));

                platforms.push(new Platform(106*tileX,tileY*10,41,1));
                powerUps.push(new PowerUp(tileX*106,tileY*9,60));

                DinamicEnemies = []
                DinamicEnemies.push({ "id": 0, "image": 0, "time": 70, "X": 50, "Y": 3, "direction": -1, "speed": 5, "timerShoot":0}) 
                DinamicEnemies.push({ "id": 1, "image": 0, "time": 90, "X": 37, "Y": 3, "direction": -1, "speed": 5, "timerShoot":0}) 
                DinamicEnemies.push({ "id": 2, "image": 0, "time": 80, "X": 63, "Y": 3, "direction": -1, "speed": 5, "timerShoot":0}) 
                DinamicEnemies.push({ "id": 3, "image": 0, "time": 80, "X": 63, "Y": 10, "direction": -1, "speed": 5, "timerShoot":0}) 
                
                break;
                }

}