//onload we use a callback function
document.addEventListener("DOMContentLoaded", () => {
const cityName = document.getElementById("location")
const weatherInfo = document.querySelector(".weather-status");
const apiLink = {
    key: "b71be8aee5b3d4a93b5f98b6abef559c",
    base: "https://api.openweathermap.org/data/2.5/weather",
    };
//select search button to handle when clicked
const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", () => {
    // console.log("clicked")
    const link = (`${apiLink.base}?q=london&units=metric&appid=${apiLink.key}`);
    fetch(link)
    .then(response => response.json())
    .then(data => {
        //extract the data, round decimal & convert degrees to celsius with -273.15
        //storing data in variables
        const temperature = Math.round(data.main.temp -273.15);
        const description = data.weather[0].description;
        const cityName = data.name;
        // console.log('data', temperature, description, cityName)
        // inject data to the app with multi lines of html
        const weatherHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <h1 id="city">${cityName}</h1>
        <h3><span id="temp">${temperature}</span>&deg;C</h3>
        <h1 id="status" class="lead">${description}</h1>
        `;

        weatherInfo.innerHTML = weatherHTML;
    })
    .catch((error) => console.log('Error in fetching data', error));
})
})
     
