/* ================= TO-DO APP ================= */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;
    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    };
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
function addTask() {
  let taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim() !== "") {
    tasks.push(taskInput.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    displayTasks();
  }
}
displayTasks();

/* ================= PRODUCT LISTING ================= */
let products = [
  { name: "Laptop", category: "electronics", price: 50000, rating: 4.5 },
  { name: "T-Shirt", category: "clothing", price: 500, rating: 4.0 },
  { name: "Smartphone", category: "electronics", price: 30000, rating: 4.8 },
  { name: "Jeans", category: "clothing", price: 1200, rating: 3.9 },
];

function displayProducts(list) {
  let productList = document.getElementById("productList");
  productList.innerHTML = "";
  list.forEach(p => {
    let div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<h4>${p.name}</h4>
                     <p>Category: ${p.category}</p>
                     <p>Price: ₹${p.price}</p>
                     <p>Rating: ⭐${p.rating}</p>`;
    productList.appendChild(div);
  });
}
function filterProducts() {
  let category = document.getElementById("categoryFilter").value;
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}
function sortProducts() {
  let option = document.getElementById("sortFilter").value;
  let sorted = [...products];
  if (option === "priceLow") sorted.sort((a, b) => a.price - b.price);
  if (option === "priceHigh") sorted.sort((a, b) => b.price - a.price);
  if (option === "rating") sorted.sort((a, b) => b.rating - a.rating);
  displayProducts(sorted);
}
displayProducts(products);

/* ================= PAGE SWITCHING ================= */
function openProductPage() {
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("productPage").classList.remove("hidden");
}
function openTodoPage() {
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("todoPage").classList.remove("hidden");
}
function closePages() {
  document.getElementById("portfolio").style.display = "block";
  document.getElementById("productPage").classList.add("hidden");
  document.getElementById("todoPage").classList.add("hidden");
}
// Show Product Page
function openProductPage() {
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("productPage").style.display = "block";
  document.getElementById("todoPage").style.display = "none";
}

// Show To-Do Page
function openTodoPage() {
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("todoPage").style.display = "block";
  document.getElementById("productPage").style.display = "none";
}

// Back Button -> Return to Portfolio
function closePages() {
  document.getElementById("portfolio").style.display = "block";
  document.getElementById("productPage").style.display = "none";
  document.getElementById("todoPage").style.display = "none";
}
// THEME TOGGLE
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    toggleBtn.textContent = "☀ Light Mode";
  }
});
