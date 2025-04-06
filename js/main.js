// Toggle between light and dark mode
const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});