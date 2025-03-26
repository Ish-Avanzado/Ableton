const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const backDrop = document.querySelector(".backDrop");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
    backDrop.classList.toggle("open");
})