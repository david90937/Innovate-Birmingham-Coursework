let personOne = {
    name: 'Morgan',
    sayHello: function() {
        console.log(`Hi my name is ${this.name}`);
    }
}
let personTwo = {
    name: 'Alex',
    sayHello: function() {
        console.log(`Hi my name is ${this.name}`);
    }
}
let personThree = {
    name: 'Eli',
    sayHello: function() {
        console.log(`Hi my name is ${this.name}`);
    }
}
let personFour = {
    name: 'Polly',
    sayHello: function() {
        console.log(`Hi my name is ${this.name}`);
    }
}
let personFive = {
    name: 'Jace',
    sayHello: function() {
        console.log(`Hi my name is ${this.name}`);
    }
}

personOne.sayHello()
personTwo.sayHello()
personThree.sayHello()
personFour.sayHello()
personFive.sayHello()

// let Person = function (name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     return `Hi my name is ${this.name}. I live in ${this.city} and I am ${this.age} years old!`
// }
class Person {
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greet() {
        return `Hi my name is ${this.name}. I live in ${this.city} and I am ${this.age} years old!`
    }
}

let personSix = new Person('James', 'Birmingham', '27');
console.log(personSix.greet());
let personSeven = new Person('Alex', 'Birmingham', '31');
console.log(personSeven.greet());
let personEight = new Person('Morgan', 'Birmingham', '22');
console.log(personEight.greet());
let personNine = new Person('Jace', 'Birmingham', '33');
console.log(personNine.greet());
let personTen = new Person('Anna', 'Birmingham', '26');
console.log(personTen.greet());

class Vehicle {
    constructor(manufacturer, numberOfWheels, vehicleType){
        this.maker = manufacturer;
        this.wheels = numberOfWheels;
        this.type = vehicleType;
    }
    whatAmI() {
        console.log(`${this.maker}, ${this.vehicleType}, ${this.wheels}`)
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, numberOfWheels, vehicleType, numberOfDoors, truckBed){
        super(manufacturer, numberOfWheels, vehicleType);
        this.doors = numberOfDoors;
        this.truckBed = truckBed;

        if (this.truckBed){
            console.log('I have a truck bed')
        } 
        else { 
            console.log('I do not have a truck bed') 
        };
        
    }
    whatAmI() {
        console.log(`${this.maker}, ${this.vehicleType}, ${this.wheels}, ${this.doors}, ${this.truckBed}`)
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, numberOfWheels, vehicleType, numberOfDoors, size, mpg){
        super(manufacturer, numberOfWheels, vehicleType);
        this.doors = numberOfDoors;
        this.size = size;
        this.mpg = mpg;
    }
    whatAmI() {
        console.log(`${this.maker}, ${this.type}, ${this.wheels}, ${this.doors}, ${this.size}, ${this.mpg}`)
    }
}

class Mortorcycle extends Vehicle {
    constructor(manufacturer, vehicleType, numberOfDoors, steeringWheel){
        super(manufacturer, numberofWheels, vehicleType);
        this.doors = numberOfDoors;
        this.steeringWheel = steeringWheel;
    }
    whatAmI() {
        console.log(`${this.maker}, ${this.type}, ${this.wheels}, ${this.doors}, ${this.steeringWheel}`)
    }
}

let kiaSoul = new Sedan('Kia', '4', 'Soul', '4', 'Medium', '35' );
kiaSoul.whatAmI();