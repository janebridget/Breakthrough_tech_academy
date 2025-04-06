/*<!-- 
Name: [NAKAZZI JANEBRIDGET]
Reg No: [23/U/BIT/1093/K/EVE]
Student No: [2023001093]
Year of Study: [YEAR2 SEM2]
Course Name: SCRIPTING LANGUAGE
-->*/
const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && subject && message) {
    successMsg.style.display = "block";
    form.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
