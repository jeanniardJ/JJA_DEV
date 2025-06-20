// Front Office JavaScript
import "./styles/frontoffice.scss";

// Import Bootstrap JS components as needed
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";

// Main DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
    console.log("Front Office JS loaded");

    // Navbar scroll effect
    const navbar = document.querySelector(".navbar-custom");

    if (navbar) {
        function handleScroll() {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Vérifier au chargement
    }

    // Smooth scrolling pour les liens ancres
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Animation compteurs (si section stats présente)
    const statNumbers = document.querySelectorAll(".stat-number");
    if (statNumbers.length > 0) {
        const animateCounters = () => {
            statNumbers.forEach((counter) => {
                const target = parseInt(counter.dataset.target);
                const duration = 2000; // 2 secondes
                const increment = target / (duration / 16); // 60fps
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current);
                }, 16);
            });
        };

        // Observer pour déclencher l'animation quand visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });

        const statsSection = document.querySelector(".stats-section");
        if (statsSection) {
            observer.observe(statsSection);
        }
    }

    // Effet parallax léger sur le hero
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
        window.addEventListener("scroll", () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroSection.style.transform = `translateY(${parallax}px)`;
        });
    }

    // Animation des cartes au scroll
    const cards = document.querySelectorAll(".card-custom");
    if (cards.length > 0) {
        const cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        cards.forEach((card, index) => {
            card.style.opacity = "0";
            card.style.transform = "translateY(30px)";
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            cardObserver.observe(card);
        });
    }

    // Gestion des formulaires de contact (si présents)
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Validation basique
            const formData = new FormData(this);
            let isValid = true;

            // Vérifier les champs requis
            const requiredFields = this.querySelectorAll("[required]");
            requiredFields.forEach((field) => {
                if (!field.value.trim()) {
                    field.classList.add("is-invalid");
                    isValid = false;
                } else {
                    field.classList.remove("is-invalid");
                }
            });

            if (isValid) {
                // Simuler l'envoi (à remplacer par vraie logique)
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                submitBtn.textContent = "Envoi en cours...";
                submitBtn.disabled = true;

                setTimeout(() => {
                    submitBtn.textContent = "Message envoyé !";
                    submitBtn.classList.remove("btn-primary");
                    submitBtn.classList.add("btn-success");

                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove("btn-success");
                        submitBtn.classList.add("btn-primary");
                        this.reset();
                    }, 2000);
                }, 1000);
            }
        });
    }
});
