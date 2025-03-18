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
    const menuToggle = document.querySelector("#menu-toggle");
    const icon = menuToggle.querySelector("i"); // Ensure we get the icon inside the button
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevents event conflicts
            mobileMenu.classList.toggle("open");
            menuToggle.classList.toggle("active");
        
            if (menuToggle.classList.contains("active")) {
                icon.classList.replace("fa-bars", "fa-times"); // Change to X
            } else {
                icon.classList.replace("fa-times", "fa-bars"); // Change back to burger
            }
        
            document.body.classList.toggle("no-scroll");
        });
            mobileMenu.classList.toggle("open");
            menuToggle.classList.toggle("active");
            
            const icon = menuToggle.querySelector("i");
            if (menuToggle.classList.contains("active")) {
                icon.classList.replace("fa-bars", "fa-times"); // Swap burger for X
            } else {
                icon.classList.replace("fa-times", "fa-bars"); // Swap back to burger
            }
            
            document.body.classList.toggle("no-scroll");
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (e) {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && mobileMenu.classList.contains("open")) {
                mobileMenu.classList.remove("open");
                menuToggle.classList.remove("active"); // Resets icon
                document.body.classList.remove("no-scroll");
            }
        });
    }
});
