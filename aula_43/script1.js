(function (win, doc) {
  'use strict';

  let info = doc.querySelector('#info');
  info.innerHTML = '';

  let search = doc.querySelector('#search');

  function sendForm() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'controller.php');
    ajax.onreadystatechange = function () {
      if (ajax.status === 200 && ajax.readyState === 4) {
        console.log(ajax.responseText);
        info.innerHTML += `${ajax.responseText}<br>`;
      }
    };
    ajax.send();
  }
  search.addEventListener('keyup', debounce(sendForm, 3000), false);

  /* Debounce */
  /* A função debounce serve para darmos um pequeno delay na chamada da requisição, assim evitando que várias requisições sejam feitas consecutivamente. */
  /* A função debounce aciona o método setTimeout para realizar o delay antes do envio da requisição. */

  function debounce(func, wait) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    }
  }

})(window, document);