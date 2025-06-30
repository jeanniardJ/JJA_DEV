<?php

namespace App\Form;

use App\Entity\Note;
use App\Entity\Prospect;
use App\Entity\Status;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProspectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstname', TextType::class, [

            ])
            ->add('lastname', TextType::class, [
                'required' => false
            ])
            ->add('phone', TelType::class, [
                'required' => false
            ])
            ->add('email', EmailType::class, [

            ])
            ->add('position', TextType::class, [
                'required' => false
            ])
            ->add('location', TextType::class, [
                'required' => false
            ])
            ->add('website', TextType::class, [
                'required' => false
            ])
            ->add('note', NoteType::class, [
                'required' => false,
                'label' => false
            ])
            ->add('status', EntityType::class, [
                'class' => Status::class,
                'choice_label' => 'name'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Prospect::class,
        ]);
    }
}
