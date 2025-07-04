<?php

namespace App\Form;

use App\Model\ConfigPropriety;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ConfigProprietyType extends ConfigType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'config.propriety.name',
                'attr' => [
                    'placeholder' => 'config.propriety.placeholder.name',
                ],
            ])
            ->add('address', TextType::class, [
                'label' => 'config.propriety.address',
                'attr' => [
                    'placeholder' => 'config.propriety.placeholder.address',
                ],
            ])
            ->add('city', TextType::class, [
                'label' => 'config.propriety.city',
                'attr' => [
                    'placeholder' => 'config.propriety.placeholder.city',
                ],
            ])
            ->add('zipCode', IntegerType::class, [
                'label' => 'config.propriety.zipCode',
                'attr' => [
                    'placeholder' => 'config.propriety.placeholder.zipCode',
                ],
            ])
            ->add('country', TextType::class, [
                'label' => 'config.propriety.country',
                'attr' => [
                    'placeholder' => 'config.propriety.placeholder.country',
                ],
            ])
            ->add('phone', TelType::class, [
                'label' => 'config.propriety.phone',
                'attr' => [
                    'placeholder' => 'config.propriety.placeholder.phone',
                ],
                'row_attr' => [
                    'class' => 'col-md-6 mb-3',
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'config.propriety.email',
                'attr' => [
                    'placeholder' => 'config.propriety.placeholder.email',
                ],
                'row_attr' => [
                    'class' => 'col-md-6 mb-3',
                ],
            ])
            ->add('siret', NumberType::class, [
                'required' => false,
                'label' => 'config.propriety.siret',
                'attr' => [
                    'placeholder' => 'config.propriety.placeholder.siret',
                ],
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
            'data_class' => ConfigPropriety::class,
            'label' => false,
            'attr' => [
                'class' => 'row',
            ],
        ]);
    }
}
