const map = document.getElementById("map");

let scale = 1;
let posX = 0, posY = 0;
let isDragging = false;
let startX, startY;

const minScale = 1;   // zoom normal (default)
const maxScale = 3;   // bisa diubah kalau mau lebih dekat

function updateTransform() {
  // Hitung batas drag biar nggak keluar
  const maxX = (map.width * scale - window.innerWidth) / 2;
  const maxY = (map.height * scale - window.innerHeight) / 2;

  posX = Math.min(maxX, Math.max(-maxX, posX));
  posY = Math.min(maxY, Math.max(-maxY, posY));

  map.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}

// Zoom pakai scroll
window.addEventListener("wheel", e => {
  e.preventDefault();
  if (e.deltaY < 0) {
    scale = Math.min(scale + 0.1, maxScale);
  } else {
    scale = Math.max(scale - 0.1, minScale);
  }
  updateTransform();
}, { passive: false });

// Drag
map.addEventListener("mousedown", e => {
  isDragging = true;
  startX = e.clientX - posX;
  startY = e.clientY - posY;
  map.style.cursor = "grabbing";
});

window.addEventListener("mousemove", e => {
  if (!isDragging) return;
  posX = e.clientX - startX;
  posY = e.clientY - startY;
  updateTransform();
});

window.addEventListener("mouseup", () => {
  isDragging = false;
  map.style.cursor = "grab";
});
