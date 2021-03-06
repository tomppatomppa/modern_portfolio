// select DOM items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".btn-nav");
const menuBranding = document.querySelector(".menu-branding");
//query selector choose the first
//thats why queryselector ALL is used
//puts them into a node list(like array)
const navItems = document.querySelectorAll(".nav-item");

//init state of menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        showMenu = false;

    }
}