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

  // ✅ Start popup logic after page loads
  startPopupCycle();
});


// ✅ Popup Cycle Script
const popupImages = ["popup-clean.png", "popup2.png"];
let popupIndex = 0;

function showPopup(imageSrc) {
  let popup = document.getElementById("popup");
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "popup";
    document.body.appendChild(popup);
  }

  popup.innerHTML = `<img src="${imageSrc}" alt="popup" />`;
  popup.classList.add("visible");

  setTimeout(() => {
    popup.classList.remove("visible");
  }, 6000); // visible for 6 seconds
}

function startPopupCycle() {
  showPopup(popupImages[popupIndex]);

  setInterval(() => {
    popupIndex = (popupIndex + 1) % popupImages.length;
    showPopup(popupImages[popupIndex]);
  }, 26000); // 6s visible + 20s delay
}
const popupImages = ["popup1.png", "popup2.png"]; // Replace with your real image names
let popupIndex = 0;
let popupElement;

function showPopup(imageSrc) {
  if (!popupElement) {
    popupElement = document.createElement("img");
    popupElement.className = "popup";
    document.body.appendChild(popupElement);
  }

  popupElement.src = imageSrc;
  popupElement.style.display = "block";
  popupElement.style.opacity = "0";

  // Fade in
  setTimeout(() => {
    popupElement.style.opacity = "1";
  }, 50);

  // Fade out after 6 seconds
  setTimeout(() => {
    popupElement.style.opacity = "0";
  }, 6050);

  // Hide completely after 6.6 seconds
  setTimeout(() => {
    popupElement.style.display = "none";
  }, 6600);
}

function cyclePopups() {
  showPopup(popupImages[popupIndex]);
  popupIndex = (popupIndex + 1) % popupImages.length;
  setTimeout(cyclePopups, 26000); // Wait 6s display + 20s idle
}

document.addEventListener("DOMContentLoaded", () => {
  cyclePopups(); // Start the popup cycle when the page loads
});
