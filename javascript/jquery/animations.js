$(document).ready(function () {
    $('#showme').hide();

    $('#show-btn').click(function () {
        $('#showme').show(3000);
    })

    $('#hide-btn').click(function () {
        $('#showme').hide(3000);
    })

    $('#fadein-btn').click(function () {
        $('#showme').fadeIn(3000);
    })

    $('#fadeout-btn').click(function () {
        $('#showme').fadeOut(3000);
    })

    $('#slideup-btn').click(function () {
        $('#showme').slideUp(3000);
    })

    $('#slidedown-btn').click(function () {
        $('#showme').slideDown(3000);
    })

    $('#showhide-btn').click(function () {
        $('#showme').toggle(3000);
    });

    $('#fade-btn').click(function () {
        $('#showme').fadeToggle(3000);
    });

    $('#slide-btn').click(function () {
        $('#showme').slideToggle(3000);
    });

});