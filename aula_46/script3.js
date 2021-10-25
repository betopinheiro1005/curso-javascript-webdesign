(function (win, doc) {
  'use strict';

  doc.querySelector('.result').innerHTML = "";

  let a = 'Thiago';
  let b = 'Webdesign em Foco';

  function tag(string, ...values) {
    console.log(`
        ${values[1]} ${string[1]}
        `);
    doc.querySelector('.result').innerHTML = `
        ${values[1]} ${string[1]}
        `;
  }
  tag`${a} trabalha na empresa ${b}`;

})(window, document);