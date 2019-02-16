/* 
============================================
; Title: donner-assignment-2.4.js
; Author: Adam Donner
; Date: 15 February 2019
; Description: Demonstrates the to usage of 
; functions and variables to output three
; sentences.
;===========================================
*/ 

// start program

/*
    Expected Output:
    Hello my name is Adam Donner!
    
    Today is February 15, 2019 and the current temperature is 33.6 degrees.
    
    I am 37 years old and my savings goal is 1000000 dollars.
*/


//start program

// Creates a function fullName for my first and last name separated by a space.
function fullName (firstName, lastName) {
    return firstName + " " + lastName;
}

// Creates a variable that calls the function fullName and assigns my first and last name values.
var name = fullName("Adam", "Donner");

// Creates a function dateWriter with month day and year separated by space and adding a , after day.
function dateWriter (year, month, day) { 
    return month + " " + day + ", " + year;
}

 // Creates a variable that call function dateWrite and assigns today's date.
var today = dateWriter("2019", "February", "15");

// Creates a function to output the temperature sets with number to a fixed number of positions provided by the variable.
function formatNumber (number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

// Creates a variable temperature that calls formatNumber and assigns todays temperature with a fixed position of 1.
var temperature = formatNumber(33.6,1);

// Creates function convertToInt and parses the received string value to an integer.
function convertToInt (intString) {
  return parseInt(intString);
}

// Creates a variable age that calls convertToInt and assigns a string value of my actual age.
var age = convertToInt("37");

// Creates function convertToFloat and parses the provided string to float.
function convertToFloat (floatString) {
  return parseFloat(floatString);
}

// Creates a variable savings that calls convertToFloat and assigns a string value of my actual savings goal.
var savings = convertToFloat("1000000");

// Outputs the expected results of the program.
console.log("Hello my name is " + name + "!");

console.log("") // Creates a blank line.

console.log("Today's date is " + today +" and the current temperature is " + temperature + " degrees.");

console.log("") // Creates a blank line.

console.log("I am " + age +" years old and my savings account goal is " + savings + " dollars.");


//end program