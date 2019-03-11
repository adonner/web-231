/*
=============================================
; Title: donner-assignment-5.2.js
; Author: Adam Donner
; Date: 06 March 2019
; Description: Creates an array of values and
; outputs those values using the .forEach
; function.
;============================================


Expected output:
  Adam Donner
  Assignment 5.2
  Todays Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

// start program

const header = require('../donner-header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Assignment 5.2"));  // This assigns values to the donner-header.js file and outputs it to the console.log.
console.log("") // Line break

// This creates a variable and assigns it an array of different food.
var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"]

//This uses the .forEach to output our foods variable.
foods.forEach(function(food){
  console.log(food)
});  // This uses a forEach to output our message.

//end program
