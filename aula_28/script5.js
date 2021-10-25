(function readyJS(win, doc) {
  'use strict';

  let info = document.querySelector("#info");
  info.innerHTML = '';

  let i = 0;
  function counter() {
    i++;
    console.log(i);
    info.innerHTML += `<p>${i}</p>`;

    if (i >= 5) {   /* a própria função chama o setTimeout até certo ponto. No caso acima utilizamos até 5. */
      return;
    }
    setTimeout(counter, 1000);
  }
  counter();

})(window, document);

