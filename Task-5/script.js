const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Mobile", category: "Electronics" },
  { name: "Tshirt", category: "Clothes" },
  { name: "Jeans", category: "Clothes" },
  { name: "Smartphone", category: "Electronics" },
  { name: "Jacket", category: "Clothes" },
  { name: "Book: JS Basics", category: "Books" },
  { name: "Book: HTML Guide", category: "Books" },
  { name: "Camera", category: "Electronics" },
  { name: "Sweater", category: "Clothes" }

]

const allBtn = document.getElementById('all');
const electronicBtn = document.getElementById('electronic');
const clothesBtn = document.getElementById('clothes');
const searchBtn = document.getElementById('filter');

const output = document.getElementById('output');
function showProducts(products) {
  output.innerHTML = "";
  products.forEach(p => {
    const item = document.createElement("p");
    item.textContent = p.name;
    output.appendChild(item);
  });
};

allBtn.addEventListener('click', () => {
  showProducts(products);
});

electronicBtn.addEventListener('click', () => {
  const result = products.filter(p =>
    p.category == "Electronics");
  showProducts(result);
});

clothesBtn.addEventListener('click', () => {
  const result = products.filter(p => p.category === "Clothes");
  showProducts(result);
});

searchBtn.addEventListener('input', () => {
  const keyword = searchBtn.value.toLowerCase();

  const result = products.filter(p => p.name.toLowerCase().includes(keyword) ||
    p.category.toLowerCase().includes(keyword));
  showProducts(result);

});

// showProducts(products);