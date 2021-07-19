// Sticky navbar
window.addEventListener("scroll", function(){
    var navbar = document.querySelector("header");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})
// Sticky navbar

// Burger menu
const burgerButton = document.querySelector('.nav-toggle-button')[0]
const navbarItems = document.querySelector('.navbar__items')[0]

burgerButton.addEventListener('click', () => {
    navbarItems.classList.toggle('active')
})
// Burger menu