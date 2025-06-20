import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

/**
 * Navigation component for JJA DEV
 * Handles scroll state and mobile menu toggle using React state management
 */
const Nav = ({ link_home, logo }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Optimized scroll handler with useCallback
    const handleScroll = useCallback(() => {
        const scrolled = window.scrollY > 5;
        setIsScrolled(scrolled);
    }, []);

    // Handle mobile menu toggle
    const handleMobileMenuToggle = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    // Close mobile menu when clicking outside or on links
    const handleLinkClick = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    // Generate navbar classes based on state
    const navbarClasses = [
        "navbar",
        "navbar-expand-lg",
        "fixed-top",
        "navbar-custom",
        (isScrolled || isMobileMenuOpen) && "scrolled",
    ]
        .filter(Boolean)
        .join(" ");
    return (
        <nav className={navbarClasses}>
            <div className="container">
                <div id="jjadev_logo">
                    <a
                        className="navbar-brand d-flex align-items-center"
                        href={link_home}
                        title="JJA DEV - Création de sites web et applications mobiles dans le Jura"
                        onClick={handleLinkClick}
                    >
                        <img
                            src={logo}
                            srcSet={logo}
                            width={40}
                            height={40}
                            alt="Logo de l'entreprise"
                            title="JJA DEV - Création de sites web et applications mobiles"
                        />
                        <span className="ms-3">JJA DEV</span>
                    </a>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleMobileMenuToggle}
                    aria-controls="navbarNav"
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Basculer la navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse justify-content-end ${isMobileMenuOpen ? "show" : ""}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                aria-current="page"
                                href={link_home}
                                title="Retour à l'accueil"
                                onClick={handleLinkClick}
                            >
                                Accueil
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href={`${link_home}#about`}
                                title="En savoir plus sur JJA DEV"
                                onClick={handleLinkClick}
                            >
                                À propos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://github.com/jerome-jutteau"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Voir mes projets sur GitHub"
                                onClick={handleLinkClick}
                            >
                                Github
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href={`${link_home}#contact`}
                                title="Me contacter"
                                onClick={handleLinkClick}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="crmDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                title="Accès CRM"
                            >
                                <i className="fas fa-user-circle" aria-hidden="true"></i>
                                <span className="visually-hidden">Menu utilisateur</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="crmDropdown">
                                <li>
                                    <a className="dropdown-item" href="/admin">
                                        Se connecter
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/admin/logout">
                                        Se déconnecter
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// PropTypes for type checking
Nav.propTypes = {
    link_home: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
};

// Default props
Nav.defaultProps = {
    link_home: "/",
    logo: "/build/images/logo_jjadev.png",
};

export default Nav;
