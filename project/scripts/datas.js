
// -------------------------------
// 1. JavaScript Object
// -------------------------------
// Tracks simple site-wide interaction stats (FAQ toggles, menu opens, etc.)
const siteStats = {
    faqOpened: 0,
    faqClosed: 0,
    menuOpened: 0,
    menuClosed: 0
};

// -------------------------------
// 2. Array + Array Method
// -------------------------------
// A friendly rotating message shown in the console or can be used in the UI.
const tips = [
    "Did you know? Solar can cut your bill by up to 90% in some regions!",
    "Tip: tilt your solar panels according to your latitude for maximum efficiency.",
    "Remember: cleaning your panels annually helps maintain performance.",
    "Federal tax credit remains at 30% — a huge savings opportunity!"
];

// Pick a random tip using an array method
function getRandomTip() {
    const index = Math.floor(Math.random() * tips.length);
    return tips[index]; // returns a random string
}

// -------------------------------
// 3. Template Literal Example
// -------------------------------
function formatMessage(action) {
    return `User performed: ${action}. Keep exploring solar!`;
}

// -------------------------------
// 4. localStorage Usage
// -------------------------------
// Initialize FAQ click count in localStorage if not present
if (!localStorage.getItem("faqClicks")) {
    localStorage.setItem("faqClicks", "0");
}

// Helper to increment stored count
function incrementFaqClicks() {
    let current = Number(localStorage.getItem("faqClicks"));
    localStorage.setItem("faqClicks", String(current + 1));
}

// -------------------------------
// 5. Event Wiring for FAQ + Menu
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Accessible FAQ interactions
    // -------------------------------
    const faqButtons = document.querySelectorAll('.question');

    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const expanded = btn.getAttribute('aria-expanded') === 'true';

            // Toggle visibility
            btn.setAttribute('aria-expanded', !expanded);
            answer.hidden = expanded;

            // Track stats
            if (expanded) {
                siteStats.faqClosed++;
            } else {
                siteStats.faqOpened++;
            }

            // Update localStorage
            incrementFaqClicks();

            console.log(formatMessage(`FAQ toggled; total FAQ clicks: ${localStorage.getItem("faqClicks")}`));
        });
    });

    // -------------------------------
    // Mobile menu interactions
    // -------------------------------
    const menuButton = document.getElementById('menu-button');
    const navigation = document.querySelector('.navigation');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            const isOpen = navigation.classList.toggle('show');

            if (isOpen) {
                siteStats.menuOpened++;
                console.log(formatMessage("Menu opened"));
            } else {
                siteStats.menuClosed++;
                console.log(formatMessage("Menu closed"));
            }

            // Occasionally show a random solar tip
            if (Math.random() > 0.6) {
                console.log(getRandomTip());
            }
        });
    }
});
    

    // Menu interactions -------------------
    const menuButton = document.getElementById('menu-button');
    const navigation = document.querySelector('.navigation');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            const isOpen = navigation.classList.toggle('show');

            if (isOpen) {
                siteStats.menuOpened++;
                console.log(formatMessage("Menu opened"));
            } else {
                siteStats.menuClosed++;
                console.log(formatMessage("Menu closed"));
            }

            // Show a random solar tip occasionally
            if (Math.random() > 0.6) {
                console.log(getRandomTip());
            }
        });
    }

