document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("filterClass");
  const cards = document.querySelectorAll(".card");

  select.addEventListener("change", () => {
    const selected = select.value;
    cards.forEach(card => {
      if (selected === "all" || card.dataset.class === selected) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
