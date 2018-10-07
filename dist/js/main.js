// Select elements from DOM

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrand = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set state of menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuBrand.classList.add("show");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuBrand.classList.remove("show");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}
