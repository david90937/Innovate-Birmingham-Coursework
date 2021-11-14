let myName = "David Robinette";
let myCareer = "Fullstack student";
let myDescription = "I'm a student working hard to improve my skills!"

function displayInterests(interest) {
    console.log("* " + interest);
}

function displayPosition(info) {
    console.log("* " + info);

}

function displaySkill(skill, cool) {
    if (cool === "cool") {
        console.log("* BAM: " + skill);
    }
    else {
        console.log("* " + skill);
    }
}

console.log("Name:  " + myName.toUpperCase());
console.log("Career: " + myCareer);
console.log("Description: " + myDescription);
console.log("My Interests: ");

displayInterests("Reading");
displayInterests("Programming");
displayInterests("Swimming");
displayInterests("Fishing");
displayInterests("Video games");

console.log("My previous experience:");
displayPosition("Allstate");
displayPosition("Claims Service Specialist");
displayPosition("Processed medical claims for people that were in auto accidents");

console.log("My skills:");
displaySkill("Python", "cool");
displaySkill("C#", "cool");
displaySkill("Javascript", "cool");
displaySkill("Typing", "notcool");
displaySkill("Deckbuilding", "notcool");
displaySkill("Chess", "notcool");