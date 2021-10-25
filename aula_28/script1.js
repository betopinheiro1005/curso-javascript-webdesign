(function readyJS(win, doc) {
  'use strict';

  let info = document.querySelector("#info");

  /* O Javascript por padrão é síncrono, mas existem algumas formas de utilizá-lo de forma assíncrona. */
  /* Evento síncrono: executa os comandos na ordem em que aparecem (de cima para baixo) */

  console.log('Hello');
  info.innerHTML += "<p>Hello</p>";

  for (let i = 0; i < 10; i++) {
    console.log(i);
    info.innerHTML += `<p>${i}</p>`;
  }

  console.log('World');
  info.innerHTML += "<p>World</p>";

})(window, document);
