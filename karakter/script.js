document.addEventListener("DOMContentLoaded", () => {
  const classFilter = document.getElementById("filterClass");
  const socialFilter = document.getElementById("filterSocial");
  const cards = document.querySelectorAll(".card");

  function applyFilters() {
    const selectedClass = classFilter.value;
    const selectedSocial = socialFilter.value;

    cards.forEach(card => {
      const cardClass = card.dataset.class;
      const cardSocial = card.dataset.social;

      const matchClass = selectedClass === "all" || cardClass === selectedClass;
      const matchSocial = selectedSocial === "all" || cardSocial === selectedSocial;

      card.style.display = (matchClass && matchSocial) ? "block" : "none";
    });
  }

  classFilter.addEventListener("change", applyFilters);
  socialFilter.addEventListener("change", applyFilters);
});

