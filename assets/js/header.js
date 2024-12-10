document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector("header");
    const tolerance = 20; // Tolerance for smoother appearance
    const fadeDuration = 300; // Fade duration in milliseconds

    // Apply initial transition for smooth fading
    header.style.transition = `top ${fadeDuration}ms ease-in-out, opacity ${fadeDuration}ms ease-in-out`;

    window.addEventListener("scroll", () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop + tolerance) {
            // Scrolling down: hide the header
            header.style.top = "-80px";
            header.style.opacity = "0";
        } else if (currentScrollTop < lastScrollTop - tolerance) {
            // Scrolling up: show the header
            header.style.top = "0";
            header.style.opacity = "1";
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative values
    });
});
