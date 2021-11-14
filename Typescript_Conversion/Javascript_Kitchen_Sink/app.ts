// My name!
let myName: string = "David Robinette";

// Number of states in the United States
const NUMBER_OF_STATES: number = 50;

// Just some addition practice
let num: number = 5 + 4;

//Defines sayHello function
function sayHello() {
    alert("Say Hello");
}

// Calls sayHello
sayHello();

//Defines checkAge
function checkAge(name: string, age: number){
    if (age < 21) {
        alert("Sorry " + name + " you're not old enough to view this page!");
    }
}

//calls checkAge
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

// Initializes array
let favoriteVeggies: string[] = ["carrot", "potato", "celery", "lettuce"];

//Loops through array and prints to console
for (let i = 0; i < favoriteVeggies.length; i++){
    console.log(favoriteVeggies[i]);
}

// Creates pet object literal
let pet =  {
    name: "Hector",
    breed: "Betta"
}

//Displays pet name and breed in console log
console.log(pet.name, pet.breed);

//Creates guest function
function Guest(name: string, age: number) {
    this.name = name;
    this.age = age;
}

//Generates new instances of guest object for each guest
let guest1 = new Guest("Kim", 54);
let guest2 = new Guest("Kelley", 61);
let guest3 = new Guest("Michael", 10);
let guest4 = new Guest("Jace", 32);
let guest5 = new Guest("Paul", 18);

//Initalizes visitors array
let visitors = [guest1, guest2, guest3, guest4, guest5];

// Loops through visitors and calls checkAge to verify they are 21 or over
for (let i = 0; i < visitors.length; i++) {
    checkAge(visitors[i].name, visitors[i].age);
}

// Creates getLength function
function getLength(x: string){
    return x.length;
}

let wordLength: number = getLength("Hello World")

if ((wordLength /2 ) == 1 ) {
    console.log("The world is nice and even!");
}
else if((wordLength / 2 ) != 1) {
    console.log("The world is an odd place!");
}