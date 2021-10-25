(function readyJS(win, doc) {
  'use strict';

  let info = document.querySelector("#info");
  let bt_all = doc.querySelector("#bt-all");
  let bt_africa = doc.querySelector("#bt-africa");
  let bt_america = doc.querySelector("#bt-america");
  let bt_asia = doc.querySelector("#bt-asia");
  let bt_europa = doc.querySelector("#bt-europa");
  let bt_oceania = doc.querySelector("#bt-oceania");

  info.innerHTML = '';
  console.clear();

  /* Quando houver o clique no botão, ele fará uma requisição no banco de dados json e quando o status for igual a 200(ok) e o readyState for igual a 4(completo) ele receberá a resposta do banco e exibirá no console. */

  //Show database json
  function showAll() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'countries.json');
    ajax.onreadystatechange = function () {
      if (ajax.status === 200 && ajax.readyState === 4) {
        let res = JSON.parse(ajax.responseText);
        let countries = res.countries;

        info.innerHTML = '';
        console.clear();

        info.innerHTML += `<p style='font-weight: bold'>PAÍSES DE TODOS OS CONTINENTES</p>`;
        for (let i = 0; i < countries.length; i++) {
          if (countries[i].regiao_intermediaria !== null) {
            console.log(countries[i].nome + "\n" + countries[i].sub_regiao.regiao.nome + "\n" + countries[i].regiao_intermediaria.nome + "\n--------------------------------------");
            info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].sub_regiao.regiao.nome}<br>${countries[i].regiao_intermediaria.nome}<hr></p>`;
          } else {
            console.log(countries[i].nome + "\n" + countries[i].sub_regiao.regiao.nome + "\n" + countries[i].sub_regiao.nome + "\n--------------------------------------");
            info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].sub_regiao.regiao.nome}<br>${countries[i].sub_regiao.nome}<hr></p>`;
          }
          if (i === countries.length - 1) {
            info.innerHTML += `<p>TOTAL DE PAÍSES: <span class='destaque'>${i + 1}</span></p><hr>`;
          }
        }
      }
    };
    ajax.send();
  }

  bt_all.addEventListener('click', showAll, false);

  /* ============================================================================================= */

  function showAfrica() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'countries.json');
    ajax.onreadystatechange = function () {
      if (ajax.status === 200 && ajax.readyState === 4) {
        let res = JSON.parse(ajax.responseText);
        let countries = res.countries;

        info.innerHTML = '';
        console.clear();

        info.innerHTML += `<p style='font-weight: bold'>PAÍSES DO CONTINENTE AFRICANO</p>`;
        let count = 0;
        for (let i = 0; i < countries.length; i++) {
          if (countries[i].sub_regiao.regiao.nome === "África") {
            count++;
            if (countries[i].regiao_intermediaria !== null) {
              console.log(countries[i].nome + "\n" + countries[i].regiao_intermediaria.nome + "\n--------------------------------------");
              info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].regiao_intermediaria.nome}<hr></p>`;
            } else {
              console.log(countries[i].nome + "\n" + countries[i].sub_regiao.nome + "\n--------------------------------------");
              info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].sub_regiao.nome}<hr></p>`;
            }
          }
          if (i == countries.length - 1) {
            info.innerHTML += `<p>TOTAL DE PAÍSES: <span class='destaque'>${count}</span></p><hr>`;
          }
        }
      }
    };
    ajax.send();
  }

  bt_africa.addEventListener('click', showAfrica, false);

  /* ============================================================================================= */

  function showAmerica() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'countries.json');
    ajax.onreadystatechange = function () {
      if (ajax.status === 200 && ajax.readyState === 4) {
        let res = JSON.parse(ajax.responseText);
        let countries = res.countries;

        info.innerHTML = '';
        console.clear();

        info.innerHTML += `<p style='font-weight: bold'>PAÍSES DO CONTINENTE AMERICANO</p>`;
        let count = 0;
        for (let i = 0; i < countries.length; i++) {
          if (countries[i].sub_regiao.regiao.nome === "América") {
            count++;
            if (countries[i].regiao_intermediaria !== null) {
              console.log(countries[i].nome + "\n" + countries[i].regiao_intermediaria.nome + "\n--------------------------------------");
              info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].regiao_intermediaria.nome}<hr></p>`;
            } else {
              console.log(countries[i].nome + "\n" + countries[i].sub_regiao.nome + "\n--------------------------------------");
              info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].sub_regiao.nome}<hr></p>`;
            }
          }
          if (i == countries.length - 1) {
            info.innerHTML += `<p>TOTAL DE PAÍSES: <span class='destaque'>${count}</span></p><hr>`;
          }
        }
      }
    };
    ajax.send();
  }

  bt_america.addEventListener('click', showAmerica, false);

  /* ============================================================================================= */

  function showAsia() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'countries.json');
    ajax.onreadystatechange = function () {
      if (ajax.status === 200 && ajax.readyState === 4) {
        let res = JSON.parse(ajax.responseText);
        let countries = res.countries;

        info.innerHTML = '';
        console.clear();

        info.innerHTML += `<p style='font-weight: bold'>PAÍSES DO CONTINENTE ASIÁTICO</p>`;

        let count = 0;

        for (let i = 0; i < countries.length; i++) {
          if (countries[i].sub_regiao.regiao.nome === "Ásia") {
            count++;
            if (countries[i].regiao_intermediaria !== null) {
              console.log(countries[i].nome + "\n" + countries[i].regiao_intermediaria.nome + "\n--------------------------------------");
              info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].regiao_intermediaria.nome}<hr></p>`;
            } else {
              console.log(countries[i].nome + "\n" + countries[i].sub_regiao.nome + "\n--------------------------------------");
              info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].sub_regiao.nome}<hr></p>`;
            }
          }
          if (i == countries.length - 1) {
            info.innerHTML += `<p>TOTAL DE PAÍSES: <span class='destaque'>${count}</span></p><hr>`;
          }
        }
      }
    };
    ajax.send();
  }

  bt_asia.addEventListener('click', showAsia, false);

  /* ============================================================================================= */

  function showEuropa() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'countries.json');
    ajax.onreadystatechange = function () {
      if (ajax.status === 200 && ajax.readyState === 4) {
        let res = JSON.parse(ajax.responseText);
        let countries = res.countries;

        info.innerHTML = '';
        console.clear();

        info.innerHTML += `<p style='font-weight: bold'>PAÍSES DO CONTINENTE EUROPEU</p>`;

        let count = 0;
        for (let i = 0; i < countries.length; i++) {
          if (countries[i].sub_regiao.regiao.nome === "Europa") {
            count++;
            if (countries[i].regiao_intermediaria !== null) {
              console.log(countries[i].nome + "\n" + countries[i].regiao_intermediaria.nome + "\n--------------------------------------");
              info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].regiao_intermediaria.nome}<hr></p>`;
            } else {
              console.log(countries[i].nome + "\n" + countries[i].sub_regiao.nome + "\n--------------------------------------");
              info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].sub_regiao.nome}<hr></p>`;
            }
          }
          if (i == countries.length - 1) {
            info.innerHTML += `<p>TOTAL DE PAÍSES: <span class='destaque'>${count}</span></p><hr>`;
          }
        }
      }
    };
    ajax.send();
  }

  bt_europa.addEventListener('click', showEuropa, false);

  /* ===================================================================================================== */

  function showOceania() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'countries.json');
    ajax.onreadystatechange = function () {
      if (ajax.status === 200 && ajax.readyState === 4) {
        let res = JSON.parse(ajax.responseText);
        let countries = res.countries;

        info.innerHTML = '';
        console.clear();

        info.innerHTML += `<p style='font-weight: bold'>PAÍSES DA OCEANIA</p>`;

        let count = 0;
        for (let i = 0; i < countries.length; i++) {
          if (countries[i].sub_regiao.regiao.nome === "Oceania") {
            count++;
            if (countries[i].regiao_intermediaria !== null) {
              console.log(countries[i].nome + "\n" + countries[i].regiao_intermediaria.nome + "\n--------------------------------------");
              info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].regiao_intermediaria.nome}<hr></p>`;
            } else {
              console.log(countries[i].nome + "\n" + countries[i].sub_regiao.nome + "\n--------------------------------------");
              info.innerHTML += `<p><span class='destaque2'>${countries[i].nome}</span><br>${countries[i].sub_regiao.nome}<hr></p>`;
            }
          }
          if (i == countries.length - 1) {
            info.innerHTML += `<p>TOTAL DE PAÍSES: <span class='destaque'>${count}</span></p><hr>`;
          }
        }
      }
    };
    ajax.send();
  }

  bt_oceania.addEventListener('click', showOceania, false);

})(window, document);
