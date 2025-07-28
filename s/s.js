document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default jump
            e.preventDefault();

            // Get the target section's ID from the href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll smoothly to the target section
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});