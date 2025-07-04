<?php

namespace App\Form;

use App\Model\ConfigGeneral;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class ConfigGeneralType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'config.general.siteName',
                'required' => true,
                'attr' => [
                    'placeholder' => 'config.general.siteName',
                ],
                'row_attr' => [
                    'class' => 'col-md-3',
                ],
                'constraints' => [
                    new NotBlank(),
                    new Length(['min' => 3, 'max' => 30]),
                ],
                'min_characters' => 3,
            ])
            ->add('title', TextType::class, [
                'label' => 'config.general.siteTitle',
                'required' => true,
                'attr' => [
                    'placeholder' => 'config.general.siteTitle',
                ],
                'row_attr' => [
                    'class' => 'col-md-6',
                ],
                'constraints' => [
                    new NotBlank(),
                    new Length(['min' => 10, 'max' => 255]),
                ],
                'min_characters' => 10,
            ])
            ->add('logo', FileType::class, [
                'label' => 'config.general.siteLogo',
                'required' => false,
                'attr' => [
                    'accept' => 'image/png, image/jpeg',
                ],
                'mapped' => false,
            ])
            ->add('favicon', FileType::class, [
                'label' => 'config.general.siteFavicon',
                'required' => false,
                'attr' => [
                    'accept' => 'image/png, image/jpeg',
                ],
                'mapped' => false,
            ])
            ->add('url', TextType::class, [
                'label' => 'config.general.siteUrl',
                'required' => true,
                'attr' => [
                    'placeholder' => 'config.general.siteUrl',
                ],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'config.general.siteDescription',
                'required' => true,
            ])
            ->add('keywords', TextType::class, [
                'label' => 'config.general.siteKeywords',
                'required' => true,
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'config.submit',
                'attr' => [
                    'class' => 'btn-primary',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'translation_domain' => 'admin',
            'data_class' => ConfigGeneral::class,
        ]);
    }
}
