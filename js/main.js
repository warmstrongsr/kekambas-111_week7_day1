console.log('Hello from the main.js file!');

// Basics of JavaScript
// Comments using //

/*
    Multi-line Comment in JavaScript

    -- Variable Declaration in JavaScript --
    Primitive Data Types: String, Number, Boolean, Undefined, Null
    Object Types: Objects, Arrays, Functions
*/


// Variable Declaration
// use 'var' to declare a globally-scoped or function-scoped variable
// optional value - use camelCase to name variables

// var myName;

// console.log(myName);


// String Declaration
var myName = 'Brian';

// console.log() is equivalent to python's print() function
console.log(myName);
console.log(typeof myName);

// Strings can be created using '', "", or ``. The tick marks (``) have a special
// behavior to format the string
// Tick Marks + ${}  is equivalent to f"{}" * interpolated string
console.log("My name is ${myName}");
console.log('My name is ${myName}');
console.log(`My name is ${myName}`);


// NUMBER TYPES
// Integer

var myAge = 99;
console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14;
console.log(pi);
console.log(typeof pi);