// const countElement = document.getElementById("count")
// const incrementButton = document.getElementById("increment")
// const decrementButton = document.getElementById("decrement")
// const resetButton = document.getElementById("reset")

// let counter = 0;

// const updateCounter = () => {
//     countElement.textContent = counter;
// }

// incrementButton.addEventListener("click", () => {
//     counter++;
//     updateCounter()
// })

// decrementButton.addEventListener("click", () => {
//     counter--;
//     updateCounter();
// })

// resetButton.addEventListener("click", () => {
//     counter = 0;
//     updateCounter();
// })

// different method includes querySelector and 3 separate functions
const add = document.querySelector("#increment");
const subract = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");
const output = document.querySelector("#count");

// increment
add.addEventListener("click", function () {
  let result = Number(output.innerText) + 1;
  output.innerText = result;
});

// decrement
subract.addEventListener("click", function () {
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});

// add a reset option
  resetBtn.addEventListener("click", function () {
    let result = Number(output.innerText);
    output.innerText = 0;
});