(function readyJS(win, doc) {
  'use strict';

  /* É muito importante entender essa técnica principalmente quando criamos elementos novos no nosso DOM. */

  /* Normalmente precisamos delegar eventos ao pai quando criamos elementos dinâmicamente, ou seja, elementos que não existiam no site quando da leitura inicial da árvore do DOM. */

  /* Repare no exemplo acima que o newButton foi criado dinâmicamente, logo se você tentar atribuir um evento diretamente a ele não vai surtir efeito, pois quando da abertura do site este elemento não existia.Para tanto, foi delegado o evento ao elemento pai, no caso a div main e aí sim consigo utilizar meu novo botão. */

  let btn = doc.querySelector("#btn");
  let main = doc.querySelector(".main");

  function createElement(event) {
    const newButton = doc.createElement("button");
    newButton.id = "newButton";
    newButton.innerHTML = 'New Button';
    main.appendChild(newButton);
  }

  function alertar(event) {
    alert('New Button');
  }

  function optEvents() {
    if (event.target.id === 'newButton') {
      alertar();
    } else if (event.target.id === 'btn') {
      createElement();
    }
  }
  main.addEventListener("click", optEvents, false);
})(window, document);