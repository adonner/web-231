/*
=============================================
; Title:  donner-assignment-4.4.js
; Author: Adam Donner
; Date:   2 March 2019
; Description: Creates an array of 5 states
; and outputs the array in original order,
; alphabetical order, and a value chosen
; using filter.
;============================================

Expected output:
  Adam Donner
  Assignment 4.4
  Todays Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/

//start program

// This outputs a well formatted header.
const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Assignment 4.4"));

console.log("");

// This declares my array variable and assigns five values.
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// This creates a variable to for a check using the .filter.
var valueOne = "Iowa";

// This creates a function which does an if statement based on the passed in variables.
function getState(valueOne, valueTwo) {
  if (valueOne === valueTwo)
    return true;

}

// This declares a variable and uses filter to call a function and will output the value if the value of elementOne is in the array.
const result = states.filter(function (elem) {
  return getState(valueOne, elem);
})[0];


// This outputs the arry in the original order.
console.log("-- ORIGINAL ARRAY --");
states.forEach(function(states) {console.log(states)});

console.log("");

// This outputs the array in alphabetical order.
console.log("-- SORTED ARRAY --");
states.sort().forEach(function(states) {console.log(states)});
console.log("");

// This outputs the value of result.
console.log('-- SELECTED VALUE --');
console.log (result);


//end program
