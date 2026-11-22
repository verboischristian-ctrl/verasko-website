# Brief : contenu de la première version du site

Version du 14/11/2026 (remplace celle du 08/11/2026). Pour FallInTech, dans le cadre de l'option site web.

Ce document dit **quoi** mettre sur le site. La mise en page et le style restent libres, dans l'esprit du site actuel. Chaque changement se fait en anglais (`site/`) et en français (`site/fr/`). Les textes ci-dessous sont donnés dans les deux langues : les reprendre tels quels, ou dire avant de les changer.

La description complète du produit est dans le dépôt verasko-engine : `docs/01-description-fonctionnelle.md`, version 0.2, surtout la section 5.8.

**Ce qui change par rapport au 08/11 :**

1. **Nouveau modèle de prix.** Le client paie seulement les messages que Verasko lui évite. Plus d'abonnement, plus de formules Essential, Pro et Custom. Le prix par message n'est pas encore fixé : il sera décidé après les pilotes. La section des prix explique donc le principe, sans aucun montant (section 4).
2. **Aucun montant nulle part sur le site**, y compris dans la balise meta description et dans les conditions d'utilisation (sections 2.7 et 5).
3. **Programme pilote** : inchangé, sauf la réduction après le lancement, qui porte maintenant sur le prix par message.

Le reste du brief ne change pas.

---

## 1. Ce qui change dans le produit

- **Plus de page de FAQ hébergée par Verasko.** L'entreprise cliente garde son site et sa marque. Verasko affiche à la place un **bloc d'aide** sur ses propres pages : recherche, questions fréquentes et thèmes.
- **Installation :** une seule ligne de code dans le pied de page du site du client, une fois. Elle sert au formulaire de contact et au bloc d'aide, sur toutes les pages.
- **Modèle de prix** expliqué sur le site, sans montant, avec un **programme pilote**.

---

## 2. Changements dans les sections existantes

### 2.1 En-tête et pied de page

Ajouter un lien vers la nouvelle section des prix (section 4), dans l'en-tête et dans le pied de page.

| | Anglais | Français |
|---|---|---|
| Texte du lien | Pricing | Tarifs |
| Ancre | `#pricing` | `#tarifs` |

### 2.2 Bouton principal (haut de page)

| | Anglais | Français |
|---|---|---|
| Aujourd'hui | Ask for early access | Demander un accès anticipé |
| Nouveau | Join the pilot program | Rejoindre le programme pilote |

Le lien reste `#access`.

### 2.3 « Every week, a short report » / « Chaque semaine, un court rapport »

Remplacer la dernière ligne de la liste :

| | Anglais | Français |
|---|---|---|
| Aujourd'hui | new FAQ entries, built from answers that worked. | de nouvelles entrées de FAQ, construites à partir des réponses qui ont fonctionné. |
| Nouveau | new answers added to the help block on your website. | les nouvelles réponses ajoutées au bloc d'aide de votre site. |

### 2.4 « What you need » / « Ce dont vous avez besoin »

Troisième point, « One line of code » / « Une ligne de code » : remplacer le texte.

| | Anglais | Français |
|---|---|---|
| Aujourd'hui | Added to your contact page. That is the whole installation. | Ajoutée à votre page de contact. C'est toute l'installation. |
| Nouveau | Added once to the footer of your website. That is the whole installation. | Ajoutée une fois dans le pied de page de votre site. C'est toute l'installation. |

### 2.5 Formulaire (section `#access`)

**Titre et texte :**

| | Anglais | Français |
|---|---|---|
| Titre | Join the pilot program | Rejoindre le programme pilote |
| Texte | We are opening Verasko to 10 companies first. Tell us about your website. | Nous ouvrons d'abord Verasko à 10 entreprises. Parlez-nous de votre site. |

**Site web de l'entreprise :** le champ devient obligatoire. Retirer « (optional) » / « (facultatif) ».

**Nouveaux champs**, après le site web et avant le message. Un seul choix par question (boutons radio ou liste), aucune option choisie par défaut.

