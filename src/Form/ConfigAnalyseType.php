<?php

namespace App\Form;

use App\Model\ConfigAnalyse;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ConfigAnalyseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('analyseGoogle', TextType::class, [
                'label' => 'config.analyse.googleId',
                'attr' => [
                    'placeholder' => 'config.analyse.placeholder.googleId',
                ],
                'required' => false,
            ])
            ->add('analyseFacebook', TextType::class, [
                'label' => 'config.analyse.facebookPixel',
                'attr' => [
                    'placeholder' => 'config.analyse.placeholder.facebookPixel',
                ],
                'required' => false,
            ])
            ->add('analyseInstagram', TextType::class, [
                'label' => 'config.analyse.instagramId',
                'attr' => [
                    'placeholder' => 'config.analyse.placeholder.instagramId',
                ],
                'required' => false,
            ])
            ->add('analyseLinkedin', TextType::class, [
                'label' => 'config.analyse.linkedinId',
                'attr' => [
                    'placeholder' => 'config.analyse.placeholder.linkedinId',
                ],
                'required' => false,
            ])
            ->add('analyseYoutube', TextType::class, [
                'label' => 'config.analyse.youtubeId',
                'attr' => [
                    'placeholder' => 'config.analyse.placeholder.youtubeId',
                ],
                'required' => false,
            ])
            ->add('analyseWhatsapp', TextType::class, [
                'label' => 'config.analyse.whatsappId',
                'attr' => [
                    'placeholder' => 'config.analyse.placeholder.whatsapp',
                ],
                'required' => false,
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'config.submit',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
            'data_class' => ConfigAnalyse::class,
            'translation_domain' => 'admin',
        ]);
    }
}
