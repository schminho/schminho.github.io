document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0; // Tracks the last scroll position
    const header = document.querySelector("header");
    const tolerance = 50; // Distance in pixels before triggering hide/show
    const fadeDuration = 300; // Duration for fade effect in milliseconds
    let isHidden = false; // Tracks if the header is currently hidden

    // Apply smooth fade and slide transitions
    header.style.transition = `top ${fadeDuration}ms ease-in-out, opacity ${fadeDuration}ms ease-in-out`;

    window.addEventListener("scroll", () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(currentScrollTop - lastScrollTop) > tolerance) {
            if (currentScrollTop > lastScrollTop && !isHidden) {
                // Scrolling down: hide the header
                header.style.top = "-80px";
                header.style.opacity = "0";
                isHidden = true;
            } else if (currentScrollTop < lastScrollTop && isHidden) {
                // Scrolling up: show the header
                header.style.top = "0";
                header.style.opacity = "1";
                isHidden = false;
            }
            lastScrollTop = currentScrollTop; // Update the last scroll position
        }
    });

    // Mobile Menu Toggle Functionality
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenuBtn = document.getElementById("close-menu-btn");

    if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
        // Open Mobile Menu
        mobileMenuBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            mobileMenu.classList.add("open");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });

        // Close Mobile Menu
        closeMenuBtn.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
            document.body.style.overflow = "unset"; // Enable scrolling
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.remove("open");
                document.body.style.overflow = "unset";
            }
        });
    }
});
