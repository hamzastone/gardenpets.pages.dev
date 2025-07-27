function generate() {
  const username = document.getElementById('username').value;
  if (!username) {
    document.getElementById('status').innerText = "Please enter a username.";
    return;
  }

  document.getElementById('status').innerText = "Generating garden...";

  setTimeout(() => {
    document.getElementById('status').innerText = "Garden ready! Verifying...";

    setTimeout(() => {
      // Replace with your OGAds/CPA link
      window.location.href = "https://your-affiliate-link.com";
    }, 2000);
  }, 2000);
}

function toggleSelect(el) {
  if (el.classList.contains("selected")) {
    el.classList.remove("selected");
  } else {
    const selected = document.querySelectorAll(".item.selected");
    if (selected.length >= 3) return;
    el.classList.add("selected");
  }
}
