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
      window.location.href = "https://your-affiliate-link.com";
    }, 2000);

  }, 2000);
}

let selectedCount = 0;
function selectItem(element) {
  if (element.classList.contains('selected')) {
    element.classList.remove('selected');
    selectedCount--;
  } else {
    if (selectedCount >= 3) return;
    element.classList.add('selected');
    selectedCount++;
  }
}
