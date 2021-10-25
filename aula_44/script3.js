(function (win, doc) {
  'use strict';

  let parent = doc.querySelector('.parent');
  let child = doc.querySelector('.child');
  let grandchild = doc.querySelector('.grandchild');

  let info = doc.querySelector('#info');
  info.innerHTML = '';

  let refresh = document.querySelector("#refresh");
  refresh.addEventListener("click", function () {
    location.reload();
  });

  parent.addEventListener('click', function (event) {
    console.log('parent');
  }, false);
  child.addEventListener('click', function () {
    console.log('child');
  }, false);
  grandchild.addEventListener('click', function (event) {
    event.stopPropagation();  /* evita o efeito de bubbling */
    console.log('grandchild');
  }, false);

})(window, document);