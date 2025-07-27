function generate() {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    document.getElementById('status').innerText = "Please enter a username.";
    return;
  }

  document.getElementById('status').innerText = "Generating garden...";

  setTimeout(() => {
    document.getElementById('status').innerText = "Garden ready! Verifying...";

    setTimeout(() => {
      // Replace with your OGAds or CPAgrip link
      window.location.href = "https://your-affiliate-link.com";
    }, 2000);

  }, 2000);
}

function toggleSelection(el) {
  const selected = document.querySelectorAll('.item.selected');
  
  if (el.classList.contains('selected')) {
    el.classList.remove('selected');
  } else {
    if (selected.length >= 3) {
      alert("You can only select up to 3 fruits/pets!");
      return;
    }
    el.classList.add('selected');
  }
}
