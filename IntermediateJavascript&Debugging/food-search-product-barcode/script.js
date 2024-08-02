const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

// Function to fetch product data from the Open Food Facts API
async function fetchProductData(query) {
  resultsList.innerHTML = "Loading...";

  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${query}.json`
    );
    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    console.log("data", data);

    if (!data.product) {
      resultsList.innerHTML = "Product not found";
    } else {
      const product = data.product;
      const productName = product.product_name || "Product Name Not Available";
      const productDescription =
        product.generic_name || "Product Description Not Available";

      resultsList.innerHTML = `<li><strong>${productName}</strong><br>${productDescription}</li>`;
    }
  } catch (error) {
    console.error(error);
    resultsList.innerHTML = "Error fetching product data.";
  }
}

// Function to handle search
function handleSearch() {
  const query = searchInput.value;
  if (query) {
    fetchProductData(query);
  } else {
    resultsList.innerHTML = "Please enter a product code or name.";
  }
}

// Event listener for search input
searchInput.addEventListener("input", handleSearch);