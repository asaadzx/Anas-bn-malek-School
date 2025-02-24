document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            const templateParams = {
                from_name: name,
                from_email: email,
                message: message
            };

            emailjs.send('service_gc0zlia', 'template_aupbbra', templateParams)
                .then(function(response) {
                    alert('Thank you for reaching out! We will get back to you soon.');
                    contactForm.reset();
                }, function(error) {
                    alert('Failed to send the message. Please try again later.');
                });
        });
    }

    (function() {
emailjs.init("Ja5oIWs-IcTsAThMK");
})(); 

    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    };

    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    const sections = document.querySelectorAll('.section, .teacher-card, .news-item img');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});