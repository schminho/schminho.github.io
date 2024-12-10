document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down: hide the header
            header.style.top = "-80px";
        } else {
            // Scrolling up: show the header
            header.style.top = "0";
        }

        lastScrollTop = Math.max(currentScrollTop, 0); // Prevent negative values
    });
});
