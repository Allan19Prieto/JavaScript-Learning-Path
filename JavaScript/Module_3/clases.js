// exlample of classe of a Car
class Car {
    constructor(color, model, year) {
        this.color = color;
        this.model = model;
        this.year = year;
    }

    turboOn() {
        console.log("turboo is on!")
    }
}

let muCar = new Car("red", "Toyota", 2020);
console.log(muCar.color);

// a example of polymorphism with classes
class Bird {
    useWings() {
        console.log("Flying");
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Swimming");
    }
}
var balEagle = new Eagle();
var kingPenguin = new Penguin();
balEagle.useWings(); // Flying, Barely flapping!
kingPenguin.useWings(); // Swimming

