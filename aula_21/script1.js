(function readyJS(win, doc) {
  'use strict';

  let body = document.querySelector("body");
  let image = document.querySelector("#spfc");
  let info = document.querySelector("#info");
  let bt1 = document.querySelector("#bt-1");
  let bt2 = document.querySelector("#bt-2");
  let bt3 = document.querySelector("#bt-3");
  let bt4 = document.querySelector("#bt-4");

  info.innerHTML = "";

  function exibeAtributos() {

    let atributos = image.getAttributeNames();

    for (let i = 0; i < image.attributes.length; i++) {
      info.innerHTML += `<p>${i + 1}) ${atributos[i]}:  "${image.getAttribute(atributos[i])}"</p>`;
    }
  }

  bt1.addEventListener("click", function () {
    console.clear();
    info.innerHTML = "";

    console.log(body);
    // body.style.backgroundColor = "rgba(0, 0, 255, 0.2)";

    info.innerHTML += "<p>Uso de <span class='destaque2'>attributes</span> e dos métodos <span class='destaque2'>getAttributesName()</span> e <span class='destaque2'>getAttribute()</span></p><hr>"
    info.innerHTML += "<p>Atributos da imagem:</p>"

    exibeAtributos();

  })

  bt2.addEventListener("click", function () {
    console.clear();
    info.innerHTML = "";

    console.log(image.hasAttribute("data-info"));
    console.log(image.hasAttribute("data-info2"));

    info.innerHTML = "<p>Uso do método <span class='destaque2'>hasAttribute</span></p><hr>";

    info.innerHTML += `<p>Tem o atributo data-info? .................. <span class='destaque'>${image.hasAttribute("data-info")}</span></p>`;
    info.innerHTML += `<p>Tem o atributo data-color? ................ <span class='destaque'>${image.hasAttribute("data-color")}</span></p>`;

  })

  bt3.addEventListener("click", function () {
    console.clear();
    info.innerHTML = "";

    info.innerHTML = "<p>Uso do método <span class='destaque2'>setAttribute</span></p><hr>";

    let attr = "data-color";

    console.log(image.setAttribute(attr, "red"));
    exibeAtributos();

    info.innerHTML += `<hr><p>inserido o atributo <span class='destaque'> ${attr}</span></p>`;
  })

  bt4.addEventListener("click", function () {
    console.clear();
    info.innerHTML = "";

    info.innerHTML = "<p>Uso do método <span class='destaque2'>removeAttribute</span></p><hr>";

    let attr = "id";

    console.log(image.removeAttribute(attr));
    exibeAtributos();

    info.innerHTML += `<hr><p>Removido o atributo <span class='destaque'> ${attr}</span></p>`;

  })

})(window, document);