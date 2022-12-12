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

export function PreloadGame(){
    return new Promise(resolve => {
        preloadPictures(['graphics/4307.png','graphics/botonA.png','graphics/botonAPush.png','graphics/palanca.png','graphics/palancaIzq.png','graphics/palancaAba.png','graphics/palancaArr.png','graphics/palancaArrDer.png','graphics/palancaArrIzq.png','graphics/palancaAbaDer.png','graphics/palancaAbaIzq.png','graphics/palancaDer.png','graphics/presentacion.png','graphics/gameover.png','graphics/imgganar.png','graphics/105636.png','graphics/mariob.png', 'graphics/4320.png', 'graphics/31609.png', 'graphics/65292.png'])
            resolve(resultado);
      });
}
