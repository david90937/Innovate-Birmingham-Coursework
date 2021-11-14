$(document).ready(function(){
    $('form').after('<div></div>');
    $('body').append($('<ul></ul>'));
    $('#btnSubmit').click(function(){
        alert("A button was clicked!");
    })
    // Ussed document.on() in order to prevent the page from reloading on form submit
    $(document).on('submit', '#textForm', function(){
        let formText = $('#inputText').val()
        //alert(formText); - commented this out because it was annoying.
        $('ul').append($('<li>' + formText + '</li>'));
       return false;
    })
    $('#inputText').keyup(function(){
        let formText = $('#inputText').val()
        let btnSubmit = $('#inputSubmit');
        if (formText.length > 0){
            btnSubmit.removeAttr('disabled');
        }
        else {
            btnSubmit.attr('disabled', true);
        }
    })
    $(document).on('click', 'li', function(){
        let colorR = Math.floor(Math.random() * 255)
        let colorG = Math.floor(Math.random() * 255)
        let colorB = Math.floor(Math.random() * 255)
        $(this).css('color', 'rgb('+ colorR +', ' + colorG + ', ' + colorB + ')');
    })
    $(document).on('dblclick', 'li', function(){
        $(this).remove();
    })

    // My solution for the hover effect that I wanted.
    // $(document).on({
    //     mouseenter: function(){
    //         $('h2').css({'background-color': 'blue', 'border-radius': '1em'})
    //     },
    //     mouseleave: function(){
    //         $('h2').css({'background-color': '', 'border-radius': ''})
    //     }, 
    // }, 'h2')
    // $('body').append($('<ul></ul>'));
})