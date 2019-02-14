/* 
============================================
; Title: donner-assignment-1.5.js
; Author: Adam Donner
; Date: 10 February 2019
; Description: Demonstrates the to usage of 
; javascript to display employee records for
; 3 employees.
;===========================================
*/ 

// start program

/*
    Expected Output:
    FOR EACH EMPLOYEE:
    Employee Number
    First Name
    Last Name
    Address
    Pay Rate
    Hire Date
*/

// Variables:
const firstName1 = "Jean";
const lastName1 = "Grey";
const address1 = "14445 Alanon St. New Way, NY";
const payRate1 = 100.15.toFixed(1);
const Date1 = new Date(2010,10,10);
const hireDate1 = Date1.toLocaleDateString();

const firstName2 = "Jack";
const lastName2 = "Adams";
const address2 = "13256 Bondesen Ave. Long Island, NY";
const payRate2 = 100.55.toFixed(1);
const Date2 = new Date(2011,9,18);
const hireDate2 = Date2.toLocaleDateString();

const firstName3 = "Leroy";
const lastName3 = "Worden";
const address3 = "98574 Tucker Street Ramsey, NJ";
const payRate3 = 100.75.toFixed(1);
const Date3 = new Date(2013,12,12);
const hireDate3 = Date3.toLocaleDateString(); 

                                            
// output
console.log('Employee 1');
console.log('First Name: ' + firstName1);
console.log('Last Name: ' + lastName1);
console.log('Address: ' + address1);
console.log('Daily Compensation: $'+payRate1);
console.log ('Hire Date: ' + hireDate1);

console.log(""); // new line

console.log('Employee 2');
console.log('First Name: ' + firstName2);
console.log('Last Name: ' + lastName2);
console.log('Address: ' + address2);
console.log('Daily Compensation: $'+payRate2);
console.log ('Hire Date: '+hireDate2);

console.log(""); // new line

console.log('Employee 3');
console.log('First Name: '+firstName3);
console.log('Last Name: '+lastName3);
console.log('Address: '+address3);
console.log('Daily Compensation: $'+payRate3);
console.log ('Hire Date: '+hireDate3);


// end program