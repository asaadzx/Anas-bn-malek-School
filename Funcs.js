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

document.addEventListener('DOMContentLoaded', function() {
    const links = {
        Prep1: {
            English: "https://example.com/option2/english",
            Arabic: "https://example.com/option2/arabic",
            Science: "https://example.com/option2/science"
        },
        Prep2: {
            English: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/English%20language_2_Preparatory/English%20language_2_Preparatory.html",
            Arabic: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Arabic%20language__2_Preparatory/Arabic%20language__2_Preparatory.html",
            Science: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Science_ENGLISH_2_Preparatory/Science_ENGLISH_2_Preparatory.html"
        },
        Prep3: {
            English: "https://example.com/option3/english",
            Arabic: "https://example.com/option3/arabic",
            Science: "https://example.com/option3/science"
        }
    };

    const downloadOption = document.getElementById('downloadOption');
    const updateLinks = (selectedOption) => {
        document.querySelector('.English').href = links[selectedOption].English;
        document.querySelector('.Arabic').href = links[selectedOption].Arabic;
        document.querySelector('.Science').href = links[selectedOption].Science;

        document.querySelectorAll('#downloadLinks li').forEach(li => {
            li.classList.remove('show');
            setTimeout(() => li.classList.add('show'), 100);
        });
    };

    downloadOption.addEventListener('change', function() {
        updateLinks(this.value);
    });

    // Initial setup
    updateLinks(downloadOption.value);
});