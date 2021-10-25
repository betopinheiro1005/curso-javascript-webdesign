(function readyJS(win, doc) {
  'use strict';

  /* Utilizar o escopo global como forma de herança é interessante, pois permite que você divida seu código em vários arquivos e relacione os objetos entre esses arquivos. */

  function app(adiant, salario) {
    this.adiant = adiant;
    this.salario = salario;
  }
  app.prototype.percent = function () {
    return this.adiant * 100 / this.salario;
  };

  app.prototype.result = function () {
    return 'O funcionário recebeu ' + this.percent() + '% relativo ao adiantamento';
  };

  function test() {
    console.log('Função test');
  }

  win.app = app;
  // win.test = test;

})(window, document);