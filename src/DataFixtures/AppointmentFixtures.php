<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Appointment;
use Faker\Factory;

class AppointmentFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        $startDate = new \DateTime('2024-01-01');
        $endDate = new \DateTime('2024-12-30');

        while ($startDate <= $endDate) {
            //var_dump($startDate);
            for ($i = 0; $i < 4; $i++) {
                $appointment = new Appointment();
                $appointment->setDate(new \DateTimeImmutable($startDate->format('Y-m-d')));
                $appointment->setTime(new \DateTimeImmutable($faker->dateTimeBetween('09:00', '17:30')->format('H:i:s')));
                $appointment->setType($faker->randomElement(['Rendez-vous', 'Consultation', 'Examen']));
                $appointment->setFirstName($faker->firstName());
                $appointment->setLastName($faker->lastName());
                $appointment->setUserEmail($faker->email());
                $appointment->setPhone($faker->phoneNumber());
                $appointment->setNotes($faker->sentence());
                $appointment->setLocation($faker->city());
                $appointment->setStatus($faker->randomElement(['En attente', 'Confirmé', 'Annulé']));
                $appointment->setCompany($faker->company());
                $appointment->setMeetingMode($faker->randomElement(['Présentiel', 'Téléphonique', 'Visioconférence']));
                $appointment->setReminderSent('false');
                $manager->persist($appointment);
            }

            $startDate->modify('+1 day');
        }

        $manager->flush();
    }
}
