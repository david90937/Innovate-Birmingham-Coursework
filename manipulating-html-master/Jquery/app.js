$(document).ready(function(){
    //Used .prepend and button:first just to mess around with them.
    $('body').prepend($('<button> Just a button </button>'));
    $('button:first').addClass('Button');
    $('.Button').click(function(){
        alert('What a chad!')
    })

    $('#inputButton').click(function(){
        alert($('#inputText').val());
    })
    $('.colorDiv').height('3em');
    // It came in handy for this lab :)
    $(document).on({
        mouseenter: function(){
        $('.colorDiv').css({'background-color': 'blue', 'border-radius': '1em'})
        },
        mouseleave: function(){
            $('.colorDiv').css({'background-color': '', 'border-radius': ''})
        }, 
    }, '.colorDiv')

    $('body').append($('<p> I want to be a chameleon! </p>').addClass('colorParagraph'));
    $('.colorParagraph').click(function(){
        let colorR = Math.floor(Math.random() * 255)
        let colorG = Math.floor(Math.random() * 255)
        let colorB = Math.floor(Math.random() * 255)
        $(this).css('color', 'rgb('+ colorR +', ' + colorG + ', ' + colorB + ')');
    })
    $('body').append($('<button>What is my name?</button>').addClass('nameButton'));
    $('body').append($('<div></div>').addClass('nameDiv'));
    $('.nameButton').click(function(){
        $('.nameDiv').append($('<span> David Robinette </span>'));
    })

    let counter = 0;
    let friendsArray = ["Tim", "Jacob", "Polly", "Alex", "Jace", "John", "Morgan", "Carol", "Anna", "Steffan"];
    $('.addFriend').click(function(){
        $('.friendsList').append($('<li>' + friendsArray[counter] + '</li>'))
        counter++;
    })
})