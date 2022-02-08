let etapaJuego = 0 // 0 cargando - 1 inicio - 2 jugando - 3 gameover

var preloadPictures = function(pictureUrls, callback) {
  var i,
      j,
      loaded = 0;

  for (i = 0, j = pictureUrls.length; i < j; i++) {
      (function (img, src) {
          img.onload = function () {                               
              if (++loaded == pictureUrls.length && callback) {
                  callback();
              }
          };

          // Use the following callback methods to debug
          // in case of an unexpected behavior.
          img.onerror = function () {};
          img.onabort = function () {};

          img.src = src;
      } (new Image(), pictureUrls[i]));
  }
};

preloadPictures(['graficos/4307.png','graficos/105636.png','graficos/mariob.png', 'graficos/4320.png', 'graficos/31609.png', 'graficos/65292.png'], function(){
  etapaJuego=1;
});
