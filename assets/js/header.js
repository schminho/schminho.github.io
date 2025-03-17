/* Mobile Menu */
.mobile-menu {
    position: fixed;
    top: 0;
    right: -100%; /* Start hidden off-screen */
    width: 250px;
    height: 100%;
    background-color: #003300; /* Dark green */
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    transition: right 0.3s ease-in-out;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
}

/* When menu is open */
.mobile-menu.open {
    right: 0; /* Slide into view */
}

/* Close button */
.close-menu {
    background: none;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
    align-self: flex-end;
}

/* Prevent scrolling when mobile menu is open */
.no-scroll {
    overflow: hidden;
}
