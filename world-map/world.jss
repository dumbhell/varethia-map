document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".benua-panel");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active dari semua tombol
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Sembunyikan semua panel
      panels.forEach(panel => panel.style.display = "none");

      // Tampilkan panel yang sesuai
      const target = button.dataset.benua;
      document.getElementById(target).style.display = "block";
    });
  });
});
