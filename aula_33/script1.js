(function readyJS(win, doc) {

  'use strict';

  let form1 = doc.querySelector('#form1');

  //Submit form
  function sendForm(event) {
    event.preventDefault();
    let ajax = new XMLHttpRequest();
    let formData = new FormData(form1);
    let btn = doc.querySelector('#btn');
    let result = doc.querySelector('#result');
    let progress = doc.querySelector('.progress');
    ajax.open('POST', 'controller.php');
    ajax.onloadstart = function () {
      btn.value = 'Carregando...';
    };
    ajax.upload.onprogress = function (event) {
      if (event.lengthComputable) {
        result.innerHTML = '';
        progress.style.width = ((event.loaded * 100) / event.total) + '%';
        console.log("Carregado: " + progress.style.width);
        result.innerHTML += "Carregado: " + progress.style.width;
      }
    };
    ajax.onloadend = function () {
      btn.value = 'Salvar';
      progress.style.display = 'none';
      result.innerHTML = 'Foto carregada com sucesso!';
    };
    ajax.send(formData);
  }
  form1.addEventListener('submit', sendForm, false);

})(window, document);