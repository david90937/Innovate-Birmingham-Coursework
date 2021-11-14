let container = <HTMLDivElement>document.querySelector('#div-container')
let dieButton = <HTMLButtonElement>document.getElementById('die-generator');
let rollDieButton = <HTMLButtonElement>document.getElementById('roll-die-button');
let sumDieButton = <HTMLButtonElement>document.getElementById('sum-dice-button');
let dieArray: Die[] = [];

class Die {
    div: HTMLDivElement
    value: number
    constructor(){
        this.div = document.createElement('div');
        this.value;
        this.div.classList.add('die', 'd-flex', 'justify-content-center', 'align-items-center', 'border', 'border-warning', 'mx-1');
        this.div.addEventListener('click', () => {
            this.roll();
        })
        this.div.addEventListener('dblclick', () => {
            let position = dieArray.indexOf(this);
            dieArray.splice(position, 1);
            this.div.remove();
        })
        container.appendChild(this.div);
        dieArray.push(this);
    }
    roll() {
        this.value = Math.floor(Math.random() * 6 + 1) // generates a random integer from 1-6
        this.div.textContent = String(this.value);
    }
}

dieButton.addEventListener('click', () =>{
    let die: Die = new Die();
    die.roll();
})
rollDieButton.addEventListener('click', () => {
    console.log(dieArray);
    dieArray.forEach(dice => {
        dice.roll();
    });
})
sumDieButton.addEventListener('click', () => {
    let sumOfDice: number = 0;
    dieArray.forEach(dice => {
        sumOfDice += dice.value;
    } )
    alert(sumOfDice);
})