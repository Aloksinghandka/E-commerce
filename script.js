const products = [
  {
    id: 1,
    name: "Stylish T-Shirt",
    price: 499,
    rating: 4,
    image: "https://via.placeholder.com/250"
  },
  {
    id: 2,
    name: "Sneakers",
    price: 1999,
    rating: 5,
    image: "https://via.placeholder.com/250"
  },
  {
    id: 3,
    name: "Jacket",
    price: 1499,
    rating: 3,
    image: "https://via.placeholder.com/250"
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 2499,
    rating: 4,
    image: "https://via.placeholder.com/250"
  }
];

const container = document.getElementById("productContainer");

// ⭐ Generate stars
function getStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "☆";
  }
  return stars;
}

// Display products
function displayProducts() {
  container.innerHTML = products.map(product => `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      
      <h3>${product.name}</h3>
      
      <div class="rating">${getStars(product.rating)}</div>
      
      <p class="price">₹${product.price}</p>
      
      <button class="btn" onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    </div>
  `).join("");
}

// Add to cart (basic)
function addToCart(id) {
  alert("Product " + id + " added to cart!");
}

// Initial load
displayProducts();