/*
Create an object called `Teacher` derived from the `Person` class, and implement a method called `teach` 
which receives a string called `subject`, and prints out: [teacher's name] is now teaching [subject]
*/

/* EXAMPLE */
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");






/* SOLUTION */
let Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}
let Teacher = function() {
    this.teach = subject => console.log(`${this.name} is now teaching ${subject}`);
}

Teacher.prototype = new Person();
let him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");
