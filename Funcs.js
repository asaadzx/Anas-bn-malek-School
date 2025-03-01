document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    
    // Teacher card click functionality
    const teacherCards = document.querySelectorAll('.teacher-card');
    teacherCards.forEach(card => {
        card.addEventListener('click', function() {
            const teacherId = this.getAttribute('data-teacher');
            this.classList.add('clicked');
            
            setTimeout(() => {
                window.location.href = `Teachers/${teacherId}.html`;
            }, 500);
        });
    });

    // Contact form submission
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

    // Initialize EmailJS
    (function() {
        emailjs.init("Ja5oIWs-IcTsAThMK");
    })(); 

    // Smooth scroll to section
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

    // Add smooth scroll to navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    // Intersection Observer for animations
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

    // Download links based on dropdown selection
    const links = {
        Primary: {
            Grade1: {
                English: "https://example.com/grade1/english",
                Arabic: "https://example.com/grade1/arabic",
                Science: "https://example.com/grade1/science",
                Math: "https://example.com/grade1/math",
                Social: "https://example.com/grade1/social",
                ICT: "https://example.com/grade1/ict"
            },
            Grade2: {
                English: "https://example.com/grade2/english",
                Arabic: "https://example.com/grade2/arabic",
                Science: "https://example.com/grade2/science",
                Math: "https://example.com/grade2/math",
                Social: "https://example.com/grade2/social",
                ICT: "https://example.com/grade2/ict"
            },
            Grade3: {
                English: "https://example.com/grade2/english",
                Arabic: "https://example.com/grade2/arabic",
                Science: "https://example.com/grade2/science",
                Math: "https://example.com/grade2/math",
                Social: "https://example.com/grade2/social",
                ICT: "https://example.com/grade2/ict"
            },
            Grade4: {
                English: "https://example.com/grade2/english",
                Arabic: "https://example.com/grade2/arabic",
                Science: "https://example.com/grade2/science",
                Math: "https://example.com/grade2/math",
                Social: "https://example.com/grade2/social",
                ICT: "https://example.com/grade2/ict"
            },
            Grade5: {
                English: "https://example.com/grade2/english",
                Arabic: "https://example.com/grade2/arabic",
                Science: "https://example.com/grade2/science",
                Math: "https://example.com/grade2/math",
                Social: "https://example.com/grade2/social",
                ICT: "https://example.com/grade2/ict"
            },
            Grade6: {
                English: "https://example.com/grade2/english",
                Arabic: "https://example.com/grade2/arabic",
                Science: "https://example.com/grade2/science",
                Math: "https://example.com/grade2/math",
                Social: "https://example.com/grade2/social",
                ICT: "https://example.com/grade2/ict"
            },
        },
        Prep: {
            Prep1: {
                English: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/English%20language_1_Preparatory/English%20language_1_Preparatory.html",
                Arabic: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Arabic%20language__1_Preparatory/Arabic%20language__1_Preparatory.html",
                Science: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Science_ENGLISH_1_Preparatory/Science_ENGLISH_1_Preparatory.html",
                Math: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Math_English_1_Preparatory/Math_English_1_Preparatory.html",
                Social: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Social%20Studies_1_Preparatory/Social_Studies_1_Preparatory.html",
                ICT: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/ICT_ENGLISH_1_Preparatory/ICT_ENGLISH_1_Preparatory.html"
            },
            Prep2: {
                English: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/English%20language_2_Preparatory/English%20language_2_Preparatory.html",
                Arabic: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Arabic%20language__2_Preparatory/Arabic%20language__2_Preparatory.html",
                Science: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Science_ENGLISH_2_Preparatory/Science_ENGLISH_2_Preparatory.html",
                Math: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Math_English_2_Preparatory/Math_English_2_Preparatory.html",
                Social: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Social%20Studies_2_Preparatory/Social%20Studies_2_Preparatory.html",
                ICT: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/ICT_ENGLISH_2_Preparatory/ICT_ENGLISH_2_Preparatory.html"
            },
            Prep3: {
                English: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/English%20language_3_Preparatory/English%20language_3_Preparatory.html",
                Arabic: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/Arabic%20language__3_Preparatory/Arabic%20language__3_Preparatory.html",
                Science: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/Science_ENGLISH_3_Preparatory/Science_ENGLISH_3_Preparatory.html",
                Math: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/Math_English_3_Preparatory/Math_English_3_Preparatory.html",
                Social: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/Social%20Studies_3_Preparatory/Social_Studies_3_Preparatory.html",
                ICT: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/ICT_ENGLISH_3_Preparatory/ICT_ENGLISH_3_Preparatory.html"
            },
        },
        Sec: {
            Sec1: {
                English: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/English%20language_1_Preparatory/English%20language_1_Preparatory.html",
                Arabic: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Arabic%20language__1_Preparatory/Arabic%20language__1_Preparatory.html",
                Science: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Science_ENGLISH_1_Preparatory/Science_ENGLISH_1_Preparatory.html",
                Math: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Math_English_1_Preparatory/Math_English_1_Preparatory.html",
                Social: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Social%20Studies_1_Preparatory/Social_Studies_1_Preparatory.html",
                ICT: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/ICT_ENGLISH_1_Preparatory/ICT_ENGLISH_1_Preparatory.html"
            },
            Sec2: {
                English: "https://example.com/sec2/english",
                Arabic: "https://example.com/sec2/arabic",
                Science: "https://example.com/sec2/science",
                Math: "https://example.com/sec2/math",
                Social: "https://example.com/sec2/social",
                ICT: "https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/ICT_ENGLISH_2_Preparatory/ICT_ENGLISH_2_Preparatory.html"
            },
            Sec3: {
                English: "https://example.com/sec2/english",
                Arabic: "https://example.com/sec2/arabic",
                Science: "https://example.com/sec2/science",
                Math: "https://example.com/sec2/math",
                Social: "https://example.com/sec2/social",
                ICT: "https://example.com/sec2/ict"
            },
        }
    };

    // Update download links based on selected option
    const downloadOption = document.getElementById('downloadOption');
    const updateLinks = (selectedOption) => {
        const [category, grade] = selectedOption.split('-');
        const selectedLinks = links[category][grade];

        document.querySelector('.English').href = selectedLinks.English;
        document.querySelector('.Arabic').href = selectedLinks.Arabic;
        document.querySelector('.Science').href = selectedLinks.Science;
        document.querySelector('.Math').href = selectedLinks.Math;
        document.querySelector('.Social').href = selectedLinks.Social;
        document.querySelector('.ICT').href = selectedLinks.ICT;

        document.querySelectorAll('#downloadLinks li').forEach(li => {
            li.classList.remove('show');
            setTimeout(() => li.classList.add('show'), 100);
        });
    };

    // Event listener for dropdown change
    downloadOption.addEventListener('change', function() {
        updateLinks(this.value);
    });

    // Initial setup for download links
    updateLinks(downloadOption.value);
});