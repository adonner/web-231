/*

; Author: Adam Donner
; Date: 13 March 2019
; Modified by:
; Description: Creates a program to create an
; object and display each object in a single
; line.
;============================================
*/


/*
Expected output:
  Adam Donner
  Exercise 6.3
  Todays Date

  {ID: 506, name: Rick Deckard, requester: Frank Johnson}
*/


// start program

const header = require('../donner-header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Exercise 6.3"));  // This assigns values to the donner-header.js file and outputs it to the console.log.
console.log("") // Line break

// This is where I create an object containing the support information.
const support = {
  id: "506",
  name: "Rick Deckard",
  requestor: "Frank Johnson"

}

// This is where I output each of the fields in a single string.
console.log('{id: ' + support.id + ', name: ' + support.name + ", requester: " + support.requestor +"}")

