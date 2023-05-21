const navToggle = document.querySelector(".nav-toggle");
const navMenu= document.querySelector(".menu-nav");

navToggle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu__visible");
});
