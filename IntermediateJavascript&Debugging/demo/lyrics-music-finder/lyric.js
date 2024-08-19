document.getElementById('search-btn').addEventListener('click', function () {
    const inputedText = document.getElementById('inputedSearch').value;
    if (isNaN(inputedText)) {
        fetch('https://api.lyrics.ovh/v1/' + inputedText + '')
            .then(res => res.json())
            .then(data => {
                console.log('data', data);

                const songLyric = document.getElementById('song-title');

                const lyrics = data.lyrics;
                document.getElementById('inputedSearch').value = '';

                songLyric.innerHTML = `<div class="search-result col-md-12 mx-auto py-1">
                <div class="single-result row align-items-center p-1">
                <div class="col-md-12">
                    <p class="author lead"><strong>${inputedText}<br>Lyrics:</strong><br><span>${lyrics}</span></p>
                </div></div></div>`;
                    songLyric.appendChild(songLyric);
                    document.getElementById('inputedSearch').value = '';
                });    
            }     
     else {
        alert("Please enter a artist/song");
        document.getElementById('inputedSearch').value = '';
    }
})
     
    