let friends = ["James", "Alex", "Morgan", "Jace", "Teresa"];
document = document.addEventListener("DOMContentLoaded", function(){
    let button = document.getElementById("singButton");
    button.addEventListener("click", function(){
        for (let i = 0; i<friends.length; i++){
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let h3Text = document.createTextNode(friends[i]);
            div.className = "friend text-center";
            h3.appendChild(h3Text);
            div.appendChild(h3);
            document.body.appendChild(div);
            for (let x = 99; x > 0; x--){
                let paragraph = document.createElement('p');
                div.appendChild(paragraph);
                if (x == 1){
                    let paragraphText = document.createTextNode( x + " line of code in the file, " + x + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
                    paragraph.appendChild(paragraphText);
                }
                else if (x == 2) {
                    let paragraphText = document.createTextNode( x + " lines of code in the file, " + x + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (x-1) + " line of code in the file");
                    paragraph.appendChild(paragraphText);
                }
                else {
                    let paragraphText = document.createTextNode( x + " lines of code in the file, " + x + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (x-1) + " lines of code in the file");
                    paragraph.appendChild(paragraphText);
                }
            }
        }
    })
})

