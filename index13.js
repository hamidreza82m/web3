document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.main-nav');
    const close = document.getElementById('close');
    
    toggleBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    close.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });

});
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = false;
}

themeToggle.addEventListener('change', function () {
    if (this.checked) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        
    }
});