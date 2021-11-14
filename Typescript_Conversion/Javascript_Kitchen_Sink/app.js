// My name!
var myName = "David Robinette";
// Number of states in the United States
var NUMBER_OF_STATES = 50;
// Just some addition practice
var num = 5 + 4;
//Defines sayHello function
function sayHello() {
    alert("Say Hello");
}
// Calls sayHello
sayHello();
//Defines checkAge
function checkAge(name, age) {
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
var favoriteVeggies = ["carrot", "potato", "celery", "lettuce"];
//Loops through array and prints to console
for (var i = 0; i < favoriteVeggies.length; i++) {
    console.log(favoriteVeggies[i]);
}
// Creates pet object literal
var pet = {
    name: "Hector",
    breed: "Betta"
};
//Displays pet name and breed in console log
console.log(pet.name, pet.breed);
//Creates guest function
function Guest(name, age) {
    this.name = name;
    this.age = age;
}
//Generates new instances of guest object for each guest
var guest1 = new Guest("Kim", 54);
var guest2 = new Guest("Kelley", 61);
var guest3 = new Guest("Michael", 10);
var guest4 = new Guest("Jace", 32);
var guest5 = new Guest("Paul", 18);
//Initalizes visitors array
var visitors = [guest1, guest2, guest3, guest4, guest5];
// Loops through visitors and calls checkAge to verify they are 21 or over
for (var i = 0; i < visitors.length; i++) {
    checkAge(visitors[i].name, visitors[i].age);
}
// Creates getLength function
function getLength(x) {
    return x.length;
}
var wordLength = getLength("Hello World");
if ((wordLength / 2) == 1) {
    console.log("The world is nice and even!");
}
else if ((wordLength / 2) != 1) {
    console.log("The world is an odd place!");
}
