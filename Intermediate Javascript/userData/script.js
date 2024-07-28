document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    
        //convert response to json and get the data then show it as the new list items.

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => data.forEach(user => {
        const userItem = document.createElement("li");
        userItem.textContent = user.name;
        userList.appendChild(userItem);
        console.log(data)
    }))
    .catch((error) => console.log('Error in fetching data', error));
});