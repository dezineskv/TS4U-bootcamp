// asynchronous
console.log("step order 1");

// promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: 'Fetched successfully' }
            const error = { message: 'Failed to fetch data' }
            // resolve(data)
            reject(error)
        }, 2000)
    })
}

console.log("step order 2")

fetchData()
        .then(result => console.log('Result', result))
        .catch(error => console.log('Error', error))


console.log("step order 3 the callback will execute")
