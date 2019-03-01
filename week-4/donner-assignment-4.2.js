/*
=============================================
; Title:  donner-assignment-4.2.js
; Author: Adam Donner
; Date:   22 February 2019
; Description: Creates an array and outputs
; the values using a function along with our
; well formated header.
;============================================
*/


// start program

/*
Expected output:
  Adam Donner
  Assignment 4.2
  Todays Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

const header = require('../donner-header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Exercise 4.2"));  // This assigns values to the donner-header.js file and outputs it to the console.log.

console.log("")  // This creates a linebreak between our header and the displayed values in assigned in the array.

// This declares a variable of fruits and assigns it an array of string values.
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"]


// This creates a function to display the array that was declared in var = fruits.
function getFruit(arr) {
  for (var k = 0; k < arr.length; k++) {
      console.log(arr[k]);
  }
}

// This calls the function getFruits.
getFruit(fruits);


// end program
