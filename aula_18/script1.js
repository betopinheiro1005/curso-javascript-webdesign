(function readyJS(win, doc) {
  'use strict';

  let btn = document.getElementById("btn");

  function alertar(event) {
    console.log(event);
    event.preventDefault();
    alert("form not send");
  }

  btn.addEventListener("click", alertar, false);


})(window, document);