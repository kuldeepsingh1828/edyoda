$(document).ready(function () {
    $('#fetch-btn').click(function () {

        let url = 'http://localhost:3000/users';
        let method = 'POST';

        let success = function (data) {
            console.log('success');
            $('#users').text(JSON.stringify(data));
        };

        let complete = function () {
            console.log('complete');
        }
        let error = function () {
            console.log('error');
        }

        jQuery.ajax({
            url: url,
            method: method,
            dataType: 'json', //response data type
            contentType: 'application/json', //request data type
            data: JSON.stringify({
                "id": 5,
                "name": "John Doe 5",
                "username": "John 5",
                "email": "John@gmail.com"
            }),
            success: success,
            error: error,
            complete: complete,
            statusCode: {
                200: function () {
                    alert("Data fetched successfully...")
                },
                500: function () {
                    alert("Internal server error...")
                }
            }
        });

    });
});