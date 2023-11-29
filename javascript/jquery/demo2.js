$(document).ready(function () {
    console.log("FIRST", this);

    $('h1,button,p,#makemeupper').click(function () {
        let content = $(this).html();
        content = content.toUpperCase();
        $(this).html(content);
    });

    $('button').click(function () {
        let content = $('#makemeupper').html() + '.';
        $('#makemeupper').html(content);
    });

    $('#makemeupper').hover(function () {
        $(this).css('color', 'red');
    }, function () {
        $(this).css('color', 'yellow');
    });
});