import { Controller } from "@hotwired/stimulus";

/**
 * Navbar Stimulus Controller
 * Gère l'état de la navbar au scroll et le menu mobile
 * Respecte les bonnes pratiques Symfony UX
 */
export default class extends Controller {
    static targets = ["navbar", "toggler", "collapse"];
    static classes = ["scrolled"];
    static values = {
        scrollThreshold: { type: Number, default: 5 },
    };

    connect() {
        // Bind les méthodes pour conserver le contexte
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        // Ajouter l'event listener de scroll
        window.addEventListener("scroll", this.handleScroll, { passive: true });

        // Ajouter l'event listener pour fermer le menu en cliquant à l'extérieur
        document.addEventListener("click", this.handleClickOutside);

        // État initial basé sur la position de scroll
        this.checkScrollPosition();
    }

    disconnect() {
        // Nettoyer les event listeners
        window.removeEventListener("scroll", this.handleScroll);
        document.removeEventListener("click", this.handleClickOutside);
    }

    /**
     * Gère le scroll de la fenêtre
     */
    handleScroll() {
        this.checkScrollPosition();
    }

    /**
     * Vérifie la position de scroll et applique les classes appropriées
     */
    checkScrollPosition() {
        const isScrolled = window.scrollY > this.scrollThresholdValue;

        if (isScrolled) {
            this.navbarTarget.classList.add(this.scrolledClass);
        } else {
            this.navbarTarget.classList.remove(this.scrolledClass);
        }
    }

    /**
     * Toggle le menu mobile
     */
    toggleMobileMenu() {
        const isExpanded = this.togglerTarget.getAttribute("aria-expanded") === "true";

        if (isExpanded) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    /**
     * Ouvre le menu mobile
     */
    openMobileMenu() {
        this.togglerTarget.setAttribute("aria-expanded", "true");
        this.collapseTarget.classList.add("show");
        this.navbarTarget.classList.add(this.scrolledClass);

        // Dispatch un event personnalisé
        this.dispatch("opened", { detail: { menu: "mobile" } });
    }

    /**
     * Ferme le menu mobile
     */
    closeMobileMenu() {
        this.togglerTarget.setAttribute("aria-expanded", "false");
        this.collapseTarget.classList.remove("show");

        // Recheck scroll position pour la classe scrolled
        this.checkScrollPosition();

        // Dispatch un event personnalisé
        this.dispatch("closed", { detail: { menu: "mobile" } });
    }

    /**
     * Gère les clics sur les liens de navigation
     * Ferme automatiquement le menu mobile
     */
    linkClick(event) {
        // Fermer le menu mobile sur clic de lien
        if (this.collapseTarget.classList.contains("show")) {
            this.closeMobileMenu();
        }

        // Pour les liens d'ancre, gérer le smooth scroll
        const href = event.currentTarget.getAttribute("href");
        if (href && href.startsWith("#")) {
            event.preventDefault();
            this.smoothScrollToAnchor(href);
        }
    }

    /**
     * Ferme le menu mobile si on clique à l'extérieur
     */
    handleClickOutside(event) {
        if (!this.navbarTarget.contains(event.target) && this.collapseTarget.classList.contains("show")) {
            this.closeMobileMenu();
        }
    }

    /**
     * Smooth scroll vers une ancre
     */
    smoothScrollToAnchor(anchor) {
        const targetElement = document.querySelector(anchor);
        if (targetElement) {
            // Calculer l'offset pour la navbar fixe
            const navbarHeight = this.navbarTarget.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    }

    /**
     * Gère l'activation du dropdown utilisateur
     */
    toggleUserDropdown(event) {
        event.preventDefault();

        const dropdown = event.currentTarget.nextElementSibling;
        const isOpen = dropdown.classList.contains("show");

        // Fermer tous les autres dropdowns ouverts
        this.closeAllDropdowns();

        if (!isOpen) {
            dropdown.classList.add("show");
            event.currentTarget.setAttribute("aria-expanded", "true");
        }
    }

    /**
     * Ferme tous les dropdowns ouverts
     */
    closeAllDropdowns() {
        const dropdowns = this.navbarTarget.querySelectorAll(".dropdown-menu");
        const toggles = this.navbarTarget.querySelectorAll(".dropdown-toggle");

        dropdowns.forEach((dropdown) => dropdown.classList.remove("show"));
        toggles.forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
    }
}
