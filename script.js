// Bouncing fruit logic
const fruit = document.getElementById("bouncing-fruit");

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;

// Ensure random direction that’s not 0
function randomSpeed() {
  const speed = Math.random() * 1.5 + 0.5; // speed between 0.5 and 2
  return Math.random() < 0.5 ? -speed : speed;
}

let dx = randomSpeed();
let dy = randomSpeed();

function animate() {
  const fruitWidth = fruit.offsetWidth;
  const fruitHeight = fruit.offsetHeight;

  x += dx;
  y += dy;

  // Bounce off horizontal edges
  if (x <= 0 || x + fruitWidth >= window.innerWidth) {
    dx = randomSpeed();
  }

  // Bounce off vertical edges
  if (y <= 0 || y + fruitHeight >= window.innerHeight) {
    dy = randomSpeed();
  }

  fruit.style.left = `${x}px`;
  fruit.style.top = `${y}px`;

  requestAnimationFrame(animate);
}

animate();
