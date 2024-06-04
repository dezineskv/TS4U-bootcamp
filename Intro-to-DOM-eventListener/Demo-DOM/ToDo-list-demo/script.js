document.addEventListener('DOMContentLoaded', function () {

// input value
    const taskInput = document.getElementById('task');

// button
    const addTaskButton = document.getElementById('addTask')

// ul list that will be appended with list items
    const taskList = document.getElementById('taskList')

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value;
        console.log(taskText);
        
        const taskItem = document.createElement("li");
            if (taskText !== "") {

            taskItem.innerHTML = `${taskText} <button id="delete-btn" class="delete">Delete</button>`

            // append list item to its parent of ul
            taskList.appendChild(taskItem);

            const deleteButton = taskItem.querySelector("#delete-btn")
            deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        })
        }
        else {
            alert("Please type in your task first")
        }

        // after the task has been input and added, clear the input field
        taskInput.value = "";
    })
})