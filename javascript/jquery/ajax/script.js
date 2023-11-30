$(document).ready(function () {
    $('#fetch-btn').click(function () {

        let url = 'data.json';
        let method = 'GET';

        let success = function (data) {
            $('#users').text(JSON.stringify(data));
        };

        let error = function () {
            console.log('error');
        }

        jQuery.ajax({
            url: url,
            method: method,
            success: success,
            error: error,
            statusCode: {
                200: function () {
                    alert("Data fetched successfully...")
                }
            }
        });

    });
});