const menuButton = document.getElementById('menuButton');
const closeMenuButton = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const body = document.body;

function openMobileMenu() {
    menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
    menuOverlay.classList.add('opacity-40');

    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');

    body.classList.add('no-scroll');
}

// Function to close the mobile menu
function closeMobileMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');

    setTimeout(() => {
        menuOverlay.classList.remove('opacity-40');
        menuOverlay.classList.add('opacity-0', 'pointer-events-none');
        // Re-enable body scrolling
        body.classList.remove('no-scroll');
    }, 300);
}

menuButton.addEventListener('click', openMobileMenu);
closeMenuButton.addEventListener('click', closeMobileMenu);
menuOverlay.addEventListener('click', closeMobileMenu);