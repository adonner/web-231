/*
=============================================
; Title:  donner-assignment-3.3.js
; Author: Adam Donner
; Date:   21 February 2019
; Description: Displays the use of if/else
; statements and function to test variables
; and display the results.
;============================================
*/


// start program

/*
  Expected output:
  Adam Donner
  Exercise 3.3
  Today's Date
  // Expected output
  The enter key was pressed
*/


const header = require('../donner-header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Exercise 3.3"));  // This assigns values to the donner-header.js file and outputs it to the console.log.

let eventKeyCode = 13  // Declares a variable and assigns a value of 13.

switch (eventKeyCode){  // This creates a switch statement to test the values of the eventKeyCode variable.
  case 13:
    console.log("The enter key was pressed");
    break;
  case 16:
    console.log("The shift key was pressed");
    break;
  case 32:
    console.log("The spacebar key was pressed");
    break;
  case 8:
    console.log("the backspace / delete key was pressed")
    break;
  default:
    console.log("Unrecognized Key")  // This writes to the console.log if no other value in the switch is satisfied.
    break;
}


// end program