| Nom du champ | Obligatoire | Question (EN / FR) | Valeurs et libellés (EN / FR) |
|---|---|---|---|
| `volume` | oui | Contact messages per month / Messages de contact par mois | `under-100` Less than 100 / Moins de 100 ; `100-500` 100 to 500 / 100 à 500 ; `500-1500` 500 to 1,500 / 500 à 1 500 ; `over-1500` More than 1,500 / Plus de 1 500 |
| `platform` | oui | Your website is built with / Votre site est fait avec | `wordpress` WordPress ; `shopify` Shopify ; `wix` Wix ; `squarespace` Squarespace ; `other` Other / Autre |
| `inbox` | non | Where do your form messages arrive today? / Où arrivent aujourd'hui les messages de votre formulaire ? | `mailbox` A shared mailbox / Une boîte e-mail partagée ; `helpdesk` A helpdesk tool / Un outil de helpdesk ; `other` Other / Autre |
| `documents` | non | Do you have official documents, such as terms of sale, a price list or policies? / Avez-vous des documents officiels, comme des conditions de vente, une liste de prix ou des politiques ? | `yes` Yes / Oui ; `no` No / Non |
| `languages` | non | Languages of your website / Langues de votre site | `en` English / Anglais ; `fr` French / Français ; `both` Both / Les deux |

**Message :** il devient facultatif. Nouveau libellé : « Anything else you want to tell us (optional) » / « Autre chose à nous dire (facultatif) ».

**À ne pas changer :** les noms des formulaires `early-access` et `early-access-fr`. Les notifications par e-mail vers hello@verasko.com en dépendent.

### 2.6 Notice de confidentialité (`site/privacy/` et `site/fr/confidentialite/`)

Le texte dit aujourd'hui que le formulaire sert à demander un accès anticipé. Le mettre à jour : le formulaire sert à rejoindre le programme pilote. Les réponses aux questions du formulaire servent seulement à préparer le pilote.

### 2.7 Conditions d'utilisation (`site/terms/` et `site/fr/conditions/`)

Si une phrase parle des prix, utiliser celle-ci :

| Anglais | Français |
|---|---|
| No price is published on this website yet. The prices and conditions that apply to your company are those of the signed agreement. | Aucun prix n'est encore publié sur ce site. Les prix et conditions applicables à votre entreprise sont ceux de l'accord signé. |

---

## 3. Nouvelle section : le bloc d'aide

À placer après « Every week, a short report » et avant « What you need ». Une petite illustration statique dans le style de la démo du haut de page serait bienvenue : un champ de recherche et trois questions fréquentes de la boutique fictive Maison Orée.

**Anglais**

- Titre : Answers on your own pages too
- Introduction : The same line of code can show a help block anywhere on your website: a search box, your most frequent questions, and topics. It uses answers that have already proved themselves in your contact form.
- Points :
  - **In your look.** It uses your fonts and colors. Nothing is hosted elsewhere, and your visitors stay on your website.
  - **Where you want it.** Paste one tag in any page, or turn on a small Help button. No code to write.
  - **Same rules as the form.** Only answers backed by your official documents. When there is no clear answer, the visitor is sent to your contact form.
- Note : Developers and web agencies can also use the same features through an API.

**Français**

- Titre : Des réponses aussi sur vos propres pages
- Introduction : La même ligne de code peut afficher un bloc d'aide n'importe où sur votre site : une recherche, vos questions les plus fréquentes et des thèmes. Il utilise des réponses qui ont déjà fait leurs preuves dans votre formulaire de contact.
- Points :
  - **À vos couleurs.** Il reprend vos polices et vos couleurs. Rien n'est hébergé ailleurs, et vos visiteurs restent sur votre site.
  - **Là où vous le voulez.** Collez une balise dans n'importe quelle page, ou activez un petit bouton « Aide ». Aucun code à écrire.
  - **Les mêmes règles que le formulaire.** Uniquement des réponses appuyées par vos documents officiels. Sans réponse claire, le visiteur est dirigé vers votre formulaire de contact.
- Note : Les développeurs et les agences web peuvent aussi utiliser les mêmes fonctions par une API.

---

## 4. Nouvelle section : le prix

À placer après « What you need » et avant le formulaire. Ancre `id="pricing"` en anglais, `id="tarifs"` en français. Les liens « Pricing » / « Tarifs » de l'en-tête et du pied de page restent.

