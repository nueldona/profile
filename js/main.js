const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu__nav');
const menuBranding = document.querySelector('.menu__branding');
const navItem = document.querySelectorAll('.nav-items');

// set initial state of menu 
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));

    // set menu state
    showMenu = true;


  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));

    // set menu state
    showMenu = false;
  }
}


