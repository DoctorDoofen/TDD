
// person.js

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says hello!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Argument must be a valid object');
    }
    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('age')) {
      throw new TypeError('Object must have name and age properties');
    }
    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (e) {
      return false;
    }
  }

  static greetAll(persons) {
    return persons.map(person => person.sayHello());
  }
}


module.exports = Person;
