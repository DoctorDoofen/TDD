
// person-spec.js

// import { expect as _expect } from "chai";
// const expect = _expect;
// import Person, { greetAll } from "../problems/person";

const chai = require("chai");
const expect = chai.expect;
const Person = require("../problems/person");

describe("Person class", () => {
  let person1, person2;

  beforeEach(() => {
    person1 = new Person("Mai", 32);
    person2 = new Person("Erin", 28);
  });

  describe("constructor", () => {
    it("should set name and age properties correctly", () => {
      expect(person1).to.have.property("name", "Mai");
      expect(person1).to.have.property("age", 32);
    });
  });

  describe("sayHello()", () => {
    it("should return a greeting message with the person's name", () => {
      expect(person1.sayHello()).to.equal("Mai says hello!");
    });
  });

  describe("visit(otherPerson)", () => {
    it("should return a visit message", () => {
      expect(person1.visit(person2)).to.equal("Mai visited Erin");
    });
  });

  describe("switchVisit(otherPerson)", () => {
    it("should invoke the visit method of the other person", () => {
      expect(person2.switchVisit(person1)).to.equal("Erin visited Mai");
    });
  });

  describe("update(obj)", () => {
    context("with a valid object", () => {
      it("should update the person's name and age", () => {
        person1.update({ name: "Lulu", age: 57 });
        expect(person1.name).to.equal("Lulu");
        expect(person1.age).to.equal(57);
      });
    });

    context("with an invalid argument", () => {
      it("should throw a TypeError if the argument is not an object", () => {
        expect(() => person1.update("not an object")).to.throw(TypeError, 'Argument must be a valid object');
      });

      it("should throw a TypeError if the object does not have name and age properties", () => {
        expect(() => person1.update({ name: "Lulu" })).to.throw(TypeError, 'Object must have name and age properties');
      });
    });
  });

  describe("tryUpdate(obj)", () => {
    context("when update is successful", () => {
      it("should return true and update the person's properties", () => {
        const result = person1.tryUpdate({ name: "Lulu", age: 57 });
        expect(result).to.be.true;
        expect(person1.name).to.equal("Lulu");
        expect(person1.age).to.equal(57);
      });
    });

    context("when update is not successful", () => {
      it("should return false and not update the person's properties", () => {
        const result = person1.tryUpdate("not an object");
        expect(result).to.be.false;
        expect(person1.name).to.equal("Mai");
        expect(person1.age).to.equal(32);
      });
    });
  });

  describe("greetAll(persons)", () => {
    it("should return an array of greeting messages from all persons", () => {
      const persons = [person1, person2];
      const greetings = greetAll(persons);
      expect(greetings).to.eql(["Mai says hello!", "Erin says hello!"]);
    });
  });
});
