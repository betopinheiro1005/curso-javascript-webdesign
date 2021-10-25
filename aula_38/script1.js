(function readyJS(win, doc) {
  'use strict';

  /* A única desvantagem da API Fetch é o suporte pra navegadores antigos que infelizmente não existe. */

  let btn = doc.querySelector('#btn');
  let result = doc.querySelector('#result');

  /* Na função abaixo fizemos uma requisição ao arquivo controller.php e setamos o mode cors para nos dar autorização de fazer requisições no lado backend. */

  function fetchSend() {
    let params = {
      method: 'POST',
      mode: 'cors',
      cache: 'default'
    };
    fetch('controller.php', params)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (data) {
        result.innerHTML = data.name + ' tem ' + data.age + ' anos de idade!';
      });
  }
  btn.addEventListener('click', fetchSend, false);

})(window, document);