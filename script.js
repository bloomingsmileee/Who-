
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  menuBtn.textContent = navLinks.classList.contains("open")
    ? "✕"
    : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});
