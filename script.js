document.addEventListener("DOMContentLoaded", function () {
    let brandIntro = document.querySelector(".brand-intro");
    let navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        // Fade out the brand intro and fade in the navbar
        if (scrollY > 100) {
            brandIntro.classList.add("hidden");

            // Delay hiding the brand intro completely until the fade-out is complete
            setTimeout(() => {
                brandIntro.style.visibility = "hidden"; // Fully hide after fade-out
            }, 500); // Match the duration of the opacity transition (0.5s)

            // Show the navbar after the logo fades out
            navbar.style.display = "flex"; // Show the navbar
            navbar.style.opacity = "1"; // Fade in the navbar
        } else {
            brandIntro.classList.remove("hidden");
            brandIntro.style.visibility = "visible"; // Make it visible again
            navbar.style.opacity = "0"; // Fade out the navbar
            setTimeout(() => {
                navbar.style.display = "none"; // Hide the navbar after fade-out
            }, 500); // Match the duration of the opacity transition
        }
    });

    // Initially hide the navbar
    navbar.style.display = "none";
    navbar.style.opacity = "0";

    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active"); // Toggle the sidebar visibility
    });
});