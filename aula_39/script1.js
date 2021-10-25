(function readyJS(win, doc) {
  'use strict';

  //let date=new Date();
  //console.log(date);
  //console.log(date.getHours());
  //console.log(date.getMinutes());
  //console.log(date.getSeconds());
  //console.log(date.getFullYear());

  let result = doc.querySelector('#result');
  let iniciar = doc.querySelector('#bt-iniciar');
  let parar = doc.querySelector('#bt-parar');

  let timeoutID;

  function clock() {

    result.style.display = "block";

    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hour < 10) {
      hour = '0' + hour;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    result.innerHTML = hour + ':' + minutes + ':' + seconds;

    timeoutID = setTimeout(clock, 1000);  /* setTimeout recursivo: a função clock é chamada a cada segundo */

  }

  function stop() {
    clearTimeout(timeoutID);
  }

  iniciar.addEventListener("click", clock);
  parar.addEventListener("click", stop);

})(window, document);