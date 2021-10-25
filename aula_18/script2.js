(function readyJS(win, doc) {
  'use strict';

  let btn = document.querySelector("#btn");

  function alertar(event) {
    console.log(event.target);
    console.log("id = " + event.target.id);
    console.log("innerHTML = " + event.target.innerHTML);
  }

  btn.addEventListener("click", alertar, false);

})(window, document);