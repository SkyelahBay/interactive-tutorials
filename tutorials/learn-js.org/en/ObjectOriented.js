/*
    Create a class called Person which accepts the name of a person as a string, and his/her age as a number. 

The Person class should have a method called `describe` which returns a string with the following syntax: 
    "`name`, `age` years old". 
So for example, if John is 19 years old then the function `describe` of his object will return "John, 19 years old".

EXAMPLE
// TODO: create the Person class using a function

var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());
*/



/* SOLUTION */
let Person = function(name, age){
    this.name = name;
    this.age = age;
    this.describe = () => `${this.name}, ${this.age} years old`;
}
let jack = new Person("Jack", 25);
let jill = new Person("Jill", 24);
console.log(`${jack.describe()}\n${jill.describe()}`);
