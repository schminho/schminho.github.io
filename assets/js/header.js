document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector("header");
    const tolerance = 20; // Tolerance for smoother behavior
    const fadeDuration = 300; // Duration for fade effect in milliseconds
    let isHidden = false; // Track if the header is hidden

    // Apply initial styles for smooth fade transitions
    header.style.transition = `top ${fadeDuration}ms ease-in-out, opacity ${fadeDuration}ms ease-in-out`;

    window.addEventListener("scroll", () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop + tolerance && !isHidden) {
            // Scrolling down: hide the header
            header.style.top = "-80px";
            header.style.opacity = "0";
            isHidden = true;
        } else if (currentScrollTop < lastScrollTop - tolerance && isHidden) {
            // Scrolling up: show the header
            header.style.top = "0";
            header.style.opacity = "1";
            isHidden = false;
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative values
    });
});
