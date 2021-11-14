$(document).ready(function() {
    $('#chirpBtn').click(() => {
        let user = $('#userInput').val();
        let message = $('#messageText').val();
        let formData = {
                user: `${user}`,
                message: `${message}` 
            }
        $.ajax({
            url: 'http://localhost:3000/api/chirps',
            data: JSON.stringify(formData),
            type: 'POST',
            contentType: 'application/json'
        })
        $.ajax({
            url: 'http://localhost:3000/api/chirps',
            type: 'GET',
            contentType: 'application/json',
            success: ''
        })
    })
})