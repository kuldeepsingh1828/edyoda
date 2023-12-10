var token = 'BQCPauOCyrY6bOULHL8fcpnu5dVpOjZ59OXg6o4SASwmK-bGdRO3HAM1Iv5plBAz3kgLoCUTDR6kofPRnbNrIGiuq9NxNcJJUQ6R5zp4U-kVwmn3Zns'
function findArtistData() {

    const artistName = document.getElementById('artistName').value;
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            let artistData = JSON.parse(this.responseText);
            document.getElementById('artistImage').src = artistData.picture_medium;
        }
    });

    xhr.open('GET', 'https://deezerdevs-deezer.p.rapidapi.com/artist/' + artistName);
    xhr.setRequestHeader('X-RapidAPI-Key', '117fbaa1e5mshcc944709cdd71c5p1f09e8jsn3c98daa4c3dd');
    xhr.setRequestHeader('X-RapidAPI-Host', 'deezerdevs-deezer.p.rapidapi.com');
    xhr.send(data);
}

function findTrackData() {

    const trackName = document.getElementById('trackName').value;

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open('GET', 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv');
    xhr.setRequestHeader('X-RapidAPI-Key', '117fbaa1e5mshcc944709cdd71c5p1f09e8jsn3c98daa4c3dd');
    xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');

    xhr.send(data);
}