const petImages = [
  "pet1.png", "pet2.png", "pet3.png"
];

const fruitImages = [
  "fruit1.png", "fruit2.png", "fruit3.png"
];

function createGrid(images, gridId) {
  const grid = document.getElementById(gridId);
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.addEventListener("click", () => toggleSelect(img));
    grid.appendChild(img);
  });
}

function toggleSelect(img) {
  const selected = document.querySelectorAll(".grid img.selected");
  if (img.classList.contains("selected")) {
    img.classList.remove("selected");
  } else if (selected.length < 3) {
    img.classList.add("selected");
  }
}

function generateItems() {
  const username = document.getElementById("username").value.trim();
  if (username === "") {
    alert("Please enter your Roblox username.");
    return;
  }

  const selected = document.querySelectorAll(".grid img.selected");
  if (selected.length !== 3) {
    alert("Please select exactly 3 fruits or pets.");
    return;
  }

  sessionStorage.setItem("username", username);
  window.location.href = "loading.html";
}

createGrid(petImages, "pet-grid");
createGrid(fruitImages, "fruit-grid");
