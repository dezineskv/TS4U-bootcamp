const nextItem = document.getElementById("next");
const advice = document.getElementById("advice");

nextItem.addEventListener("click", () => {
    // when the button with id 'next' gets clicked, the callback fetches data
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        // store the data in a variable
        const show = advice.textContent = data.slip.advice;
        // inject the data into the paragraph with id 'advice', pass in the 'show' data.
        advice.appendChild(show);
        console.log(data)
    })
    .catch((error) => console.log('Error in fetching data', error));
});