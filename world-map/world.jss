document.addEventListener("DOMContentLoaded", () => {
  const classFilter = document.getElementById("filterClass");
  const socialFilter = document.getElementById("filterSocial");
  const cards = document.querySelectorAll(".card");

  function applyFilters() {
    const selectedClass = classFilter.value;
    cards.forEach(card => {
      const cardClass = card.dataset.class;
      const matchClass = selectedClass === "all" || cardClass === selectedClass;
      card.style.display = (matchClass) ? "block" : "none";
    });
  }

  classFilter.addEventListener("change", applyFilters);
  socialFilter.addEventListener("change", applyFilters);
});
