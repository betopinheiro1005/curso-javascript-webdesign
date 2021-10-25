(function readyJS(win, doc) {
  'use strict';

  let sel = document.querySelector("#cores");

  function alertar(event) {
    let cor = event.target.value;
    if (cor == "") {
      alert("Você não selecionou sua cor favorita!");
    } else {
      alert("Favourite color: " + cor);
      document.querySelector('body').style.backgroundColor = cor;
    }
  }

  sel.addEventListener("change", alertar, false);

})(window, document);