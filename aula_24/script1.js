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

  let regex, result;

  /* Método Match: Busca a combinação de valores de acordo com a regra.As expressões regulares são escritas dentro de 2 barras // e após a última barra podem ser inseridas opcionalmente flags de configuração.
  */

  /* Abaixo segue uma relação de caracteres já definidos pra se usar expressões regulares:

  \d - digitos
  \D - não digitos
  \w - alfa numéricos(números, letras, underline - não pega espaço nem caracteres acentuados)
  \s - espaços

  Repare nos dados acima que sempre que for o caracter definido maiúsculo, refere - se a uma negação daquele tipo de dado.

  */

  function ocorrencias() {
    let ocorrencias = "";
    for (let i = 0; i < result.length; i++) {
      ocorrencias += result[i] + ", ";
    }
    info.innerHTML += `<p>Ocorrências: = ${ocorrencias}</p><hr>`;
  }

  function ocorrencias2() {
    let ocorrencias = "";
    for (let i = 0; i < result.length; i++) {
      ocorrencias += `${i + 1}) ${result[i]} <br>`;
    }
    info.innerHTML += `<p>Ocorrências: = <br><br>${ocorrencias}</p><hr>`;
  }

  function ocorrencias3() {
    let ocorrencias = "";
    for (let i = 0; i < result.length; i++) {
      ocorrencias += `${result[i]}`;
    }
    info.innerHTML += `<p>Ocorrências: = <br><br>${ocorrencias}</p><hr>`;
  }

  function teste_email(email) {
    result = email.match(regex);
    if (result != null) {
      console.log(`${email} é válido!`);
      info.innerHTML += `<p>${email} é válido!</p>`;
    } else {
      console.log(`${email} é inválido!`);
      info.innerHTML += `<p>${email} é inválido!</p>`;
    }
  }

  function busca1() {
    console.clear();
    info.innerHTML = "";
    regex = /\d/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca pela ocorrência de números (0 a 9).</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca2() {
    console.clear();
    info.innerHTML = "";
    regex = /\D/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca todas as ocorrências de caracteres não numéricos.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca3() {
    console.clear();
    info.innerHTML = "";
    regex = /\w/gi;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca todas as ocorrências de caracteres alfa-numéricos e underscores (não busca por espaços, hífens, letras acentuadas, ce-cedilha, aspas ou caracteres especiais)</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca4() {
    console.clear();
    info.innerHTML = "";
    regex = /\W/gi;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca todas as ocorrências de caracteres que não sejam alfa-numéricos ou underscores.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca5() {
    console.clear();
    info.innerHTML = "";
    regex = /\s/g;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca por todas as ocorrências de espaços.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  function busca6() {
    console.clear();
    info.innerHTML = "";
    regex = /\S/gi;
    result = msg.match(regex);
    console.log(result);
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    info.innerHTML += `<p>Informação: Busca por tudo o que não é espaço.</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias();
  };

  /*
  Método Split
  Faz a separação do texto de acordo com a regra.
  */

  function busca7() {
    console.clear();
    info.innerHTML = "";
    regex = /\d/g;
    result = msg.split(regex);
    console.log(result);
    info.innerHTML += `<p>result: <span class='destaque2'>msg.split(${regex})</span></p>`;
    info.innerHTML += `<p>Informação: Faz a separação do texto de acordo com a regra. No exemplo, corta a string onde houver dígito. </p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias2();
  };

  /*
  Método replace
  Substitui nossa string de acordo com a regra
   */

  function busca8() {
    console.clear();
    info.innerHTML = "";
    regex = /\d/g;
    result = msg.replace(regex, function (x) {
      return "|" + x.toUpperCase() + "| ";
    });
    console.log(result);
    info.innerHTML += `<p>result: <span class='destaque2'>msg.replace(${regex}, callback)</span></p>`;
    info.innerHTML += `<p>Informação: A função callback executa a ação personalizada (no caso, insere cada número entre pipes).</p>`;
    info.innerHTML += `<p>Número de ocorrências = .............. ${result.length}</p><hr>`;
    ocorrencias3();
  };

  /*
  Método Search
  Pesquisa em uma string de acordo com a regra.Caso o retorno seja - 1 não existe aquela regra no seu texto.
  */

  function busca9() {
    console.clear();
    info.innerHTML = "";
    let regex = /\d/;
    let result = msg.search(regex);
    console.log(result);
    info.innerHTML += `<p>result: <span class='destaque2'>msg.search(${regex})</span></p>`;
    info.innerHTML += `<p>Informação: Faz a busca e apresenta a posição da primeira ocorrência. Se não houver nenhuma ocorrência retorna -1</p>`;
    info.innerHTML += `<p>Posição da 1ª ocorrência de digito = .............. index: ${result}</p><hr>`;
  };

  function busca10() {
    console.clear();
    info.innerHTML = "";
    regex = /^[a-z0-9.]+@[a-z0-9]+\.+[a-z]+(\.[a-z]+)?$/g;
    info.innerHTML += `<p>regex: <span class='destaque2'>${regex}</span></p>`;
    let email1 = "webdesignemfoco@gmail.com";
    let email2 = "webdesignemfoco@gmail";
    let email3 = "webdesign.emfoco@gmail.com";
    let email4 = "Webdesignemfoco@gmail.com";
    let email5 = "gonçalves@gmail.com";

    teste_email(email1);
    teste_email(email2);
    teste_email(email3);
    teste_email(email4);
    teste_email(email5);

    info.innerHTML += "<hr>";
  };

})(window, document);