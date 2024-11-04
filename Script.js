// Selecting the navbar element
const navbar = document.getElementById('navbar');

// Adding an event listener to window for scroll events
window.addEventListener('scroll', () => {
    // Add 'scrolled' class when page is scrolled past 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
