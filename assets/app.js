import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap.js';

// Import Bootstrap JS components for front office functionality
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";

// any CSS you import will output into a single css file (app.css in this case)
// assets/app.js
const $ = require("jquery"); // import jQuery

require("bootstrap");

// Import the main CSS file - OBLIGATOIRE pour avoir les styles !
import "./styles/app.scss";
import "./bootstrap.js";

import("./_layouts/modals");
import("./_layouts/toasts");

// ===========================
// FRONT OFFICE FUNCTIONALITY
// ===========================

// Main DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
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
});
console.debug("Environnement : ", process.env.NODE_ENV);

// Vérifiez si le navigateur supporte les services workers
if (process.env.NODE_ENV !== "development") {
    console.debug("Enregistrement du Service Worker pour la production");

    if ("serviceWorker" in navigator) {
        // Enregistrez le service worker
        navigator.serviceWorker
            .register("/build/service-worker.js")
            .then(function (registration) {
                console.debug("Service Worker enregistré avec succès");
            })
            .catch(function (err) {
                console.debug("L'enregistrement du Service Worker a échoué : ", err);
            });
    }
} else {
    // Désenregistrer les service workers en mode développement
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
            for (let registration of registrations) {
                registration.unregister();
            }
        });
    }
}

registerReactControllerComponents(require.context("./react/controllers/app", true, /\.(j|t)sx?$/));