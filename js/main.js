const mMenu = document.querySelector('.m-menu'),
menuButton = mMenu.querySelector('.menu-button'),
menuSidebar = document.querySelector('.menu-sidebar');

const sidebarToggle = () => {
    menuSidebar.classList.toggle('menu-sidebar-active');
    menuButton.classList.toggle('menu-button-active');
}

mMenu.addEventListener('click', sidebarToggle);
