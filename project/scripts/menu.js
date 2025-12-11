document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById('menu-button');
    const navigation = document.querySelector('.navigation');

    if (!menuButton || !navigation) return;

    menuButton.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('show');

        // Update aria state
        menuButton.setAttribute('aria-expanded', isOpen);

    // SHOW X when menu is open
            if (isOpen) {
                menuButton.classList.add("open");
            } else {
                menuButton.classList.remove("open");
            }

        console.log(isOpen ? "Menu opened" : "Menu closed");
    });
});