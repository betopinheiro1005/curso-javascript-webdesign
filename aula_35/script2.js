(function (win, doc) {
  'use strict';

  /* Repare que a variável obj2 é uma instância da função app que se encontra no escopo global. */

  let obj2 = new app(500, 2000);
  console.log(obj2.result());
})(window, document);