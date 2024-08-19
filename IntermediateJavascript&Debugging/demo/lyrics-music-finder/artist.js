document.getElementById('search-btn2').addEventListener('click', function () {
    
    const inputedText = document.getElementById('inputedSearch2').value;
    if (isNaN(inputedText)) {

                fetch('https://api.lyrics.ovh/suggest/' + inputedText + '')
            .then(res => res.json())
            .then(info => {
                console.log('info', info);

                const songsList = document.getElementById('song-title');
                songsList.innerHTML = '';
                const songName = document.getElementById('song-title');
                const getTop = document.getElementById("top");
                
                // loop to return only the top 5 results
                for (let i = 0; i < 5; i++) {
                    const songs = info.data[i];
                    console.log('songs', songs);

                    document.getElementById('inputedSearch').value = '';

                    const songsTitle = songs.title;
                    const songsartist = songs.artist.name;
                    const songsSound = songs.preview;
                    
                    const paragraph = document.createElement('p');
                    // added a link to play the song
                    paragraph.innerHTML = `<div class="search-result col-md-6 mx-auto py-1">
            <div class="single-result row align-items-center p-1"><div class="col-md-12">
                    <p class="lyrics-name"><strong>Song Title:</strong> ${songsTitle}</p>
                    <p class="lyrics-name"><strong>Artist:</strong> <span>${songsartist}</span></p>
                    <p class="lyrics-name"><a href="${songsSound}"><strong>Play Song Here</strong></a></p></div>
            </div></div>`;

        songName.appendChild(paragraph);
        document.getElementById('inputedSearch2').value = '';
                }
            })
            }     
     else {
        alert("Please enter a valid artist or song");
        document.getElementById('inputedSearch2').value = '';
    }
})
     
