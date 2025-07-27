const maxSelections = 3;
let selectedItems = [];

document.querySelectorAll('.grid img').forEach(img => {
  img.addEventListener('click', () => {
    const name = img.dataset.name;
    if (img.classList.contains('selected')) {
      img.classList.remove('selected');
      selectedItems = selectedItems.filter(item => item !== name);
    } else if (selectedItems.length < maxSelections) {
      img.classList.add('selected');
      selectedItems.push(name);
    }
  });
});

document.getElementById('generateBtn').addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
  if (username === '') {
    alert('Please enter a username.');
    return;
  }

  if (selectedItems.length === 0) {
    alert('Please select at least one fruit or pet.');
    return;
  }

  // Replace this with your actual redirect or CPA logic
  const selection = selectedItems.join(',');
  const url = `https://ogads.com/redirect?user=${encodeURIComponent(username)}&items=${encodeURIComponent(selection)}`;
  window.location.href = url;
});
