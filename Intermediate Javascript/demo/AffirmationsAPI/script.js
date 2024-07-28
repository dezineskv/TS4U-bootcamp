const nextItem = document.getElementById("next");
const advice = document.getElementById("advice");

nextItem.addEventListener("click", () => {
    
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        const show = advice.textContent = data.slip.advice;
        advice.appendChild(show);
        console.log(data)
    })
    .catch((error) => console.log('Error in fetching data', error));
});