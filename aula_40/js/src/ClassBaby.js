import ClassPerson from "./ClassPerson";

export default class ClassBaby extends ClassPerson {

  constructor() {
    super();
  }

  chorar() {
    return super.comer() + " e chorou";
  }
}