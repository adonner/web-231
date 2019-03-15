/*
; Author: Adam Donner
; Date: 15 March 2019
; Description: Creates a program that demonstrates
; the use of the try/catch/finally statement.
;============================================
*/


/*
Expected output:
Adam Donner
Exercise 6.2
Date: 3/15/2019

Catch clause: The difference between 150 and 200 is a negative number.
Finally clause reached...
*/

//start program

const header = require('../donner-header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Exercise 6.2"));  // This assigns values to the donner-header.js file and outputs it to the console.log.
console.log("") // Line break


try {
  var num1 = 150;
  var num2 = 200;
  var difference = num1 - num2;
  var checkNum = Math.sign(difference);
if (checkNum == -1 ) throw "The difference between " + num1 + " and " + num2 + " is a negative number.";
  console.log(difference);
} catch (err) {
  console.log("Catch clause: " + err);
} finally {
  console.log("Finally clause reached...");

}
