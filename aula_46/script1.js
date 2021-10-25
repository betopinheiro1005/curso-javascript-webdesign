(function (win, doc) {
  'use strict';

  let a = 'Thiago';
  let b = 'Webdesign em Foco';
  let number1 = 5;
  let number2 = 10;

  console.log(a + ' trabalha na ' + b);
  console.log(`${a} trabalha na ${b}`);
  console.log(`A soma dos números ${number1 + number2}`);
  doc.querySelector('.result').innerHTML = `${a} trabalha na ${b}`;

})(window, document);