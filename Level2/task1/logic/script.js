document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        if (navMenu.classList.contains("active")) {
            navMenu.style.transform = "translateX(0)";
            navMenu.style.opacity = "1";
        } else {
            navMenu.style.transform = "translateX(-100%)";
            navMenu.style.opacity = "0";
        }
    });
});
