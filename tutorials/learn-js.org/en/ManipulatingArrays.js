/* In this tutorial, you must manipulate the array called `myArray` and do the following:
    1. Push the number 42 to the end of the array   2. Shift a variable from the beginning of the array

EXAMPLE
var myArray = [true, "What is the meaning of life?"];
// TODO: write your code here:

console.log(myArray[0]);
console.log(myArray[1]);
*/


/* SOLUTION */
let myArray = [true, "What is the meaning of life?"];

myArray.shift();
myArray.push(42);

console.log(`${myArray[0]} - ${myArray[1]}`); 
