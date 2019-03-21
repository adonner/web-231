/*
; Author: Adam Donner
; Date: 15 March 2019
; Description: Create an employee constructor
; object with four (4) parameters/field and
; outputs the results.
;============================================
*/


/*
Expected output:
  Adam Donner
  Exercise 7.2
  Todays Date

1 Thomas Edison Software Engineer
2 Benjamin Franklin Programmer
3 Nikola Tesla Project Manager
4 Charles Babbage Product Manager
5 Alexander Bell Business Analyst
*/

//start program

const header = require('../donner-header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Exercise 7.2"));  // This assigns values to the donner-header.js file and outputs it to the console.log.
console.log("") // Line break
function employeeIDs(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// This creates 4 new objects with employee information.
const employees = [
  new employeeIDs(1, 'Thomas', 'Edison', 'Software Engineer'),
  new employeeIDs(2, 'Benjamin', 'Franklin', 'Programmer'),
  new employeeIDs(3, 'Nikola', 'Tesla', 'Project Manager'),
  new employeeIDs(4, 'Charles', 'Babbage', 'Product Manager'),
  new employeeIDs(5, 'Alexander', 'Bell', 'Business Analyst'),
];

// This outputs the objects.
let index = 1
for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id + ' ' + employees[x].firstName+ " "+ employees[x].lastName + " " + employees[x].title)
  index++
}

//end program
