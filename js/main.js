// Mobile menu toggle
const toggleBtn = document.getElementById("navToggle");
const navList = document.getElementById("navList");
if (toggleBtn && navList) {
  toggleBtn.addEventListener("click", () => {
    const expanded =
      toggleBtn.getAttribute("aria-expanded") === "true" ? false : true;
    navList.classList.toggle("nav__list--open");
    toggleBtn.setAttribute("aria-expanded", expanded);
  });
  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("nav__list--open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove("nav__list--open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}
// Back to top
const backBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) backBtn.classList.add("back-to-top--visible");
  else backBtn.classList.remove("back-to-top--visible");
});
backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
