<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ConfigTemplateType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('presentation', ConfigTemplatePresentationType::class, [
                'label' => 'admin.template.presentation.fields',
                'row_attr' => [
                    'class' => 'card card-primary border-1 mb-3',
                ],
                'attr' => [
                    'class' => 'card-body',
                ],
            ])
            ->add('description', ConfigTemplateDescriptionType::class, [
                'label' => 'admin.template.descrOfSite.fields',
                'row_attr' => [
                    'class' => 'card card-primary border-1 mb-3',
                ],
                'attr' => [
                    'class' => 'card-body',
                ],
            ])
            ->add('services', CollectionType::class, [
                'entry_type' => ConfigTemplateServiceType::class, // Assurez-vous que ce type de formulaire correspond à vos besoins
                'allow_add' => true,
                'allow_delete' => false,
                'entry_options' => [
                    'label' => 'admin.template.service.fields',
                    'row_attr' => [
                        'class' => 'card card-primary border-1 mb-3',
                    ],
                    'attr' => [
                        'class' => 'card-body',
                    ],
                ],
                'by_reference' => false,
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'admin.template.save',
                'attr' => [
                    'class' => 'btn-primary w-100',
                ],
                'row_attr' => [
                    'class' => 'col-md-2 col-12',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'translation_domain' => 'template',
        ]);
    }
}
