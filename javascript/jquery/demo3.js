$(document).ready(function () {
    $('#showme').hide();


    $('#show-btn').click(function () {
        $('#showme').show();
    })

    $('#hide-btn').click(function () {
        $('#showme').hide();
    })


    $('p').click(function () {
        $(this).addClass('red');
        $(this).removeClass('blue');
    });
});