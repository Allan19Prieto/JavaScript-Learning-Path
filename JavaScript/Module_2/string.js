
var stringArray = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(stringArray.length);

//string !== arrays

var greet = 'Hello ';
var user = 'Lisa';

// console.log(greet.pop()); // this will cause an error because strings do not have array methods

console.log(greet + user); // Hello Lisa

console.log(greet.concat(user)); // Hello Lisa

// All stings hhave at theri disposal sereral built-in properties, but ther's a single
// property that is really useful:
greet.length; // returns the length of the string

//To read individual characrer at a specific index in a string, starting frorm
// Zero, I can use the charAt() method:
greet.charAt(0); // 'H'

// The concat() method joins two or more strings:
"wo".concat("rld"); // 'world'

// The indexOf returns the index of the first occurrence of a specified text in a string:
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

//The split method chops up the string into an array of sub-strings:
"ho-ho-ho".split('-'); // ['ho', 'ho', 'ho']

// There are also some metos to change the casing of strings. For example:
console.log(greet.toUpperCase());
console.log(greet.toLowerCase());