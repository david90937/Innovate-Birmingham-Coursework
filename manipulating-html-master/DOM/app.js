document = document.addEventListener("DOMContentLoaded", function(){
    let container = document.createElement("div");
    let div = document.createElement('div');
    let button = document.createElement('button');
    let paragraph = document.createElement('p');
    let spanButton = document.createElement('button');
    let spanDiv = document.createElement('div');
    let btnText = document.createTextNode('Click me');
    let paragraphText = document.createTextNode("I'm a paragraph!");
    let textButton = document.getElementById('textButton');
    let textInput = document.getElementById('textInput');
    let friendsList = document.getElementById('friendsList');
    let friendButton = document.getElementById('addFriend');
    let friendsArray = ["Tim", "Jacob", "Polly", "Alex", "Jace", "John", "Morgan", "Carol", "Anna", "Steffan"];

    spanButton.innerHTML = "Button";
    friendButton.innerHTML = "Add friend";
    div.style.height = "3em";

    button.addEventListener('click', function(){
        alert('You, sir, are a gentleman and a scholar');
    })
    textButton.addEventListener('click', function(){
        alert(textInput.value);
    })
    div.addEventListener('mouseenter', function(){
        div.style.background = "green";
    })
    div.addEventListener('mouseleave', function(){
        div.style.background = "";
    })
    paragraph.addEventListener('click', function(){
        let colorR = Math.floor(Math.random() * 255)
        let colorG = Math.floor(Math.random() * 255)
        let colorB = Math.floor(Math.random() * 255)
        paragraph.style.color = 'rgb('+ colorR +', ' + colorG + ', ' + colorB + ')';
    })
    spanButton.addEventListener('click', function(){
        let nameSpan = document.createElement('span');
        let myName = document.createTextNode('David Robinette');
        nameSpan.appendChild(myName);
        spanDiv.appendChild(nameSpan);
    })
    // Adds all at once by using loop. Can add one at a time by using a counter and friendArray[counter] and incrementing the counter on each click.
    friendButton.addEventListener('click', function(){
        for (let i = 0; i < friendsArray.length; i++) {
            let friend = document.createElement('li');
            let friendName = document.createTextNode(friendsArray[i]);
            friend.appendChild(friendName);
            friendsList.appendChild(friend);
        }
    })

    button.appendChild(btnText);
    paragraph.appendChild(paragraphText);
    spanDiv.appendChild(spanButton);
    container.appendChild(button);
    container.appendChild(div);
    container.appendChild(paragraph);
    container.appendChild(spanDiv);
    document.body.appendChild(container);
}) 