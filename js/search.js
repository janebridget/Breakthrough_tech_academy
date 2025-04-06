/*<!-- 
Name: [NAKAZZI JANEBRIDGET]
Reg No: [23/U/BIT/1093/K/EVE]
Student No: [2023001093]
Year of Study: [YEAR2 SEM2]
Course Name: SCRIPTING LANGUAGE
-->*/
const searchInput = document.getElementById("search-input");
const courseCards = document.querySelectorAll(".course-card");

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();
  
  courseCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(keyword)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
