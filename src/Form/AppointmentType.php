<?php

namespace App\Form;

use App\Entity\Appointment;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AppointmentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('userEmail', EmailType::class)
            ->add('date', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('time', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('type')
            ->add('firstName')
            ->add('lastName')
            ->add('meetingMode')
            ->add('phone')
            ->add('company')
            ->add('notes')
            ->add('status')
            ->add('location')
            ->add('reminderSent')
            ->add('created_at', null, [
                'widget' => 'single_text',
            ])
            ->add('updated_at', null, [
                'widget' => 'single_text',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Appointment::class,
        ]);
    }
}
