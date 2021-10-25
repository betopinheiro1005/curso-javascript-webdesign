(function (win, doc) {
  'use strict';

  let result = doc.querySelector('.result');

  result.innerHTML = '';

  function data() {
    return "O livro é '" + this.title + "' e tem " + this.pages + " páginas.";
  }

  let book1 = {
    title: "E o vento levou",
    pages: 100
  };

  let book2 = {
    title: "A onda",
    pages: 50
  };

  result.innerHTML += `<p>${data.call(book1)}</p>`;
  result.innerHTML += `<p>${data.call(book2)}</p>`;

})(window, document);