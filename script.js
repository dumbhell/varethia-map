const map = document.getElementById("map");
const container = document.getElementById("map-container");

let scale = 1;
const minScale = 1;
const maxScale = 3;

let posX = 0;
let posY = 0;
let startX, startY;
let isDragging = false;

// --- fungsi update transform ---
function updateTransform() {
  map.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}

// --- fungsi untuk membatasi agar tidak keluar frame ---
function clampPosition() {
  const rect = map.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // lebar & tinggi map setelah di-zoom
  const mapWidth = map.naturalWidth * scale;
  const mapHeight = map.naturalHeight * scale;

  const maxX = Math.max(0, (mapWidth - containerRect.width) / 2);
  const maxY = Math.max(0, (mapHeight - containerRect.height) / 2);

  // batasi posX & posY
  posX = Math.min(maxX, Math.max(-maxX, posX));
  posY = Math.min(maxY, Math.max(-maxY, posY));
}

// --- Zoom pakai scroll ---
map.addEventListener("wheel", function (e) {
  e.preventDefault();
  const oldScale = scale;

  if (e.deltaY < 0) {
    scale = Math.min(scale + 0.1, maxScale);
  } else {
    scale = Math.max(scale - 0.1, minScale);
  }

  // adjust supaya zoom terpusat
  const rect = map.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  const dx = (offsetX / oldScale) * (scale - oldScale);
  const dy = (offsetY / oldScale) * (scale - oldScale);

  posX -= dx;
  posY -= dy;

  clampPosition();
  updateTransform();
});

// --- Drag (geser) ---
map.addEventListener("mousedown", function (e) {
  isDragging = true;
  startX = e.clientX - posX;
  startY = e.clientY - posY;
});

window.addEventListener("mousemove", function (e) {
  if (!isDragging) return;
  posX = e.clientX - startX;
  posY = e.clientY - startY;

  clampPosition();
  updateTransform();
});

window.addEventListener("mouseup", function () {
  isDragging = false;
});

// --- Init transform ---
updateTransform();
