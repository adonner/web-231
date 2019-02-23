/*
=============================================
; Title:  donner-assignment-3.2.js
; Author: Adam Donner
; Date:   20 February 2019
; Description: Displays the use of if/else
; statements and function to test variables
; and display the results.
;============================================
*/


// start program

/*
Expected Output:
Adam Donner
Assignment 3.2
Todays Date

// output from match () function
false
true

//output from if...else blocks
Truck and Car do not match!
Bike and Bike do match!
Four and Three do not match!
*/

// Calls function to display required header information
const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Assignment 3.2"));


// This sections declares the variables and assigns a value that will be tested in if/else statements.
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Three";
var testVar5 = "Four";
var testVar6 = "Bike";


// This function checks the values between two variables and assigns an output of true or false using the boolean === and an if/else statement.
function match(arg1,arg2){
  if (arg1 === arg2)
    return true;
  else
    return false;
}

// This function defines an output for a mismatch of two two variables and writes a string and the passed in variables to the console.log.
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
}

// This function defines an output for a match of two two variables and writes a string and the passed in variables to the console.log.
function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!")
}


console.log(""); // Inserts line break.

console.log(match(1,2));  // Runs the match function to check the value of the two assigned values and writes the result to console.log.

console.log(match(1,1));  // Runs the match function to check the value of the two assigned values and writes the result to console.log.

console.log("");  // Inserts line break.

// This if/else calls the functions match and misMatch based on the value of the provided variables.
if(match(testVar1, testVar2)) {
  logMatch(testVar1, testVar2);
}
else {
  logMismatch(testVar1, testVar2);
}
// This if/else calls the functions match and misMatch based on the value of the provided variables.
if(match(testVar3, testVar6)) {
  logMatch(testVar3, testVar6);
}
else {
  logMismatch(testVar3, testVar6);
}
// This if/else calls the functions match and misMatch based on the value of the provided variables.
if(match(testVar5, testVar4)) {
  logMatch(testVar5, testVar4);
}
else {
  logMismatch(testVar5, testVar4);
}








// output

