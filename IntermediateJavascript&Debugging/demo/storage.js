// Storing data in Local Storage
localStorage.setItem('username', 'Nobody');
localStorage.setItem('age', 30);

// Storing data in Session Storage
sessionStorage.setItem('sessionKey', 'New data');

// Retrieving data
const user = localStorage.getItem('username');
const age = localStorage.getItem('age');
const sessionData = sessionStorage.getItem('sessionKey');

// Removing data
localStorage.removeItem('age'); // Removes the 'age' key-value pair from Local Storage
sessionStorage.clear(); // Clears all data from Session Storage