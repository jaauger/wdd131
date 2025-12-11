/* ------------------------- */
/* menu.js (for reference)   */
/* ------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const navList = document.querySelector(".navigation");

    menuButton.addEventListener("click", () => {
        navList.classList.toggle("open");
        menuButton.classList.toggle("open");
    });
});
