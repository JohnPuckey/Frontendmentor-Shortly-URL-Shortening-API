

// Nav menu toggle button

const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('nav');

let showMenu = false // set initial menu state

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close')
        menuNav.classList.add('show')

        showMenu = true;
    } else {
        menuBtn.classList.remove('close')
        menuNav.classList.remove('show')

        showMenu = false;
    }
}