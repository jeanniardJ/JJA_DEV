<?php

namespace App\Form;

use App\Model\ConfigTemplateService;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ConfigTemplateServiceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'admin.template.service.title',
                'attr' => [
                    'rows' => 1,
                ],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'admin.template.service.description',
                'attr' => [
                    'rows' => 5,
                ],
            ])
            ->add('price', IntegerType::class, [
                'label' => 'admin.template.service.price',
                'attr' => [
                    'min' => 0,
                    'max' => 999999,
                ],
            ])
            ->add('icon', TextType::class, [
                'label' => 'admin.template.service.icon',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ConfigTemplateService::class,
            'translation_domain' => 'template',
        ]);
    }
}
