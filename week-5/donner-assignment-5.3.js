`q`


Expected output:
  Adam Donner
  Assignment 5.3
  Todays Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5

*/

const header = require('../donner-header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Discussion 5.1"));  // This assigns values to the donner-header.js file and outputs it to the console.log.
console.log("") // Line break

// This creates an array like object assigning values.
 var composers =[
   {
      firstName: "Ludwig van",
      lastName: "Beethoven",
      genre: "Classical",
      rating: 8

   },
   {
    firstName: "Wolfgang Amadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10

 },
 {
  firstName: "Johann Sebastian",
  lastName: "Bach",
  genre: "Classical",
  rating: 9

},
{
  firstName: "Joseph",
  lastName: "Haydn",
  genre: "Classical",
  rating: 6

},
{
  firstName: "Franz",
  lastName: "Schubert",
  genre: "Classical",
  rating: 5

},
];

//This outputs text to the console.log
console.log("-- COMPOSERS --");

//This outputs the values of the composers variable in a well formatted list using .forEach
 composers.forEach(function(composer){
   console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating)});  // This uses a forEach to output our message.



//end program
