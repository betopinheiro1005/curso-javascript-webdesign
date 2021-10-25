(function (win, doc) {
    'use strict';

    let info = doc.querySelector('#info');
    info.innerHTML = '';

    let refresh = document.querySelector("#refresh");
    refresh.addEventListener("click", function () {
        location.reload();
    });

    let parent = doc.querySelector('.parent');
    let child = doc.querySelector('.child');
    let grandchild = doc.querySelector('.grandchild');

    parent.addEventListener('click', function () {
        console.log('parent');
        info.innerHTML += "parent<br>";
    }, false);
    child.addEventListener('click', function () {
        console.log('child');
        info.innerHTML += 'child<br>';
    }, false);
    grandchild.addEventListener('click', function () {
        console.log('grandchild');
        info.innerHTML += 'grandchild<br>';
    }, false);

})(window, document);