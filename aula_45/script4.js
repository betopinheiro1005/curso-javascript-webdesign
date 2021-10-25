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
        let newFunction = data.bind(elem);
        child.innerHTML = newFunction();
        result.appendChild(child);
      });
    }
  };
  ajax.send();

})(window, document);