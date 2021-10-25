import ClassJob from './ClassJob.js';

/* Quando trabalhamos com classes em Javascript não utilizamos a palavra reservada function e sim vamos direto ao nome dos métodos. Outro detalhe são as palavras reservadas super() e this. Utilize this para se referir a dados internos da própria classe e o super para se referir a uma classe pai. */

/* A única desvantagem do uso de classes é que em virtude de ser um recurso novo, talvez tenha alguma dificuldade para implementá - lo em navegadores antigos. */

export default class ClassPerson extends ClassJob {

  constructor() {
    super();
  }

  setPerson(name, age) {
    this.name = name;
    this.age = age;
  }

  getEmp() {
    return 'get emp da ClassPerson';
  }

  getData() {
    return this.name + ' possui ' + this.age + ' anos de idade e trabalha na empresa ' + super.getEmp();
  }

}