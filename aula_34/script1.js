(function readyJS(win, doc) {
  'use strict';

  let info = doc.querySelector("#info");
  info.innerHTML = '';

  /* O uso de this dentro de uma função, a tornará uma função construtora, permitindo a criação de objetos */

  /* Modo formal de se criar um objeto */

  function person(name) {
    this.name = name;
  }

  let obj1 = new person('Thiago');
  console.log(obj1);

  /* Modo literal de se criar um objeto */

  let obj2 = {
    name: 'Thiago'
  };

  // let obj2 = new Object();  /* Não é necessário realizar esse passo, o javascript automaticamente fará isso */
  obj2.name = 'Thiago';

  console.log(obj2);

  /* Toda vez que criarmos uma instância de um objeto, de modo formal ou literal, haverá um prototype associado.  */

})(window, document);