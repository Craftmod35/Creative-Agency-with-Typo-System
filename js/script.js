const hamburger = document.querySelector(".nav__hamburger");
const closeBtn = document.querySelector(".nav__close");
const drawer = document.querySelector(".nav__drawer");
const overlay = document.querySelector(".nav__overlay");
const links = document.querySelectorAll(".nav__list--drawer a");

function openMenu() {
  drawer.classList.add("is-active");
  overlay.classList.add("is-active");
  hamburger.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  drawer.classList.remove("is-active");
  overlay.classList.remove("is-active");
  hamburger.classList.remove("is-active");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});
