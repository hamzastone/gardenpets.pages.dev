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
  return name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function createImages(containerId, items) {
@@ -62,10 +64,10 @@
if (!username) return alert("Please enter your username!");
if (selected.size === 0) return alert("Select at least one item!");

    localStorage.setItem("username", "");
    sessionStorage.setItem("usernameEntered", "true");
window.location.href = "loading.html";
});

  // Clear username when returning
  // Reset username input on page load
document.getElementById("username").value = "";
});
