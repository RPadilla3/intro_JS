var className = "front end";

console.log('This is my message');
console.log(className);



var day = 19; // "data type" of "number"
var pi = 3.1415926; // "data type" of "number"
var month = "10"; // "data type" of "string"

// var var =  '' Can't use var because its a keyword



var iRock = true; // "data type" of "boolean" (either true or false)

//variable declaration          value assignment
       var pet                    = "Vincent";
           pet = "Pod"; //variable assignment


var spouse; //  It is  "UNDEFINED" No data type. var is ust a name

console.log(spouse); //prints 'undefined'

spouse = "Samara" // Value assignment / variable instantiation (only used for the first time)

console.log(spouse); // prints 'Samara'

var wife = spouse;

console.log(spouse);

spouse = false;

console.log(spouse);


/* CONDITIONALS */

var year = 2000;

if (year > 1999) {
  // If the stuff in parenthesis above is true.. execute this code
    console.log("A New Millenium");
}
  else {
    // If the stuff in parentheses above is not true.. execute this code
    console.log('You\'re living in the past.') // Using an "escaped" value we can print the apostrophe
  }


/*
>, <, <=, >=,
Generally used with numbers, but if used with strings
it compares them lexigraphic/alphabetical order
*/

/*

  == (simple equality)   '1' == 1 = True
  === (Strict euality)   '1' === 1 = False

*/

// keyword      name       argument list              fn block
function        sum            (x, y)                    {
  //This is where all the code for the function goes..

  //x + y; //This way the result only exists on this line. Theres no way to get to it later.

  var result = x + y; // The Variable result only exists in the function.
  console.log('inside the sum function', result);

// Keyword & Value
   return result; // Go find the value that result points to and send it back.


} // End of the function

// use the name of the function to run it
var theNumber = sum(4, 7); //4 will become x and 7 will become y in the function.
console.log(theNumber);

console.log(  sum(theNumber, 10)   );

console.log( sum( sum(1, 1), sum(2,2) ) );
//            sum(       2     ,   4 ); = 6


var companyName = 'The ' + 'Iron ' + 'Yard'; // The Iron Yard

console.log(result); //THIS WILL NOT WORK because result is only available inside the sum function
