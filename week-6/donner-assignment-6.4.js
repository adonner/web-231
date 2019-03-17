/*
; Author: Adam Donner
; Date: 15 March 2019
; Description: Creates a program that uses
; a nested object and outputs
;============================================
*/


/*
Expected output:
  Adam Donner
  Assignment 6.4
  Todays Date

  Ticket 105 was created on 3/15/2019 and assigned to employee Bob Jones (Programmer I).
*/

//start program

const header = require('../donner-header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Assignment 6.4"));  // This assigns values to the donner-header.js file and outputs it to the console.log.
console.log("") // Line break



// This is where I create a nested object which contains the requestor information and support person information.
var ticket  = {

  id: 105,
  name: 'Adam Donner',
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: 'High',


  person:{
    id: 523,
    firstName:'Bob',
    lastName:'Jones',
    jobTitle:'Programmer I'
  }


}
// This is where I output the ticket number, date and employee assignment.
console.log('Ticket ' + ticket.id +  ' was created on ' + ticket.dateCreated + ' and assigned to employee ' + ticket.person.firstName + ' '  + ticket.person.lastName + ' (' + ticket.person.jobTitle + ').');

//End Program
