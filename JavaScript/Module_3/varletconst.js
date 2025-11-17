// var keyword

console.log(user); // error


var user = "Mary";

var user = "John";

console.log(user);

//var user;

let age;
age = 25;
age = age + 1;
console.log(age); // undefined

const name = "Alice";

name = "Bob";
console.log(name); // error

function scopeTest() {
    var localVar = "I'm local";
}

console.log(localVar); // error

