(function readyJS(win, doc) {
  'use strict';

  /* Expressões regulares são regras utilizadas, principalmente, para manipulação de strings, seja para localizar, substituir ou separar textos.Utilizando regras, você consegue manipular pedaços de strings. */

  let msg = document.querySelector("#msg").innerHTML;
  let info = document.querySelector("#info");
  let bt1 = document.querySelector("#bt-1").addEventListener("click", busca1, false);
  let bt2 = document.querySelector("#bt-2").addEventListener("click", busca2, false);
  let bt3 = document.querySelector("#bt-3").addEventListener("click", busca3, false);
  let bt4 = document.querySelector("#bt-4").addEventListener("click", busca4, false);
  let bt5 = document.querySelector("#bt-5").addEventListener("click", busca5, false);
  let bt6 = document.querySelector("#bt-6").addEventListener("click", busca6, false);
  let bt7 = document.querySelector("#bt-7").addEventListener("click", busca7, false);
  let bt8 = document.querySelector("#bt-8").addEventListener("click", busca8, false);
  let bt9 = document.querySelector("#bt-9").addEventListener("click", busca9, false);
  let bt10 = document.querySelector("#bt-10").addEventListener("click", busca10, false);
  let bt11 = document.querySelector("#bt-11").addEventListener("click", busca11, false);
  let bt12 = document.querySelector("#bt-12").addEventListener("click", busca12, false);
  let bt13 = document.querySelector("#bt-13").addEventListener("click", busca13, false);

  let regex, result;

  /* Método Match: Busca a combinação de valores de acordo com a regra.As expressões regulares são escritas dentro de 2 barras // e após a última barra podem ser inseridas opcionalmente flags de configuração.
  */

  /* Abaixo segue algumas formas de regras padrões das expressões regulares:

    a | b - significa a ou b
    [ab] - significa a ou b
    [A - Za - z0 - 9] - captura todos as letras e numerais
    (Palavra) - parêntese captura exatamente o que está dentro
    (150) + - repetidor mais pega a captura mais o resto do seu antecessor
    . - captura qualquer coisa
    ^ $ - sequencialmente pega o início(^) e o fim($) da expressão
    r{ 2 } - repetidor n vezes
    ss ? - pode ou não ter o caracter antecessor
   */

  function ocorrencias() {
    let ocorrencias = "";
    for (let i = 0; i < result.length; i++) {
      ocorrencias += result[i] + ", ";
    }
    info.innerHTML += `<p>Ocorrências: = ${ocorrencias}</p><hr>`;
  }

  function busca1() {
    console.clear();
    info.innerHTML = "";
    regex = /e/;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca a primeira ocorrência de 'e'. Indica sua posição (indice).</p>`;
    info.innerHTML += `<p>Primeira ocorrência de '${result[0]}' = ..............index: ${result['index']}</p><hr>`;
  };

  function busca2() {
    console.clear();
    info.innerHTML = "";
    regex = /e/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca todas as ocorrências de 'e'.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca3() {
    console.clear();
    info.innerHTML = "";
    regex = /e/gi;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca todas as ocorrências de 'e' ou 'E'</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca4() {
    console.clear();
    info.innerHTML = "";
    regex = /Período/gi;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca todas as ocorrências de 'Período' - case insensitive</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca5() {
    console.clear();
    info.innerHTML = "";
    regex = /p|e/gi;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca todas as ocorrências de 'p' ou 'e' - case insensitive</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca6() {
    console.clear();
    info.innerHTML = "";
    /* /[pe]/  Corresponde a qualquer um dos caracteres cercados.*/
    regex = /[pe]/gi;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca por qualquer um dos caracteres cercados pelos colchetes (p ou e) - case insensitive.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca7() {
    console.clear();
    info.innerHTML = "";
    /* /[A-Z]/g Corresponde a qualquer um dos caracteres de A a Z */
    regex = /[A-Z]/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca por qualquer um dos caracteres de A a Z.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca8() {
    console.clear();
    info.innerHTML = "";
    regex = /[A-Z0-9]/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca por qualquer um dos caracteres de A a Z ou número de 0 a 9.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca9() {
    console.clear();
    info.innerHTML = "";
    regex = /(Período)|[0-9]/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca por 'Periódo' ou por número de 0 a 9.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca10() {
    console.clear();
    info.innerHTML = "";
    regex = /(Período)|(15)/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca por 'Período' ou por '15'.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca11() {
    console.clear();
    info.innerHTML = "";
    regex = /(Período)|(1500+)/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca por 'Período', '1500' ou '1500' seguido por um ou mais zeros.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca12() {
    console.clear();
    info.innerHTML = "";
    regex = /r{2}/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca por todas as ocorrências de 'rr'.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca13() {
    console.clear();
    info.innerHTML = "";
    regex = /rri?/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca por todas as ocorrências de 'rr' ou de 'rri'.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };


})(window, document);