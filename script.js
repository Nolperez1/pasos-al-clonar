const toggleMenu = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});