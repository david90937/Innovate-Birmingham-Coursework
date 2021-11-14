name = 'David Robinette'
var name;
console.log(name);

setName();
function setName(){
    var name = 'David Robinette'
    console.log(name);
}

console.log('text');
let avg = findAvg(5, 8);
console.log('text', avg);
function findAvg(a, b) {
    console.log('text');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['apple', 'tomato', 'banana'];
function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        let leastFav = 'cantaloupe';
        console.log(favFruit);
    }
    console.log(leastFav);
    printFavFruit();
}

randomFunc();
function randomFunc(){
    console.log('Hello David Robinette');
}
let functionExpression = function(){
    alert('some more text');
}
functionExpression();

printFruits();
printFavFruit();