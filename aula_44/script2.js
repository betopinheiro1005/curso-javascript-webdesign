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
        console.log('this', this);  /* é o elemento que está chamando a função, no caso é parent */
        console.log('event', event.target);  /* é o elemento clicado */
    }, false);

})(window, document);