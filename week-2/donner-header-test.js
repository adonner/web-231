/*
=============================================
; Title:  donner-header-test.js
; Author: Adam
; Date:   14 February 2019
; Description: Displays a formatted header
;============================================
*/


// start program

/*
    Expected Output:
  Name
  Assignment Week
  Todays Date
*/

// Calls function to display required information
const header = require('../donner-header.js');


// output
console.log(header.display("Adam", "Donner", "Week 2"));


// end program
