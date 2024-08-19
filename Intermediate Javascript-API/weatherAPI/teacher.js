const apiLink = {
    key: "b71be8aee5b3d4a93b5f98b6abef559c",
    base: "https://api.openweathermap.org/data/2.5/weather",
    };
    
function fetchData(city){
    const link = (`${apiLink.base}?q=${city}&units=metric&appid=${apiLink.key}`);
    fetch(link)
    .then(res => res.json())
    .then(data => {
        updateData(data);
    })
}

function updateData(data){
    document.getElementById('city').innerText = data.name || "Unknown City";
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('status').innerText = data.weather[0].main;

    document.getElementById('location').value = "";
}

document.getElementById('search-btn').addEventListener('click', function(){
    const Location = document.getElementById('location').value;
    fetchData(Location);
})