//onload we use a callback function
document.addEventListener("DOMContentLoaded", () => {
    const cityName = document.getElementById("location")
    const weatherInfo = document.querySelector(".weather-status");
    const apiLink = {
        key: "b71be8aee5b3d4a93b5f98b6abef559c",
        base: "https://api.openweathermap.org/data/2.5/weather",
        };
        const city = document.getElementById("location").value;

    //select search button to handle when clicked
    const searchButton = document.getElementById("search-btn");

    searchButton.addEventListener("click", () => {
        const city = document.getElementById("location").value;
        if (city == "") {
            alert("error - please enter a city name")
        } else {
             // console.log("clicked")
        const link = (`https://api.lyrics.ovh/v1`);
        fetch(link)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp * 9/5 + 32);
            const description = data.weather[0].description;
            const cityName = data.name;
            // extract the data, round decimal .to convert degrees to celsius is -273.15
            // storing data in variables
            // inject data to the app with multi lines of html
            const weatherHTML = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1 id="city">${cityName}</h1>
            <h3><span id="temp">${temperature}</span>&deg;F</h3>
            <h1 id="status" class="lead">${description}</h1>
            `;
            // update the page with the newly created html data
            weatherInfo.innerHTML = weatherHTML;
        })
        .catch((error) => console.log('Error in fetching data', error));
        }
       
    })
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
    