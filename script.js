const pets = ["cat", "dog", "bunny"];
const fruits = ["watermelon", "apple", "banana"];
const maxSelections = 3;
let selectedItems = [];

function loadImages(type, containerId) {
  const container = document.getElementById(containerId);
  const list = type === "pets" ? pets : fruits;

  list.forEach(item => {
    const img = document.createElement("img");
    img.src = `images/${item}.png`;
    img.alt = item;
    img.addEventListener("click", () => toggleSelection(img, item));
    container.appendChild(img);
  });
}

function toggleSelection(img, item) {
  if (img.classList.contains("selected")) {
    img.classList.remove("selected");
    selectedItems = selectedItems.filter(i => i !== item);
  } else if (selectedItems.length < maxSelections) {
    img.classList.add("selected");
    selectedItems.push(item);
  }
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  if (!username) {
    alert("Please enter a username!");
    return;
  }
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("selections", JSON.stringify(selectedItems));
  window.location.href = "loading.html";
});

loadImages("pets", "pets-container");
loadImages("fruits", "fruits-container");
