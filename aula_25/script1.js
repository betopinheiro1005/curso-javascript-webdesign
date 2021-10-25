(function readyJS(win, doc) {
  'use strict';

  let info = document.querySelector("#info");
  let bt1 = document.querySelector("#bt-1").addEventListener("click", event1, false);
  let bt2 = document.querySelector("#bt-2").addEventListener("click", event2, false);
  let bt3 = document.querySelector("#bt-3").addEventListener("click", event3, false);
  let submit = document.querySelector("#bt-submit");
  let clear = document.querySelector("#bt-clear");

  let form1 = doc.querySelector('#form1');
  let inpText = doc.querySelector('#inpText');
  let txtArea = doc.querySelector('#txtArea');
  let lengthArea = doc.querySelector('#lengthArea');

  clear.addEventListener("click", clearInfo, false);

  function countArea(event) {
    lengthArea.innerHTML = "Characters: <span class='destaque2'>" + event.target.textLength + "</span> - (max = 50)";
    if (event.target.textLength > 50) {
      txtArea.setAttribute('disabled', 'disabled');
    }
  }

  function clearInfo() {
    console.clear();
    info.innerHTML = '';
    inpText.value = '';
    txtArea.value = '';
    lengthArea.innerHTML = '';
    form1.action = "controller.php";
    // inpText.style.backgroundColor = '#fff';
  }

  function event1() {
    clearInfo()
    console.log(form1);
    info.innerHTML += `<hr><p class='destaque2'>Form attributes: </p><hr>`;
    info.innerHTML += `<p>name: ${form1.name}</p>`;
    info.innerHTML += `<p>id: ${form1.id}</p>`;
    info.innerHTML += `<p>method: ${form1.method}</p>`;
    info.innerHTML += `<p>action: ${form1.action}</p><hr>`;
  };

  function event2() {
    clearInfo();
    form1.action = 'teste.php';
    console.log(form1);
    info.innerHTML += `<hr><p class='destaque2'>Form attributes: </p><hr>`;
    info.innerHTML += `<p>name: ${form1.name}</p>`;
    info.innerHTML += `<p>id: ${form1.id}</p>`;
    info.innerHTML += `<p>method: ${form1.method}</p>`;
    info.innerHTML += `<p>action: <span class="destaque">${form1.action}</span></p><hr>`;
  };

  function event3() {
    clearInfo();
    // inpText.style.backgroundColor = '#ccc';
    txtArea.removeAttribute('disabled', 'disabled');
    inpText.value = 'Thiago';
    txtArea.value = 'Hello world!';
    console.log(inpText);
    console.log(txtArea);
    txtArea.addEventListener('keyup', countArea, false);
  };

  function submitForm(event) {
    event.preventDefault();

    if (inpText.value == "") {
      alert('Field Name is required!');
    } else if (txtArea.value == "") {
      alert('Field Messsage is required!');
    } else {
      alert('Form submitted!');
    }
    // clearInfo();
  }

  submit.addEventListener('click', submitForm, false);

})(window, document);