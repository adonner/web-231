/*
=============================================
; Title:  donner-assignment-3.4.js
; Author: Adam Donner
; Date:   22 February 2019
; Description: Creates a for loop to check
; the value of a static number and a random
; then display the results.  The for loop will
; run for 10 iterations.
;============================================
*/


// start program

/*
Expected output:
  Adam Donner
  Assignment 3.4
  Todays Date

  -- DO THE NUMBERS MATCH GAME --  // All chance numbers will be random, this is an example of the output for the match or mismatch.
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
  6 does not match 9!
  6 does not match 5!
*/



const header = require('../donner-header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Exercise 3.4"));  // This assigns values to the donner-header.js file and outputs it to the console.log.

console.log("\n--DO THE NUMBERS MATCH GAME--")  // Writes the name of this game to the console.log.


// This declares variable and assigns it a value of 6.
var checkNumber = 6;

// This function defines an output for a mismatch of two two variables and writes a string and the passed in variables to the console.log.
function logMismatch(checkNumber, chance) {
  console.log(checkNumber + " and " + chance + " do not match!");
}

// This function defines an output for a match of two two variables and writes a string and the passed in variables to the console.log.
function logMatch(checkNumber, chance) {
  console.log(checkNumber + " and " + chance + " do match!")
}

// This function returns a random integer value.
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// This for loop which declares a variable counter and assigns it a value of 0 to ensure the for loop will run for 10 iterations.
for (var counter = 0; counter < 10; counter++){
  var chance = randomNumber(); // This declares a local variable of chance and calls to randomNumber function to assign a random number.
  if (checkNumber === chance)  // An if statement checking the boolean value of checkNumber and chance for a match, if match call logMatch and pass values
    logMatch (checkNumber, chance);
  else
    logMismatch (checkNumber, chance);  // If the checkNumber and chance do not match call logMismatch and pass values
}

// end program
