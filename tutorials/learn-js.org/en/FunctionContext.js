/*
    Create bound copies of printFullName and printDetails to person called boundPrintFullName and boundPrintDetails.
*/

/* EXAMPLE */
var person = {
    firstName : "John",
    lastName : "Smith",
    age : 23
};
function printFullName()
{
    console.log(this.firstName + " " + this.lastName);
}

function printDetails()
{
    console.log(this.firstName + " is " + this.age + " years old");
}

// TODO: create bound copies of printFullName and printDetails.
var boundPrintFullName;
var boundPrintDetails;
boundPrintFullName();
boundPrintDetails();





/* SOLUTION */
let person = {
    firstName : "Skyelah",
    lastName : "Bay",
    age : 24
};

function printFullName()
{
    console.log(`${this.firstName} ${this.lastName}`);
}
function printDetails()
{
    console.log(`${this.firstName} is ${this.age} years old"`);
}

let boundPrintFullName = printFullName.bind(person);
let boundPrintDetails = printDetails.bind(person);

boundPrintFullName(); //Skyelah Bay
boundPrintDetails();  //Skyelah is 24 years old
