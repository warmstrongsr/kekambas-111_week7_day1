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


// Boolean
var trueBool = true;
console.log(trueBool);
console.log(typeof trueBool);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);


// Undefined
var something;
console.log(something);
console.log(typeof something);

// Null
var someNull = null;
console.log(someNull);
console.log(typeof someNull); // A Bug in the code!

var myCity;

console.log(myCity);
console.log(typeof myCity);

myCity = 'Chicago';
console.log(myCity);
console.log(typeof myCity);


// Object Data Types

// Object
var myObject = {};

console.log(myObject);
console.log(typeof myObject);

var anotherObject = {
    prop1: 'Hello World',
    abc: 123
};

console.log(anotherObject);
console.log(typeof anotherObject);

// Array
var firstArray = [];
console.log(firstArray);
console.log(typeof firstArray);

var newArray = ['Brian', 'Michael', 'Danielle', 'Frank']
console.log(newArray);
console.log(typeof newArray);

// Function
function abc(){};

console.log(abc);
console.log(typeof abc);


// Accessing properties from an object
var person = {
    first: 'Emily',
    last: 'Murphy',
    languages: ['JavaScript', 'Python']
};

console.log(person);

// Bracket Notation
console.log(person['first']);
// Dot Notation
console.log(person.last);

console.log(person.languages);

// When accessing properties in an array (aka the indices), use bracket notation
console.log(person.languages[0])
console.log(person.languages[1])

// All Array objects also have a "length" property
console.log(person.languages.length);

// Clear the console
console.clear();
