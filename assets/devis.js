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

// Récupérer les éléments HTML nécessaires
const servicesCheckbox = document.querySelectorAll('input[name="devis[services][]"]');
const priceHTInput = document.querySelector('input[name="devis[price_ht]"]');
const priceTTCInput = document.querySelector('input[name="devis[price_ttc]"]');

// Écouter les changements de sélection des checkboxes
servicesCheckbox.forEach(checkbox => {

    checkbox.addEventListener('change', () => {
        // Initialiser le prix total à 0
        let totalPrice = 0;

        // Parcourir les checkboxes cochées pour calculer le prix total
        servicesCheckbox.forEach(checkbox => {
            if (checkbox.checked) {
                // Récupérer le prix du service associé
                const servicePrice = parseFloat(checkbox.dataset.price);
                if (!isNaN(servicePrice)) {
                    totalPrice += servicePrice;
                }
            }
        });

        // Remplir le champ d'entrée price_HT avec le prix total
        let TTHT = totalPrice;
        let TVA = TTHT * (20 / 100);
        let TTTC = TVA + TTHT;
        priceHTInput.value = TTHT.toFixed(2);
        priceTTCInput.value = TTTC.toFixed(2);

    });
});

// Récupérer le conteneur de la collection
let collectionContainer = document.querySelector('.collection-container');

// Récupérer le prototype du champ de la collection
let collectionPrototype = collectionContainer.getAttribute('data-prototype');

// Fonction pour remplacer les placeholders dans le prototype par le nouvel index
function replacePrototypeIndex(prototype, index) {
    return prototype.replace(/__name__/g, index);
}

// Fonction pour ajouter un nouvel élément à la collection
function addCollectionItem() {
    // Créer un nouvel élément en utilisant le prototype
    let newItem = document.createElement('div');
    let count = collectionContainer.children.length;

    newItem.innerHTML = replacePrototypeIndex(collectionPrototype, count);

    // Ajouter le nouvel élément à la collection
    collectionContainer.appendChild(newItem);
}

// Ajouter une ligne de champs au chargement de la page
addCollectionItem();

// Attacher un gestionnaire d'événement pour ajouter un nouvel élément lorsque le bouton est cliqué
let addButton = document.querySelector('.add-item-button');
addButton.addEventListener('click', addCollectionItem);