(function (win, doc) {
    'use strict';

    let parent = doc.querySelector('.parent');
    let child = doc.querySelector('.child');
    let grandchild = doc.querySelector('.grandchild');
    let form = doc.querySelector('#form1');

    let info = doc.querySelector('#info');
    info.innerHTML = '';

    let refresh = document.querySelector("#refresh");
    refresh.addEventListener("click", function () {
        location.reload();
    });

    /* Eventos como focus e blur só funcionam em capturing */

    form.addEventListener('blur', function () {
        console.log('blur');
    }, true);

    form.addEventListener('focus', function () {
        console.log('focus');
    }, true);

})(window, document);