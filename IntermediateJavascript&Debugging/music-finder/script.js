document.getElementById('search-btn').addEventListener('click', function () {
    const inputedText = document.getElementById('inputedSearch').value;
    if (isNaN(inputedText)) {
        fetch('https://api.lyrics.ovh/suggest/' + inputedText + '')
            .then(res => res.json())
            .then(info => {
                console.log('info', info);

                const songsList = document.getElementById('song-title');
                songsList.innerHTML = '';
                const songName = document.getElementById('song-title');

                // loop to only return 5 results
                for (let i = 0; i < 5; i++) {
                    const songs = info.data[i];
                    console.log('songs', songs);

                    const songsTitle = songs.title;
                    const songsartist = songs.artist.name;
                    const paragraph = document.createElement('p');
                    paragraph.innerHTML = `<div class="search-result col-md-8 mx-auto py-1">
            <div class="single-result row align-items-center p-1">
                <div class="col-md-8">
                    <h3 class="lyrics-name">${songsTitle}</h3>
                    <p class="author lead">Album by <span>${songsartist}</span></p>
                </div>
            </div>
        </div>`;
                    songName.appendChild(paragraph);
                    document.getElementById('inputedSearch').value = '';
                }
            })
    } else {
        // alert("please insert string");
        const Invalid = document.getElementById('invalidSong');
        const header = document.createElement('p');
        header.innerHTML = `<div>
    <h1 class="text-center">Please Insert Valid Song</h1>
    </div>`;
        Invalid.appendChild(header);
        document.getElementById('inputedSearch').value = '';
    }
})
                 // function findLyrics(songsartist, songsTitle) {
        //     fetch(`https://api.lyrics.ovh/v1/${songsartist}/${songsTitle}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             const lyrics = data.lyrics;
        //             document.getElementById('getLyrics').innerText = lyrics;
        //             document.getElementById('getTitle').innerText = songsTitle;
        //         })
        // }
    