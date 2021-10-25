(function readyJS(win, doc) {
  'use strict';

  let check = doc.querySelector('#check');
  let sel = doc.querySelector('#sel');
  let radio = doc.getElementsByName('gender');
  let btn_submit = doc.querySelector('#btn-submit');

  check.checked == false;
  sel.selectedIndex == 0

  /* Checkbox */

  function termsChecked() {
    console.clear();
    console.log('Accept the terms: ' + check.checked);
  }

  check.addEventListener('change', termsChecked, false);

  /* Select */
  // console.log("select: " + sel);
  function selValidate(event) {
    console.clear();
    if (event.target.selectedIndex == 0) {
      alert('Select the color');
    } else {
      console.log("Color: " + sel[event.target.selectedIndex].value);
    }
  }
  sel.addEventListener('change', selValidate, false);

  /* Radio */
  // console.log("radio: " + radio);
  function radioTest(event) {
    console.clear();
    if (event.target.value == 'Male') {
      console.log('Gender: Male');
    } else {
      console.log('Gender: Female');
    }
  }

  for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', radioTest, false);
  }

  /* Button submit */
  // console.log("submit: " + btn_submit)
  function submitForm(event) {
    event.preventDefault();

    if ((!radio[0].checked) && (!radio[1].checked)) {  /* Radio */
      alert('Select the gender');
    } else if (sel.selectedIndex == 0) {  /* Select */
      alert('Select the color');
    } else if (check.checked == false) {   /* Checkbox */
      alert('Accept the terms');
    } else {
      alert('Form submitted!');
    }
  }

  btn_submit.addEventListener('click', submitForm, false);

})(window, document);