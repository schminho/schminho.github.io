let lastScrollTop = 0; // Track the last scroll position
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down: hide the header
        header.style.top = '-60px';
    } else {
        // Scrolling up: show the header
        header.style.top = '0';
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Avoid negative values
});
