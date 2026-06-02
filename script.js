document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggles the 'X' animation and drops down/slides in the mobile menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });

    // Closes the navbar automatically when a user clicks any section link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navLinks.classList.remove('active');
        });
    });

    // ... (panatilihin mo rito sa ilalim yung project list filtering code mo)
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PROJECT FILTER FUNCTIONALITY
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex'; // Show all
                } else if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex'; // Show matching category
                } else {
                    card.style.display = 'none'; // Hide non-matching category
                }
            });
        });
    });

    // 2. CONTACT FORM SUBMISSION HANDLER
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent standard page reload
        
        // demo alert
        alert('Thank you for your message! I will get back to you shortly.');
        contactForm.reset(); // Clear the inputs after successful submit
    });
});
```http://googleusercontent.com/image_generation_content/196`
