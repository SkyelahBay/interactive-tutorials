/*
    In this exercise, you do the following:
        1.  Connect the `firstName` and `lastName` to construct the variable `fullName`, 
            but with a space (`" "`) in between the first and last name.
        2. Multiply the variable `myNumber` by 2 and put the result in `meaningOfLife`.

EXAMPLE
var firstName = "John";
var lastName = "Smith";
var myNumber = 21;

// TODO: change the following code
var fullName = null;
var meaningOfLife = null;

console.log("The name is " + fullName);
console.log("The meaning of life is " + meaningOfLife);
*/



/* SOLUTION */
let firstName = "John",
    lastName = "Smith",
    myNumber = 21,
    fullName = `${firstName} ${lastName}`,
    meaningOfLife = myNumber * 2;

console.log(`The name is ${fullName}`);
console.log(`The meaning of life is ${meaningOfLife}`);
