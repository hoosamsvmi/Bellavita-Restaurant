if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

const navbuttons = document.querySelectorAll("[data-section]");
navbuttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const sectionid = btn.getAttribute("data-section");
    const section = document.getElementById(sectionid);
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});
const herobutton = document.getElementById("view-menu-btn");
const menu = document.getElementById("menu");
herobutton.addEventListener("click", function () {
  menu.scrollIntoView();
});

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 100;
    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
});
