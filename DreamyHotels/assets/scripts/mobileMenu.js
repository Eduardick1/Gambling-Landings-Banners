const mobileMenu = document.getElementById("mobileMenu");
function toggleMenu() {
  mobileMenu.classList.toggle("max-sm:hidden");
  document.getElementById("mobileMenuLeft").classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
}

document
  .getElementById("mobileMenuBtn")
  .addEventListener("click", () => toggleMenu());

mobileMenu.addEventListener("click", (e) => {
  if (e.target.nodeName === "A" || "SPAN") toggleMenu();
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 640px)").matches) {
    document.getElementById("mobileMenuLeft").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
});
