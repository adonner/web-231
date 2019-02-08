/* 
============================================
; Title: donner-assignment-1.5.js
; Author: Adam Donner
; Date: 7 February 2019
; Description: This program demonstrates the
; use of JavaScript values and variables to 
; display the employment information of 3
; employees
;===========================================
*/ 

// start program

/*
    Expected Output:
    FOR EACH EMPLOYEE
    First Name
    Last Name
    Address
    Pay Rate
    Hire Date
*/

// Employee One Record:
var firstName1 = "Jean";
var lastName1 = "Grey";
var address1 = "14445 New Way, NY"
var payRate1 = 100.90;
var Date1 = new Date(2010,10,10);
var hireDate1 = Date1.toLocaleDateString();  //Coverts the date to include /

//Employee Two Record:
var firstName2 = "Jack";
var lastName2 = "Adams";
var address2 = "14445 New Way, NY"
var payRate2 = 100.50;
var Date2 = new Date(2011,9,18);
var hireDate2 = Date2.toLocaleDateString();  //Coverts the date to include /

//Employee Three Record:
var firstName3 = "Leroy";
var lastName3 = "Worden";
var address3 = "14445 New Way, NY"
var payRate3 = 100.80;
var Date3 = new Date(2013,12,12);
var hireDate3 = Date3.toLocaleDateString();  //Coverts the date to include /

                                            

// output
console.log("Employee 1")
console.log(firstName1);
console.log(lastName1);
console.log(address1);
console.log("$"+payRate1.toPrecision(4));  //Ensures there is only one digit after the "." in the patRate
console.log (hireDate1);
console.log("");

console.log("Employee 2")
console.log(firstName2);
console.log(lastName2);
console.log(address2);
console.log("$"+payRate2.toPrecision(4));  //Ensures there is only one digit after the "." in the patRate
console.log (hireDate2);
console.log("");

console.log("Employee 3")
console.log(firstName3);
console.log(lastName3);
console.log(address3);
console.log("$"+payRate3.toPrecision(4));  //Ensures there is only one digit after the "." in the patRate
console.log (hireDate3);


// end program