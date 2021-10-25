(function readyJS(win, doc) {
  'use strict';

  function person() {
    this.name = "Thiago";
    this.salario = function () {
      return 'Salário';
    }
  }

  let obj = new person();
  console.log(obj);

})(window, document);