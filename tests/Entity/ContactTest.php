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

namespace App\Tests\Entity;

use App\Entity\Contact;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\Validator\ValidatorInterface;

// TODO: Testé la longueur minimum du nombre de characters
// TODO: Testé le numéro de téléphone
class ContactTest extends KernelTestCase
{
    private ValidatorInterface $validator;

    /**
     * @dataProvider dataValideProvider
     */
    public function testValidContact(string $name, string $email, string $phone, string $objet, string $sujet): void
    {
        $contact = (new Contact())
            ->setName($name)
            ->setEmail($email)
            ->setPhone($phone)
            ->setObjet($objet)
            ->setSujet($sujet);

        $violations = $this->validator->validate($contact);

        $this->assertCount(0, $violations);
    }

    public function testInvalidContact(): void
    {
        $contact = new Contact();

        // Simulate an invalid contact with missing required fields
        $violations = $this->validator->validate($contact);

        // Assert that there are validation violations
        $this->assertCount(5, $violations);

        // Assert specific violations for required fields
        $this->assertHasViolation($violations, 'sujet', 'Cette valeur ne doit pas être vide.');
        $this->assertHasViolation($violations, 'name', 'Cette valeur ne doit pas être vide.');
        $this->assertHasViolation($violations, 'email', 'Cette valeur ne doit pas être vide.');
        $this->assertHasViolation($violations, 'phone', 'Cette valeur ne doit pas être vide.');
        $this->assertHasViolation($violations, 'objet', 'Cette valeur ne doit pas être vide.');
    }

    private function assertHasViolation(iterable $violations, string $propertyPath, string $message): void
    {
        foreach ($violations as $violation) {
            /** @var ConstraintViolation $violation */
            if ($violation->getPropertyPath() === $propertyPath && $violation->getMessage() === $message) {
                $this->addToAssertionCount(1);

                return;
            }
        }

        $this->fail(sprintf('No violation found for property "%s" with message "%s".', $propertyPath, $message));
    }

    public static function dataValideProvider(): array
    {
        return [
            ['John Doe', 'john@example.com', '0123456780', 'Sujet 1 dssdsfdsfs', 'Objet 1 dsq dsq dsq dsq dsq dqs dsq dfdsfsfds dsqdsq dsq dsqfdsqfdsqfs'],
            ['Jane Smith', 'jane@example.com', '9876543210', 'Sujet 2 dsdsfdsf', 'Objet 2 dsqdsqdsq dqsdsqfdsqdqsd sqds qfdsfds'],
            ['Alice Johnson', 'alice@example.com', '5555555550', 'Sujet 3 dsds fdsfds', 'Objet 3 dsqdsq dqs dqsd sqdqs fdsfdsfds'],
            ['Robert Brown', 'robert@example.com', '1111111110', 'Sujet 4 dsds fdsfsd', 'Objet 4dsq dsq d sqdsqd sq dsq fdsfdsfsd'],
            ['Emma White', 'emma@example.com', '2222222220', 'Sujet 5 dsdsfds fds', 'Objet 5 dsq dsqd sq dsqd qsdsqd qsdsqfdsf fdsf'],
            ['Michael Wilson', 'michael@example.com', '3333333330', 'Sujet 6 dsdsfds', 'Objet 6d sqdsq dsqdsqd sdq sdq fdsfsdf'],
            ['Sophia Lee', 'sophia@example.com', '4444444440', 'Sujet 7 dsds fds', 'Objet 7 dsqd qsdqs ds qdsqd fdsfsd'],
        ];
    }

    protected function setUp(): void
    {
        self::bootKernel();
        $container = static::getContainer();
        $this->validator = $container->get(ValidatorInterface::class);
    }
}
