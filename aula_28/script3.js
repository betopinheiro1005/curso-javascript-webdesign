(function readyJS(win, doc) {
  'use strict';

  let info = document.querySelector("#info");

  setTimeout(counter, 3000);

  console.log('Hello');
  info.innerHTML += "<p>Hello</p>";
  function counter() {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      info.innerHTML += `<p>${i}</p>`;
    }
  }

  console.log('World');
  info.innerHTML += "<p>World</p>";

})(window, document);

