const pets = [
  "dragonfly", "t-rex", "mimic-octopus", "spinosaurus", "brontosaurus",
  "ankylosaurus", "disco-bee", "zombie-chicken", "queen-bee", "kitsune",
  "new-kitsune", "kappa", "raccoon", "red-fox", "fennec-fox", "butterfly"
];

const fruits = [
  "candy-blossom", "guanabana", "travelers-fruit", "sugar-apple",
  "elephant-ears", "feijoa", "loquat", "prickly-pear", "bell-pepper",
  "ember-lily", "beanstalk", "cacao", "pepper", "mushroom", "grape"
];

function formatName(name) {
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function createImages(containerId, items) {
  const container = document.getElementById(containerId);
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";

    const img = document.createElement("img");
    img.src = `${item}.png`;
    img.alt = item;
    img.setAttribute("data-name", item);

    const label = document.createElement("p");
    label.textContent = formatName(item);

    div.appendChild(img);
    div.appendChild(label);
    container.appendChild(div);

    div.addEventListener("click", () => toggleSelect(div));
  });
}

const selected = new Set();

function toggleSelect(div) {
  const name = div.querySelector("img").getAttribute("data-name");
  if (div.classList.contains("selected")) {
    div.classList.remove("selected");
    selected.delete(name);
  } else {
    if (selected.size >= 3) {
      alert("You can only select up to 3 fruits/pets!");
      return;
    }
    div.classList.add("selected");
    selected.add(name);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createImages("pets-container", pets);
  createImages("fruits-container", fruits);

  document.getElementById("generateBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    if (!username) return alert("Please enter your username!");
    if (selected.size === 0) return alert("Select at least one item!");

    const selection = Array.from(selected).join(",");
    const url = `https://ogads.com/?username=${encodeURIComponent(username)}&items=${encodeURIComponent(selection)}`;
    window.location.href = url;
  });

  // Add animated fruits on page load
  createBouncingFruit("fruit.png", 100, 150, 1.1, 1.2);  // Fruit 1
  createBouncingFruit("fruit2.png", 500, 200, 1.3, 1.1); // Fruit 2
});

// Bouncing animation function
function createBouncingFruit(imageSrc, startX, startY, speedX, speedY, zIndex = -1) {
  const fruit = document.createElement("img");
  fruit.src = imageSrc;
  fruit.alt = "Bouncing Fruit";
  fruit.style.position = "fixed";
  fruit.style.left = `${startX}px`;
  fruit.style.top = `${startY}px`;
  fruit.style.width = "70px";
  fruit.style.pointerEvents = "none";
  fruit.style.zIndex = zIndex;
  fruit.style.opacity = 0.8;
  document.body.appendChild(fruit);

  let x = startX;
  let y = startY;
  let dx = speedX;
  let dy = speedY;

  function move() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const fruitWidth = fruit.offsetWidth;
    const fruitHeight = fruit.offsetHeight;

    x += dx;
    y += dy;

    if (x + fruitWidth > screenWidth || x < 0) dx = -dx;
    if (y + fruitHeight > screenHeight || y < 0) dy = -dy;

    fruit.style.left = `${x}px`;
    fruit.style.top = `${y}px`;

    requestAnimationFrame(move);
  }

  move();
}
