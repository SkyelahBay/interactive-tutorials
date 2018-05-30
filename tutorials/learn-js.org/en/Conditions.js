/*
In this exercise, you must construct an `if` inside the `checkNumber` function statement that checks if the number `myNumber` is equal to 42. If that is the case, the function must print out using `console.log` the word `correct`. If myNumber is not equal to 42, the function must print out using `console.log` the word `incorrect`.  You can name the argument passed to a function by supplying the name inside the parentheses.  For example, `function myFunction(myArgument)`.
*/

function checkNumber()
{
    // TODO: write your code here
}
//checkNumber(3); - false
//checkNumber(7); - false
//checkNumber(42); - true






/* Solution */
function checkNumber(num)
{
    console.log(num === 42 ? "correct" : "incorrect");
}
checkNumber(3);
checkNumber(7);
checkNumber(42);
