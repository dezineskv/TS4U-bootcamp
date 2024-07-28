// free api, no api key needed. no documentation.

function displayImage() {
const API = "https://dog.ceo/api/breeds/image/random";

fetch(API)
      .then(response => response.json())
      .then((data) => {
            console.log(data);
// Processing and displaying fetched image data DOM. notice data.message from console.log for data.message
    const imageHolder = document.getElementById("holder");
    const imageElement = document.createElement('img');
    imageElement.src = data.message;
    imageHolder.appendChild(imageElement);
})
.catch(error => {
    console.error('Error fetching images:', error);
  });

}
