document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector("header");
    const tolerance = 50;
    const fadeDuration = 300;
    let isHidden = false;

    // Apply smooth fade and slide transitions
    header.style.transition = `top ${fadeDuration}ms ease-in-out, opacity ${fadeDuration}ms ease-in-out`;

    window.addEventListener("scroll", () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(currentScrollTop - lastScrollTop) > tolerance) {
            if (currentScrollTop > lastScrollTop && !isHidden) {
                header.style.top = "-80px";
                header.style.opacity = "0";
                isHidden = true;
            } else if (currentScrollTop < lastScrollTop && isHidden) {
                header.style.top = "0";
                header.style.opacity = "1";
                isHidden = false;
            }
            lastScrollTop = currentScrollTop;
        }
    });

    // Mobile Menu Toggle Functionality
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("menu-overlay");

    if (mobileMenuBtn && mobileMenu && overlay) {
        mobileMenuBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            document.body.classList.toggle("no-scroll");
            mobileMenu.classList.toggle("open");
            overlay.classList.toggle("active");
            mobileMenuBtn.classList.toggle("open"); // Toggle burger animation
        });

        // Close menu when clicking on the overlay
        overlay.addEventListener("click", function () {
            closeMenu();
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMenu();
            }
        });

        function closeMenu() {
            document.body.classList.remove("no-scroll");
            mobileMenu.classList.remove("open");
            overlay.classList.remove("active");
            mobileMenuBtn.classList.remove("open");
        }
    }
});
