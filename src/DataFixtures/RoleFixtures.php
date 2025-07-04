<?php

namespace App\DataFixtures;

use App\Entity\Role;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class RoleFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $rolesData = [
            ['name' => 'Utilisateur', 'secondName' => 'ROLE_USER'],
            ['name' => 'Administrateur', 'secondName' => 'ROLE_ADMIN'],
            ['name' => 'Développeur', 'secondName' => 'ROLE_DEV'],
        ];

        foreach ($rolesData as $index => $roleData) {
            $role = new Role();
            $role->setName($roleData['name']);
            $role->setSecondName($roleData['secondName']);

            $manager->persist($role);

            $this->addReference('roleUser-'.$index, $role);
        }

        $manager->flush();
    }
}
