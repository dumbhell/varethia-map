const map = document.getElementById("map");
const container = document.getElementById("map-container");

let scale = 1;
let posX = 0, posY = 0;
let isDragging = false;
let startX, startY;

const minScale = 1;   // zoom normal
const maxScale = 3;   // maksimal zoom

function updateTransform() {
  // ukuran asli map
  const mapWidth = map.naturalWidth * scale;
  const mapHeight = map.naturalHeight * scale;

  // ukuran container
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // batas gerakan biar tidak keluar
  const maxX = Math.max(0, (mapWidth - containerWidth) / 2);
  const maxY = Math.max(0, (mapHeight - containerHeight) / 2);

  // clamp posisi
  posX = Math.min(maxX, Math.max(-maxX, posX));
  posY = Math.min(maxY, Math.max(-maxY, posY));

  map.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}

// Zoom pakai scroll
container.addEventListener("wheel", e => {
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

// Auto center saat pertama kali load
window.addEventListener("load", () => {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const mapWidth = map.naturalWidth;
  const mapHeight = map.naturalHeight;

  // Hitung scale agar map fit ke container (kecuali sidebar)
  const scaleX = containerWidth / mapWidth;
  const scaleY = containerHeight / mapHeight;
  scale = Math.min(scaleX, scaleY); // pilih yang kecil biar muat semua

  // posisi awal di tengah
  posX = (containerWidth - mapWidth * scale) / 2;
  posY = (containerHeight - mapHeight * scale) / 2;

  updateTransform();
});
