let favMovie = (movie = "The Room", name = "David Robinette") => console.log(`My name is ${name} and my favorite movie is ${movie}!`);

favMovie("The Lion King");

let getFirstName = (name) => {
    console.log(name.split(' ')[0]);
}

let getFirstNameConcise = (name) => console.log(name.split(' ')[0]);

getFirstName('David Robinette');
getFirstNameConcise('David Robinette');

let array = ['David', 'Birmingham', 'fettucini alfredo'];
let myFunc = (name, location, favFood) => console.log(`My name is ${name} and I'm in ${location} eating my favorite, ${favFood}.`);
myFunc(...array);

myName = 'David Robinette';

let anotherFunc = (param) => {
    let someVariable = [...param];
    for (let i = 0; i < someVariable.length; i++) {
        console.log(someVariable[i]);
    }
}

anotherFunc(myName);