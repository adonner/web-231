/*
=============================================
; Title:  donner-assignment-4.3.js
; Author: Adam Donner
; Date:   2 March 2019
; Description: Creates an array and outputs
; the values using a function along with our
; well formated header.
;============================================
*/


/*
Expected output:
  Adam Donner
  Assignment 4.3
  Todays Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

// start program

// This calls a well formatted header.
const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 4.3"));

// This creates a line break.
console.log("")

// This creates a variable and assigns an array value of string values.
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// This creates a function that iterates the array and uses if to display the contents of the array
function getValue(arr, val) {
    for (var k=0; k < arr.length; k++) {
      if (arr[k] === val)
        console.log(arr[k]);
    }
}

//Output the string to the console.log.
console.log("--  DISPLAYING ARRAY ITEMS --");

  //This creates a for loop which displays all values of the array.
for (var x = 0; x < vehicles.length; x++) {
    console.log(vehicles[x]);
}
//Creates a line break.
console.log("");

//Output the string to the console.log.
console.log("-- SELECTED VALUE --");

// This uses the function to do a search for the selected text and outputs it to the console.log.
getValue(vehicles, "Motorcycle");  // This does a search for the selected text and outputs it to the console.log.

//Creates a line break.
console.log("");

//Output the string to the console.log.
console.log("-- SELECTED VALUE --");

// This uses the function to do a search for the selected text and outputs it to the console.log.
getValue(vehicles, "Bus");

// end program
