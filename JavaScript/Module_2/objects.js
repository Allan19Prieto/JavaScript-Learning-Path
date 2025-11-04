
var user = {}; // create an object

//creating an object with propiertie and ther values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    speciañAbility: "young and ambitious",
    greeting: "Let's make some money"
}

// here's a table object:
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

// print the table object to the console
console.log(table);
// print table's color property
console.log(table.color);


var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

// save an empty object liretal to a variable, then use the dot notation to declare
// new properties on the fly
var house2 = {}; // empty object

house2.rooms = 4;
house2.color = "blue";
house2.priceUSD = 250000;

console.log(house); 

// brackets notation
var house3 = {};
house3["rooms"] = 4;
house3['color']= "pink";
house3["priceUSD"] = 12345;
console.log(house3); // {rooms: 4, color: 'pink', priceUSD: 12345}

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car);

/** Whith the brackets notations, i can add space characters inside property names, 
 * like this:
 */
car["number of doors"] = 4;
console.log(car);

// Example:
var arrOfKeys = ['speed', 'altitude','color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i= 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}