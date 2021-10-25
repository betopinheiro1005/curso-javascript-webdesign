(function (win, doc) {
  'use strict';

  let result = doc.querySelector('.result');

  function data(author, age) {
    return "O livro é '" + this.title + "' e tem " + this.pages + " páginas. O autor é " + author + " e ele tem " + age + " anos de idade";
  }

  let ajax = new XMLHttpRequest();
  ajax.open('GET', 'controller.php');
  ajax.onreadystatechange = function () {
    if (ajax.status === 200 && ajax.readyState === 4) {
      let res = JSON.parse(ajax.responseText);
      res.map(function (elem, ind, obj) {
        let child = doc.createElement('div');

        /* O Call e o apply executam a mesma função, a diferença entre eles é a forma com que passamos os parâmetros, o call é passado através de vírgula e o apply através de um array */

        // child.innerHTML = data.call(elem, "Thiago", 18);
        child.innerHTML = data.apply(elem, ["Thiago", 18]);
        result.appendChild(child);
      });
    }
  };
  ajax.send();

})(window, document);