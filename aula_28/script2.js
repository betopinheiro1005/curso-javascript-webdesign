(function readyJS(win, doc) {
  'use strict';

  let info = document.querySelector("#info");
  let btn = document.querySelector("#btn");

  /* As formas mais comuns de se trabalhar de forma assíncrona com o Javascript é utilizando eventos, setTimeout e setInterval. */

  /* Formas assíncrona utilizando eventos */

  console.log('Hello');
  info.innerHTML += "<p>Hello</p>";
  function counter() {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      info.innerHTML += `<p>${i}</p>`;
    }
  }

  btn.addEventListener('click', counter, false);

  console.log('World');
  info.innerHTML += "<p>World</p>";

})(window, document);

