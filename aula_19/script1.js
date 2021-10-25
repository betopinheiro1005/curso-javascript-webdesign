(function readyJS(win, doc) {
  'use strict';

  /* No javascript conseguimos trabalhar com polimorfismo, ou seja, métodos iguais com resultados diferentes. No exemplo abaixo criamos uma mesma função para receber informações dos button e exibimos resultados diferentes para o usuário: */

  let btn = doc.querySelectorAll(".button");
  let body = doc.querySelector("body");

  //Change body colors
  function changeColors(event) {
    body.style.backgroundColor = event.target.dataset.color;
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", changeColors, false);
  }
})(window, document);