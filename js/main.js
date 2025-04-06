/*<!-- 
Name: [NAKAZZI JANEBRIDGET]
Reg No: [23/U/BIT/1093/K/EVE]
Student No: [2023001093]
Year of Study: [YEAR2 SEM2]
Course Name: SCRIPTING LANGUAGE
-->*/
// Toggle between light and dark mode
const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});