<?php

/**
 * Copyright (c) 2023. Tous droits réservés.
 * Aucun élément de ce site ne peut être reproduit sans permission écrite préalable.
 * Ce site, son contenu et tous les produits créés par JJA DEV sont protégés par les droits d'auteur.
 * Tous les droits sont réservés à JJA DEV.
 *
 * L'utilisation non autorisée de tout élément de ce site peut constituer une violation des lois applicables.
 * Cela peut entraîner des poursuites judiciaires.
 *
 * Pour utiliser du contenu de ce site, contactez JJA DEV.
 *
 * Merci de respecter notre travail créatif et nos droits de propriété intellectuelle.
 *
 * @category Security
 * @package  App\Security
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @link     https://jja-dev.fr
 */

namespace App\Security;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Authenticator\AbstractLoginFormAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\CsrfTokenBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\RememberMeBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\SecurityRequestAttributes;
use Symfony\Component\Security\Http\Util\TargetPathTrait;

/**
 * Classe LoginFormAuthenticator
 *
 * @catégorie Security
 * @paquet  App\Security
 * @auteur   JJA-DEV
 * @licence  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour consulter une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @lien     https://jja-dev.fr
 */
class LoginFormAuthenticator extends AbstractLoginFormAuthenticator
{
    use TargetPathTrait;

    public const LOGIN_ROUTE = 'app_login';

    private EntityManagerInterface $entityManager;

    public function __construct(private UrlGeneratorInterface $urlGenerator, EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function authenticate(Request $request): Passport
    {
        $email = $request->request->get('email', '');

        $request->getSession()->set(SecurityRequestAttributes::LAST_USERNAME, $email);

        return new Passport(
            new UserBadge($email),
            new PasswordCredentials($request->request->get('password', '')),
            [
                new CsrfTokenBadge('authenticate', $request->request->get('_csrf_token')),
                new RememberMeBadge(),
            ]
        );
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }

        // For example:
        return new RedirectResponse($this->urlGenerator->generate('app_home'));
    }

    protected function getLoginUrl(Request $request): string
    {
        return $this->urlGenerator->generate(self::LOGIN_ROUTE);
    }
}
