var container = document.querySelector('#div-container');
var dieButton = document.getElementById('die-generator');
var rollDieButton = document.getElementById('roll-die-button');
var sumDieButton = document.getElementById('sum-dice-button');
var dieArray = [];
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement('div');
        this.value;
        this.div.classList.add('die', 'd-flex', 'justify-content-center', 'align-items-center', 'border', 'border-warning', 'mx-1');
        this.div.addEventListener('click', function () {
            _this.roll();
        });
        this.div.addEventListener('dblclick', function () {
            var position = dieArray.indexOf(_this);
            dieArray.splice(position, 1);
            _this.div.remove();
        });
        container.appendChild(this.div);
        dieArray.push(this);
    }
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6 + 1); // generates a random integer from 1-6
        this.div.textContent = String(this.value);
    };
    return Die;
}());
dieButton.addEventListener('click', function () {
    var die = new Die();
    die.roll();
});
rollDieButton.addEventListener('click', function () {
    console.log(dieArray);
    dieArray.forEach(function (dice) {
        dice.roll();
    });
});
sumDieButton.addEventListener('click', function () {
    var sumOfDice = 0;
    dieArray.forEach(function (dice) {
        sumOfDice += dice.value;
    });
    alert(sumOfDice);
});
