import ClassPerson from './class/ClassPerson.js';

let info = document.querySelector("#info");

info.innerHTML = '';

let person = new ClassPerson();
person.setPerson('Thiago', 18);
console.log(person.getData());
info.innerHTML = `<p>${person.getData()}</p>`