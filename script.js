// SELECTORS
let menuOpen = document.getElementById("menu");
let menuClose = document.getElementById("menu");
let navLinks = document.getElementById("nav-links");

menuOpen.addEventListener('click', openMenu);

function openMenu(){
    console.log('just clicked on menu');
    navLinks.classList.add('nav-links')
}