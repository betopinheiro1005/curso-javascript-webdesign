(function (win, doc) {
  'use strict';

  let result = doc.querySelector('.result');

  function data() {
    return "O livro é '" + this.title + "' e tem " + this.pages + " páginas.";
  }

  let ajax = new XMLHttpRequest();
  ajax.open('GET', 'controller.php');
  ajax.onreadystatechange = function () {
    if (ajax.status === 200 && ajax.readyState === 4) {
      let res = JSON.parse(ajax.responseText);
      res.map(function (elem, ind, obj) {
        let child = doc.createElement('div');
        /* call é uma função que permite manipular o this dentro dos objetos e funções */
        child.innerHTML = data.call(elem);
        result.appendChild(child);
      });
    }
  };
  ajax.send();

})(window, document);