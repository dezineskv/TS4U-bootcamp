// Storing data in Local Storage
localStorage.setItem('username', 'John');
localStorage.setItem('age', 30);

// Storing data in Session Storage
sessionStorage.setItem('sessionKey', 'Some session data');

// Retrieving data
const username = localStorage.getItem('username');
const age = localStorage.getItem('age');
const sessionData = sessionStorage.getItem('sessionKey');

// Removing data
localStorage.removeItem('age'); // Removes the 'age' key-value pair from Local Storage
sessionStorage.clear(); // Clears all data from Session Storage