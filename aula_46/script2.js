(function (win, doc) {
  'use strict';

  let arr = [0, 1, 2, 'a', 'b'];

  doc.querySelector('.result').innerHTML = "";
  arr.map((elem, ind, obj) => {
    doc.querySelector('.result').innerHTML += `${elem}
  `
  });

})(window, document);