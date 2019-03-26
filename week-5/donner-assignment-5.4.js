/*
=============================================
; Title: donner-discussion-5.4.js
; Author: Adam Donner
; Date: 06 March 2019
; Description:
; This demonstrates the .map function.
;
;
;============================================



// start program



/*
  Expected output:
  Adam Donner
  Assignment 5.4
  Todays Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
*/


const header = require('../donner-header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Assignment 5.4"));  // This assigns values to the donner-header.js file and outputs it to the console.log.
console.log("") // Line break


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
}
];

var lastAndRank = composers.map(function(rankLname){
  return "Rating: " + rankLname.rating + "\n" + "Composer: " + rankLname.lastName
});

var genreAndLast = composers.map(function(classLast){
  return "Genre: " + classLast.genre + "\n" + "Composer: " + classLast.lastName
})

console.log("-- COMPOSER BY RATING --")

//This outputs the values of the composers variable in a well formatted list using .forEach
lastAndRank.forEach(function(rankAndLast){console.log(rankAndLast)+console.log("")});


console.log("-- COMPOSER BY GENRE --")

//This outputs the values of the composers variable in a well formatted list using .forEach
genreAndLast.forEach(function(lNameGenre){console.log(lNameGenre)+console.log("")});


//end program
