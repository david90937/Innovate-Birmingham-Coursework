let colors = ["indigo", "blue", "red", "green", "black", "yellow", "orange", "gray"];
let x = 0;

document.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement('div');
    div.className = "header-container";

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("This is an h1");
    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("This is an h2");
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode("This is an h3");
    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode("This is an h4");
    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode("This is an h5");
    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode("This is an h6");

    h1.className = "h1";
    h2.className = "h2";
    h3.className = "h3";
    h4.className = "h4";
    h5.className = "h5";
    h6.className = "h6";

    h1.addEventListener("dblclick", getRandom)
    h2.addEventListener("dblclick", getRandom)
    h3.addEventListener("dblclick", getRandom)
    h4.addEventListener("dblclick", getRandom)
    h5.addEventListener("dblclick", getRandom)
    h6.addEventListener("dblclick", getRandom)

    let button = document.createElement('button')
    let btnText = document.createTextNode("Click to add new list item");
    button.className = "button";

    button.addEventListener("click", function() {
        x+=1;
        let li = document.createElement('li');
        let liText = document.createTextNode("This is list item # " + x );
        li.addEventListener("click", getRandom);
        li.addEventListener("dblclick", function() {
            x-=1; 
            li.remove();
        })
        li.appendChild(liText);
        div.appendChild(li);
    })

    h1.appendChild(h1Text);
    h2.appendChild(h2Text);
    h3.appendChild(h3Text);
    h4.appendChild(h4Text);
    h5.appendChild(h5Text);
    h6.appendChild(h6Text);
    button.appendChild(btnText);

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    div.appendChild(button);
    document.body.appendChild(div);
})

function getRandom(event){
   let min = Math.ceil(0);
   let max = Math.floor(colors.length);
   let randomColor = Math.floor(Math.random() * (max - min) + min);
   event.target.style.color = colors[randomColor];
}