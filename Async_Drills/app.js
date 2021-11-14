function deliverMessage(message){
    console.log(message);
}

deliverMessage('Delivery!');

setTimeout(_ => {
    deliverMessage('Another delivery!')
}, 2000);

function getWords (word){
    console.log(word);
    setTimeout(_ => {
        console.log(`Another ${word}`)
        setTimeout(_ => {
            console.log(`Yet another ${word}`)
            setTimeout(_ => {
                console.log(`Final ${word}`);
            }, 1000)
        }, 2000)
    }, 3000)
}

getWords('Word');

function done (){
    console.log("Job's done!");
}

function countdown (num, callback){
    setTimeout(_ => {
        console.log(num);
        num -= 1;
        if (num > 0) {
            callback(num, countdown);
        }
        else {
            console.log('Countdown complete. Initializing self-destruct sequence')
        }
    }, (num * 1000))
}

countdown(5, countdown);

let lunchtime = true;
function orderMeSomeFood (){
    return new Promise((resolve, reject)  => {
        if (lunchtime){
            let lunch = {
                lunch: "Beef stew",
                drink: "Lemon tea"
            }
            resolve(lunch);
        }
        else {
            reject(new Error('An error has occurred.'));
        }
    })
}

orderMeSomeFood().then((lunch) => {
    console.log(lunch);
}).catch((e) => {
    console.log(e);
});