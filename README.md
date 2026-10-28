# Verasko – site web

Dépôt public de C.Verbois Consulting Comm. V. Tout ce qui est ici est visible par tous : ne jamais y mettre de clé, de mot de passe, de prix non décidé ni de donnée de client.

Le site publié sur https://verasko.com vient de ce dépôt. Netlify publie automatiquement le dossier `site/` à chaque changement sur la branche `main`.

## Comment publier un changement

1. Créer une branche à partir de `main`.
2. Faire les changements dans le dossier `site/`.
3. Ouvrir une pull request vers `main`. Netlify crée une version de test (preview) et met le lien dans la pull request.
4. Vérifier la version de test.
5. Fusionner la pull request dans `main`. Le site est en ligne quelques secondes plus tard.

Ne pas pousser directement sur `main` pour de petites corrections : chaque mise en ligne coûte des crédits Netlify (environ 20 mises en ligne par mois avec le plan gratuit). Les versions de test sont gratuites.

## Travail en cours

- [Brief de la première version du site](docs/brief-premiere-version.md) : bloc d'aide, prix de lancement, programme pilote et contrôle gratuit du site.

## Règles

- Aucune donnée réelle de client, aucun nom de client.
- Prix : uniquement ceux du brief, décidés par C.Verbois Consulting. Aucun autre prix, aucune autre remise, aucun chiffre de résultat.
- Pas de lien vers des services externes (polices, scripts, statistiques) : tout est servi depuis le site lui-même. Les règles de sécurité sont dans `netlify.toml`.
- Le site existe en anglais (`site/`) et en français (`site/fr/`). Un changement dans une langue doit être fait aussi dans l'autre.
