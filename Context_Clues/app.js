$(document).ready(function(){
    var accused = []
    var friends = ["Alex", "Jace", "Morgan", "Polly", "Eric"]
    var locations = ["Dining room", "Balcony", "Bedroom", "Kitchen", "Closet", "Garage", "Living room", "Bathroom", "Laundry", "Driveway"]
    var weaponNames = [
    "Dagger", "Wrench", "Revolver", "Poison", "Sword",
    "Hammer",  "Gun", "Katana", "Fidget-spinner", "Rope", 
    "Nails", "Wooden plank", "Drill", "Screwdriver", "Boxcutter", 
    "Lighter", "Stuffed animal", "Tape", "Pills", "Vaccum"
    ]

    function accuse(param){
        var accusedFriend = friends[param % 5];
        var accusedWeapon = weaponNames[param % 20];
        var accusedLocation = locations[param % 10];
        function displayAccusation() {
            alert('I accuse ' + accusedFriend + ' with the ' + accusedWeapon + ' in the ' + accusedLocation + '!' )
        }
        return displayAccusation
    }
    for (var i = 0; i < 100; i++) {
        $('body').append('<h3 id = ' + i + '> Accusation ' + (i +1)+ '</h3>')
        $('#' + i).click(function(){
            accuse(accused[this.id])();
        })
        accused.push(i);
    }
}) 