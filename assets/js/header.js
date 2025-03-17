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
    const closeMenuBtn = document.getElementById("close-menu-btn");

    if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
        // Open Mobile Menu
        mobileMenuBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            mobileMenu.classList.add("open");
            mobileMenuBtn.style.display = "none";  // Hide burger button
            closeMenuBtn.style.display = "block"; // Show close button
            document.body.classList.add("no-scroll");
        });

        // Close Mobile Menu
        closeMenuBtn.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
            mobileMenuBtn.style.display = "block";  // Show burger button again
            closeMenuBtn.style.display = "none";   // Hide close button
            document.body.classList.remove("no-scroll");
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (e) {
            if (
                !mobileMenu.contains(e.target) &&
                !mobileMenuBtn.contains(e.target) &&
                mobileMenu.classList.contains("open")
            ) {
                mobileMenu.classList.remove("open");
                mobileMenuBtn.style.display = "block";
                closeMenuBtn.style.display = "none";
                document.body.classList.remove("no-scroll");
            }
        });
    }
});
