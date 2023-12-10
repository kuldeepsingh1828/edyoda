let imgArr = ['2', '3', '4'];
let i = 1;
function changeImage() {
    let image = document.getElementById('inner-img');
    image.src = `./screenshot${imgArr[i]}.png`;
    i++;
    if (i == imgArr.length - 1) {
        i = 0;
    }
}

// setInterval(changeImage, 2500);