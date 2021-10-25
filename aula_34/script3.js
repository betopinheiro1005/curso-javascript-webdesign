(function readyJS(win, doc) {
  'use strict';

  function person(name, func) {
    this.name = name;
    this.friends = ['Carl', 'Robert'];
    this.func = func;
  }

  /* Utilizando prototypes para criação de variáveis e funçoes, ganha-se em performance,
  porém ao se fazer isso todas as instâncias de objeto criadas herdarão essas variáveis e funções */

  /* Porisso recomenda-se que todas as propriedades que irão alterar de alguma forma deverão ficar dentro da function, enquanto as que permanecerão constantes deverão ser utilizadas através do prototype. */

  person.prototype.city = 'BH';

  person.prototype.salario = function () {  /* A função salário irá aparecer dentro do prototype */
    if (this.func === 'manager') {
      return 3000;
    } else if (this.func === 'user') {
      return 100;
    }
  }

  let obj = new person('Thiago', 'manager');
  obj.friends.push('Juliet');

  let obj2 = new person('Thais', 'user');

  console.log(obj);
  console.log(obj2);

  console.log(obj.name + " - Salário: " + obj.salario());
  console.log(obj2.name + " - Salário: " + obj2.salario());

})(window, document);