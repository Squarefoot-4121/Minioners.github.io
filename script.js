document.addEventListener('DOMContentLoaded', function() {
    // --- Element Selections ---
    const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    // --- Event Listeners ---

    // 1. Navbar background on scroll
    // Adds a background color and blur effect to the navbar when the user scrolls down.
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-gray-900/80', 'backdrop-blur-sm', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-gray-900/80', 'backdrop-blur-sm', 'shadow-lg');
        }
    });

    // 2. Mobile Menu Toggle
    // Shows or hides the mobile menu when the hamburger icon is clicked.
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
    });
    
    // Close mobile menu when a navigation link inside it is clicked.
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mobileMenu.classList.add('hidden');
            menuOpenIcon.classList.remove('hidden');
            menuCloseIcon.classList.add('hidden');
        }
    });

    // 3. Scroll Reveal Animation
    // Uses the Intersection Observer API to detect when an element is visible in the viewport.
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible), add the 'visible' class to trigger the animation.
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible to prevent re-animation.
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible.
    });

    // Observe each element with the 'reveal' class.
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Contact Form Submission (Mock)
    // This is a demonstration. For a real application, you would send the data to a server.
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior.
        
        // Get the user's name from the input field.
        const name = document.getElementById('name').value;
        
        // Display a success message.
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        formMessage.classList.remove('text-red-400');
        formMessage.classList.add('text-green-400');
        
        // Clear the form fields.
        contactForm.reset();
        
        // Remove the success message after 5 seconds.
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    });
});
