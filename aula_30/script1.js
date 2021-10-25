(function readyJS(win, doc) {
  'use strict';

  let confirmation = doc.querySelector('#confirmation');
  let color = doc.querySelector('#color');
  let gender = doc.getElementsByName('gender');
  let btn_submit = doc.querySelector('#btn-submit');
  let btn_clear = doc.querySelector('#btn-clear');

  let form1 = doc.querySelector('#form1');
  let name = doc.querySelector('#name');
  let message = doc.querySelector('#message');
  let lengthArea = doc.querySelector('#lengthArea');

  btn_clear.addEventListener("click", function () {
    info.innerHTML = '';
    message.removeAttribute('disabled', 'disabled');
    lengthArea.innerHTML = '';
  });

  confirmation.checked == false;
  color.selectedIndex == 0

  message.addEventListener('keyup', countArea, false);

  /* Checkbox */

  function termsChecked() {
    console.clear();
    console.log('Accept the terms: ' + confirmation.checked);
  }

  confirmation.addEventListener('change', termsChecked, false);

  function colorValidate(event) {
    console.clear();
    if (event.target.selectedIndex == 0) {
      alert('Select the color');
    } else {
      console.log("Color: " + color[event.target.selectedIndex].value);
    }
  }
  color.addEventListener('change', colorValidate, false);

  function checkGender(event) {
    console.clear();
    if (event.target.value == 'male') {
      console.log('Gender: male');
    } else {
      console.log('Gender: female');
    }
  }

  for (let i = 0; i < gender.length; i++) {
    gender[i].addEventListener('click', checkGender, false);
  }

  function countArea(event) {
    lengthArea.innerHTML = "Characters: <span class='destaque2'>" + event.target.textLength + "</span> - (max = 50)";
    if (event.target.textLength > 50) {
      message.setAttribute('disabled', 'disabled');
    }
  }

  // let gallery = doc.querySelector('.gallery');
  // let files = doc.querySelector('#img');

  // function imgPreview(event) {
  //   gallery.innerHTML = '';
  //   let files = event.target.files;
  //   for (let i = 0; i < files.length; i++) {
  //     if (files[i].size > 300000) {
  //       alert('Very large image!\nMax size = 300K');
  //     } else {
  //       let reader = new FileReader();
  //       reader.onload = function (event) {
  //         let urlImg = event.target.result;
  //         let newImg = doc.createElement('img');
  //         newImg.setAttribute("src", urlImg);
  //         newImg.style = 'width: 300px;margin: 5px;';
  //         gallery.appendChild(newImg);
  //       }
  //       reader.readAsDataURL(files[i]);
  //     }
  //   }
  // }

  // files.addEventListener('change', imgPreview, false);

  function submitForm(event) {
    event.preventDefault();
    console.clear();

    if (name.value == "") {
      alert('Name is required!');
    } else if (message.value == "") {
      alert('Messsage is required!');
    } else if ((!gender[0].checked) && (!gender[1].checked)) {  /* Radio */
      alert('Select the gender');
    } else if (color.selectedIndex == 0) {  /* Select */
      alert('Select the color');
    } else if (confirmation.checked == false) {   /* Checkbox */
      alert('Accept the terms');
    } else {
      info.innerHTML = '';
      let gen;
      if (gender[0].checked) {
        gen = "male";
      } else {
        gen = "female";
      }
      let ajax = new XMLHttpRequest();
      let params = 'name=' + name.value + '&message=' + message.value + '&gender=' + gen + '&color=' + color.value + '&confirmation=' + confirmation.checked;
      ajax.open('POST', 'controller.php');
      ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      ajax.onreadystatechange = function () {
        if (ajax.status === 200 && ajax.readyState === 4) {
          let json = JSON.parse(ajax.responseText);
          info.innerHTML += `<hr><span class='destaque2'>Data submitted:</span><br><br>Name: ${json.name}<br>Message: ${json.message}<br>Gender: ${json.gender}<br>Color: ${json.color}<br>Accept the terms: ${json.confirmation}<br>State: ${json.state}<br>City: ${json.city}<hr><br>`
          console.log('Name: ' + json.name + '\nMessage: ' + json.message + '\nGender: ' + json.gender + '\nColor: ' + json.color + '\nAccept the terms: ' + json.confirmation + '\nState: ' + json.uf + '\nCity: ' + json.city);
        }
      };
      ajax.send(params);
    }
  }

  form1.addEventListener('submit', submitForm, false);

})(window, document);