// Sample Data
const farmers = [
  {
    id: 1,
    name: 'Sounak Ghosh',
    history: 'Farming for 10 years, specializing in organic vegetables.',
    image: 'vooffa38.png'
  },
  {
    id: 2,
    name: 'Sayantani Bhattacharjee',
    history: 'Organic farming for 10 years, focusing on fruits.',
    image: 'zfpydpt4.png'
  },
  {
    id: 3,
    name: 'Suman Mondal',
    history: 'Organic farming for 13 years, focusing on organic fertilizer.',
    image: 'jnbz7aus.png'
  },
  {
    id: 4,
    name: 'Sandip Maity',
    history: 'Organic farming for 12 years, focusing on fruits.',
    image: 'e7w194wl.png'
  },
  {
    id: 5,
    name: 'Jyotirmoy Das',
    history: 'Organic farming for 10 years, focusing on fruits.',
    image: 'z.jpg'
  },
  
  // Add more farmers as needed
];

const products = [
  {
    id: 1,
    name: 'Apples',
    price: 2.5,
    farmerId: 2,
    image: 'occckg6q.png'
  },
  {
    id: 2,
    name: 'Tomatoes',
    price: 1.5,
    farmerId: 1,
    image: '6dpdzbcz.png'
  },
  {
    id: 3,
    name: 'Vegetables',
    price: 1.5,
    farmerId: 3,
    image: 'R.jpeg'
  },
  {
    id: 4,
    name: 'Vegetables',
    price: 1.5,
    farmerId: 4,
    image: 'veggies.jpg'
  },
  
  // Add more products as needed
];

// Navigation
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-section');

    sections.forEach(section => {
      if (section.id === target) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
});

// Populate Farmers
const farmersList = document.getElementById('farmers-list');

farmers.forEach(farmer => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${farmer.image}" alt="${farmer.name}">
    <h3>${farmer.name}</h3>
    <p>${farmer.history}</p>
  `;

  farmersList.appendChild(card);
});

// Populate Products
const productsList = document.getElementById('products-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: $${product.price.toFixed(2)}</p>
  `;

  productsList.appendChild(card);
});

// Farmer Dashboard (Add Product)
const dashboardForm = document.getElementById('dashboard-form');
const myProductsList = document.getElementById('my-products');
const loggedInFarmerId = 1; // Example farmer logged in

dashboardForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newProduct = {
    id: products.length + 1,
    name: dashboardForm['product-name'].value,
    price: parseFloat(dashboardForm['price'].value),
    stock: parseInt(dashboardForm['stock'].value),
    farmerId: loggedInFarmerId,
    image: 'default.jpg' // Default image for new products
  };

  products.push(newProduct);

  const productItem = document.createElement('li');
  productItem.textContent = `${newProduct.name} - $${newProduct.price.toFixed(2)}`;

  myProductsList.appendChild(productItem);

  dashboardForm.reset();
});

// Display Farmer's Products
const farmerProducts = products.filter(product => product.farmerId === loggedInFarmerId);

farmerProducts.forEach(product => {
  const productItem = document.createElement('li');
  productItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;

  myProductsList.appendChild(productItem);
});
