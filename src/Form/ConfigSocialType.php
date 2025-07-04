<?php

namespace App\Form;

use App\Model\ConfigSocial;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ConfigSocialType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('FacebookUrl', UrlType::class, [
                'label' => 'Facebook',
                'required' => false,
                'attr' => [
                    'placeholder' => 'https://www.facebook.com/...',
                ],
            ])
            ->add('TwitterUrl', UrlType::class, [
                'label' => 'Twitter',
                'required' => false,
                'attr' => [
                    'placeholder' => 'https://twitter.com/...',
                ],
            ])
            ->add('InstagramUrl', UrlType::class, [
                'label' => 'Instagram',
                'required' => false,
                'attr' => [
                    'placeholder' => 'https://www.instagram.com/...',
                ],
            ])
            ->add('LinkedinUrl', UrlType::class, [
                'label' => 'Linkedin',
                'required' => false,
                'attr' => [
                    'placeholder' => 'https://www.linkedin.com/...',
                ],
            ])
            ->add('YoutubeUrl', UrlType::class, [
                'label' => 'Youtube',
                'required' => false,
                'attr' => [
                    'placeholder' => 'https://www.youtube.com/...',
                ],
            ])
            ->add('WhatsappPhone', UrlType::class, [
                'label' => 'Whatsapp',
                'required' => false,
                'attr' => [
                    'placeholder' => 'https://www.whatsapp.com/...',
                ],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'config.submit',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
            'data_class' => ConfigSocial::class,
            'translation_domain' => 'admin',
        ]);
    }
}
