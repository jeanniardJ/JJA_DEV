<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProspectMaileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('sendTo', EmailType::class, [
                'disabled' => true,
                'data' => $options['email_prospect'],
            ])
            ->add('subject', TextType::class)
            // ->add('generatePrompt', ButtonType::class, ['attr' => ['id' => 'generate-prompt-button']])
            ->add('content', TextareaType::class)
            ->add('submit', SubmitType::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'email_prospect' => 'joedoe@mail.fr',
            'translation_domain' => 'prospect',
        ]);
    }
}
