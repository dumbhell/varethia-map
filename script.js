const map = document.getElementById("map");

let scale = 1;
const minScale = 1;   // tidak bisa lebih kecil dari normal
const maxScale = 3;   // maksimal zoom in 3x

map.addEventListener("wheel", function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    // Zoom in
    scale = Math.min(scale + 0.1, maxScale);
  } else {
    // Zoom out
    scale = Math.max(scale - 0.1, minScale);
  }

  map.style.transform = `scale(${scale})`;
});
