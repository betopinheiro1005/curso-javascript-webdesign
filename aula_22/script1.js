(function readyJS(win, doc) {
  'use strict';

  let btn = doc.querySelector("#btn");
  let menu = doc.querySelector(".menu");
  let body = doc.querySelector("body");

  function toggle(event) {
    if (menu.classList.contains("show")) {
      // console.log(btn.attributes);
      menu.classList.remove("show");
      btn.setAttribute("src", "button.png");
      body.style.backgroundColor = 'white';
    } else {
      // console.log(btn.attributes);
      menu.classList.add("show");
      btn.setAttribute("src", "close.png");
      body.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';
    }
  }
  btn.addEventListener("click", toggle, false);
})(window, document);