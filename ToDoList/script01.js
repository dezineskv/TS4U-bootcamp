// use event listener to load the DOM methods after the original page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // getting the task input
    const taskInput = document.getElementById("task");
    // getting the button by id
    const addTaskButton = document.getElementsByClassName("addTask");
    // getting the UL container that will hold the items
    const taskList = document.getElementById("taskList")

    // event listener gets the input value on button click event
    addTaskButton.addEventListener("click", function() {

        // store the task input value in a variable so we can get its value
        const taskText = taskInput.value;
        console.log(taskText);

        // only continue if the input is filled in, to prevent submitting an empty value
        if (taskText !== "") {
        // create the new task list item
        const taskItem = document.createElement("li");

        // append the input value to the li by using innerHTML method and embed the delete button along with the input value using backticks to include the input value as a variable
        taskItem.innerHTML = `${taskText} <button id="delete-btn" class="delete">Delete</button>`

        // append the item/element LI to the UL by using the append method
        taskList.appendChild(taskItem)

        // to delete items, apply event listener to remove the child element. Used querySelector on the new item to target it. instead of document. use the new taskItem
        const deleteButton = taskItem.querySelector("#delete-btn");
        // event listener to apply to the element that was newly created
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskItem)
        })
        } else {
            alert("Please type your task");
        }
            // clear the input value after it has posted 
            taskInput.value = "";
    })
})