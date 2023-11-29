$(document).ready(function () {
    $('p').click(function () {
        $(this).addClass('red');
        $(this).removeClass('blue');
    });
});