#!/bin/bash
#
# Copyright (c) 2023. Tous droits réservés.
# Aucun élément de ce site web ne peut être reproduit, affiché, modifié ou distribué sans la permission écrite préalable du titulaire du droit d'auteur.
# Ce site web, son contenu et tous les produits créés par JJA DEV sont protégés par les lois sur les droits d'auteur et la propriété intellectuelle. Tous les droits sont réservés à JJA DEV.
#
# L'utilisation non autorisée de tout élément de ce site, y compris, mais sans s'y limiter, le texte, les images, les dessins, les graphiques, les logos et les marques de commerce, peut constituer une violation des lois sur le droit d'auteur, des lois sur les marques de commerce ou d'autres lois applicables et peut entraîner des poursuites judiciaires.
#
# Pour obtenir la permission d'utiliser du contenu de ce site, veuillez contacter JJA DEV.
#
# Merci de votre compréhension et de votre respect envers notre travail créatif et nos droits de propriété intellectuelle.
#
if [[ -z $OVH_HOSTING_USER || -z $OVH_HOSTING_PASSWORD || -z $OVH_HOSTING_DOMAIN || -z $REPOSITORY_NAME || -z $REPOSITORY_URL ]]; then
  echo 'One or more needed env vars are undefined! Take a look at the example usage declaration.'
  exit 1
fi

sshpass -p "$OVH_HOSTING_PASSWORD" ssh -o StrictHostKeyChecking=no $OVH_HOSTING_USER@$OVH_HOSTING_DOMAIN "cd $REPOSITORY_NAME && git pull && composer run-script update-web && php bin/console cache:clear"
echo 'Test.'