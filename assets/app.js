/*
 * Copyright (c) 2023. Tous droits réservés.
 * Aucun élément de ce site web ne peut être reproduit, affiché, modifié ou distribué sans la permission écrite préalable du titulaire du droit d'auteur.
 * Ce site web, son contenu et tous les produits créés par JJA DEV sont protégés par les lois sur les droits d'auteur et la propriété intellectuelle. Tous les droits sont réservés à JJA DEV.
 *
 * L'utilisation non autorisée de tout élément de ce site, y compris, mais sans s'y limiter, le texte, les images, les dessins, les graphiques, les logos et les marques de commerce, peut constituer une violation des lois sur le droit d'auteur, des lois sur les marques de commerce ou d'autres lois applicables et peut entraîner des poursuites judiciaires.
 *
 * Pour obtenir la permission d'utiliser du contenu de ce site, veuillez contacter JJA DEV.
 *
 * Merci de votre compréhension et de votre respect envers notre travail créatif et nos droits de propriété intellectuelle.
 */
import { registerReactControllerComponents } from '@symfony/ux-react'

// any CSS you import will output into a single css file (app.css in this case)
// assets/app.js
const $ = require('jquery') // import jQuery

require('bootstrap')

//import './styles/app.scss' // import the main css file
import './bootstrap.js'

import('./_layouts/modals')
import('./_layouts/toasts')

function random() {
    return Math.random()
}

/* Génère 50 bulles aléatoires */
for (let i = 0; i < 10; i++) {
    let bubble = document.createElement('div')
    bubble.classList.add('bubble')
    bubble.classList.add('bubble' + ((i % 5) + 1))
    bubble.style.top = random() * 100 + '%'
    bubble.style.left = random() * 100 + '%'
    bubble.style.transform = 'scale(calc(0.5 + 5 * ' + random() + '))'
    document.body.appendChild(bubble)
}

// Vérifiez si le navigateur supporte les services workers
if ('serviceWorker' in navigator) {
    // Enregistrez le service worker
    navigator.serviceWorker
        .register('/build/service-worker.js')
        .then(function (registration) {
            console.debug('Service Worker enregistré avec succès')
        })
        .catch(function (err) {
            console.debug("L'enregistrement du Service Worker a échoué : ", err)
        })
}

registerReactControllerComponents(require.context('./react/controllers/app', true, /\.(j|t)sx?$/))
