import { readRanking } from "./firebase.js";

export let resultado = "";

var preloadPictures = function(pictureUrls) {
  var i,
      j,
      loaded = 0;

  for (i = 0, j = pictureUrls.length; i < j; i++) {
      (function (img, src) {
          img.onload = function () {                               
              if (++loaded == pictureUrls.length) {
                  return true;
              }
          };

          // Use the following callback methods to debug
          // in case of an unexpected behavior.
          img.onerror = function () {};
          img.onabort = function () {};

          img.src = src;
      } (new Image(), pictureUrls[i]));
      resultado = readRanking();
  }
};

export function preLoadGame(){
    return new Promise(resolve => {
        preloadPictures(['graficos/4307.png','graficos/botonA.png','graficos/botonAPush.png','graficos/palanca.png','graficos/palancaIzq.png','graficos/palancaAba.png','graficos/palancaArr.png','graficos/palancaArrDer.png','graficos/palancaArrIzq.png','graficos/palancaAbaDer.png','graficos/palancaAbaIzq.png','graficos/palancaDer.png','graficos/presentacion.png','graficos/gameover.png','graficos/imgganar.png','graficos/105636.png','graficos/mariob.png', 'graficos/4320.png', 'graficos/31609.png', 'graficos/65292.png'])
            resolve(resultado);
      });
}
