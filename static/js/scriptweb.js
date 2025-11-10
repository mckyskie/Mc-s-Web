// === Mode Toggle ===
const modeBtn = document.getElementById("mode-toggle");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  modeBtn.textContent = isDark ? "☀️" : "🌙";
});

// === Contact Buttons ===
function openInstagram() {
  window.open("https://www.instagram.com/mckyyy.kun", "_blank");
}

function openFacebook() {
  window.open("https://www.facebook.com/mckyrence", "_blank");
}