Le prix par message évité n'est pas encore fixé : il sera décidé après les pilotes. La section explique le principe, **sans aucun montant**. Les trois cartes de prix disparaissent ; la mise en page reste libre.

**Anglais**

- Titre : You only pay for the messages Verasko saves you
- Introduction : No subscription and no plan to choose. You pay only when Verasko answers a visitor's question and the visitor no longer needs to send your contact form.
- Points :
  - **What counts as a message saved.** Verasko showed a clear answer with its source, and the visitor did not send your form.
  - **You can check every one.** Your weekly report lists each message saved, with the question and the answer.
  - **You set a monthly limit.** Above it, Verasko stops answering and your form works as before. No surprise bill.
- Included at no extra cost :
  - a suggested reply in the notification email you already receive;
  - a weekly report with missing answers and contradictions;
  - a help block on your own website;
  - English and French.
- Note, en petit : The price per message saved will be published at launch, excluding VAT. Verasko is for businesses only.

**Encadré « Pilot program »** : The first 10 companies use Verasko for free until launch. After launch, they get 50% off the price per message for 12 months. In return, we ask for your feedback and the right to name you as a client.
Bouton : Join the pilot program (lien `#access`).

**Français**

- Titre : Vous ne payez que les messages que Verasko vous évite
- Introduction : Pas d'abonnement, pas de formule à choisir. Vous payez seulement quand Verasko répond à la question d'un visiteur et que celui-ci n'a plus besoin d'envoyer votre formulaire de contact.
- Points :
  - **Ce qui compte comme un message évité.** Verasko a montré une réponse claire, avec sa source, et le visiteur n'a pas envoyé votre formulaire.
  - **Vous pouvez tout vérifier.** Votre rapport hebdomadaire liste chaque message évité, avec la question et la réponse.
  - **Vous fixez une limite mensuelle.** Au-delà, Verasko arrête de répondre et votre formulaire fonctionne comme avant. Pas de facture surprise.
- Compris sans frais :
  - une réponse suggérée dans l'e-mail de notification que vous recevez déjà ;
  - un rapport hebdomadaire avec les réponses manquantes et les contradictions ;
  - un bloc d'aide sur votre propre site ;
  - l'anglais et le français.
- Note, en petit : Le prix par message évité sera publié au lancement, hors TVA. Verasko est réservé aux entreprises.

**Encadré « Programme pilote »** : Les 10 premières entreprises utilisent Verasko gratuitement jusqu'au lancement. Après le lancement, elles ont 50 % de réduction sur le prix par message pendant 12 mois. En échange, nous vous demandons vos retours et le droit de vous citer comme client.
Bouton : Rejoindre le programme pilote (lien `#access`).

Le champ `volume` du formulaire (section 2.5) reste : il sert à préparer le pilote.

---

## 5. À ne pas mettre sur le site

- Aucun montant, nulle part : ni dans les pages, ni dans les balises meta (dont la fin de la meta description sur le prix mensuel), ni dans les données structurées, ni dans les conditions d'utilisation. Le prix par message sera ajouté au lancement.
- Aucune autre remise que celle du programme pilote.
- Pas de contrôle gratuit du site pour l'instant.
- Aucun chiffre de résultat (par exemple « 30 % de messages en moins ») : nous n'avons pas encore de mesures.
- Aucune date de lancement.
- Aucun nom de client ni de concurrent.
- Aucun lien vers un service externe (polices, scripts, statistiques). Les règles du `README.md` restent valables.

---

## 6. Contrôle avant fusion

1. Les deux langues ont le même contenu, et les liens de langue mènent à la bonne section.
2. Les liens « Pricing » / « Tarifs » de l'en-tête et du pied de page mènent à la section des prix.
3. Aucun montant n'apparaît sur le site (pages, balises meta, données structurées, conditions d'utilisation). Les textes de la section 4 sont repris tels quels.
4. Un envoi de test du formulaire, dans chaque langue, arrive dans hello@verasko.com avec les nouveaux champs. Utiliser une adresse comme test@example.com.
5. Le site s'affiche bien sur téléphone (largeur 375 px), sans défilement horizontal.
6. Le travail passe par une branche et une pull request, avec la version de test Netlify, comme indiqué dans le `README.md`.
