<?php
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

namespace App\DataFixtures;

use App\Entity\Contact;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ContactFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Créez un tableau de données de contact
        $contactsData = [
            [
                'name' => 'John Doe',
                'email' => 'john.doe@example.com',
                'phone' => '123-456-7890',
                'objet' => 'Demande d\'information',
                'sujet' => 'Bonjour, je souhaite obtenir des informations supplémentaires.',
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'jane.smith@example.com',
                'phone' => '987-654-3210',
                'objet' => 'Support technique',
                'sujet' => 'J\'ai un problème avec votre service, pouvez-vous m\'aider ?',
            ],
            // Ajoutez d'autres contacts selon vos besoins
        ];

        // Parcourez le tableau et créez des objets Contact
        foreach ($contactsData as $contactData) {
            $contact = new Contact();
            $contact->setName($contactData['name']);
            $contact->setEmail($contactData['email']);
            $contact->setPhone($contactData['phone']);
            $contact->setObjet($contactData['objet']);
            $contact->setSujet($contactData['sujet']);

            // Persistez l'objet Contact
            $manager->persist($contact);
        }

        // Enregistrez les contacts dans la base de données
        $manager->flush();
    }
}
