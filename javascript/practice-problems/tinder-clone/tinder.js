let currentImage = 1;
$(document).ready(function () {
    $('.image').toggle();
    $('.image[data-id=1]').toggle();
    $('.like-dislike-btn').click(function () {
        let dislike = $(this).hasClass('dislike');
        // alert(`You ${dislike ? 'disliked' : 'liked'}`)
        $(this).animate({
            left: '-=50px',
            height: '+=30',
            opacity: '0.5'
        }, 300, function () {
            $(this).animate({
                left: '+=50px',
                height: '-=30'
            }, 300)
            $('.image').hide();
            if (currentImage === 4) {
                currentImage = 0;
            }
            $('.image[data-id=' + (++currentImage) + ']').fadeIn(2000);
            // animate btn to shake
        })

    })
})