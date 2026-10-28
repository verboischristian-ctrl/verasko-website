# Brief : contenu de la première version du site

Version du 28/10/2026. Pour FallInTech, dans le cadre de l'option site web (forfait de 400 € HT, livraison vers le 20/11/2026, après la phase 1).

Ce document dit **quoi** mettre sur le site. La mise en page et le style restent libres, dans l'esprit du site actuel. Chaque changement se fait en anglais (`site/`) et en français (`site/fr/`). Les textes ci-dessous sont donnés dans les deux langues : les reprendre tels quels, ou dire avant de les changer.

La description complète du produit est dans le dépôt verasko-engine : `docs/01-description-fonctionnelle.md`, version 0.2, surtout la section 5.8.

---

## 1. Ce qui change dans le produit

- **Plus de page de FAQ hébergée par Verasko.** L'entreprise cliente garde son site et sa marque. Verasko affiche à la place un **bloc d'aide** sur ses propres pages : recherche, questions fréquentes et thèmes.
- **Installation :** une seule ligne de code dans le pied de page du site du client, une fois. Elle sert au formulaire de contact et au bloc d'aide, sur toutes les pages.
- **Prix de lancement** publiés sur le site, avec un **programme pilote** et un **contrôle gratuit du site**.

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
| Texte | We are opening Verasko to 10 companies first. Tell us about your website, or ask for a free website check. | Nous ouvrons d'abord Verasko à 10 entreprises. Parlez-nous de votre site, ou demandez un contrôle gratuit de votre site. |

**Nouveau champ obligatoire, en premier dans le formulaire :** un choix à deux options (boutons radio), nom du champ `request`.

| Valeur | Anglais | Français |
|---|---|---|
| `pilot` | Join the pilot program | Rejoindre le programme pilote |
| `website-check` | Get a free website check | Recevoir un contrôle gratuit de mon site |

Libellé de la question : « What would you like? » / « Que souhaitez-vous ? ». Aucune option cochée par défaut.

**Site web de l'entreprise :** le champ devient obligatoire (on en a besoin dans les deux cas). Retirer « (optional) » / « (facultatif) ».

**À ne pas changer :** les noms des formulaires `early-access` et `early-access-fr`. Les notifications par e-mail vers hello@verasko.com en dépendent.

### 2.6 Notice de confidentialité (`site/privacy/` et `site/fr/confidentialite/`)

Le texte dit aujourd'hui que le formulaire sert à demander un accès anticipé. Le mettre à jour :

- Le formulaire sert à rejoindre le programme pilote ou à demander un contrôle gratuit du site.
- Ajouter : « If you ask for a free website check, we read the public pages of your website and the documents you send us, only to prepare your report. » / « Si vous demandez un contrôle gratuit de votre site, nous lisons les pages publiques de votre site et les documents que vous nous envoyez, uniquement pour préparer votre rapport. »

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

## 4. Nouvelle section : les prix

À placer après « What you need » et avant le formulaire. Ancre `id="pricing"` en anglais, `id="tarifs"` en français.

**Anglais**

- Titre : Launch prices
- Introduction : One monthly price, based on volume. Every plan includes every feature.

| | Essential | Pro | Custom |
|---|---|---|---|
| Price | €59 / month | €149 / month | On quote |
| Volume | Up to 300 questions a month | Up to 1,500 questions a month | More than 1,500 questions a month |

- Included in every plan :
  - answers with their source, in your contact form;
  - a suggested reply in the notification email you already receive;
  - a weekly report with missing answers and contradictions;
  - a help block on your own website;
  - English and French.
- Notes, en petit sous le tableau :
  - A question is a message typed in your contact form or a search in your help block. It is roughly the number of messages your form receives today.
  - Above your monthly volume, Verasko stops answering and your form works as before. No surprise bill.
  - Pay yearly and get 2 months free.
  - Prices per month, excluding VAT. For businesses only.

**Encadré « Pilot program »** : The first 10 companies use Verasko for free until launch. After launch, they get 50% off for 12 months. In return, we ask for your feedback and the right to name you as a client.
Bouton : Join the pilot program (lien `#access`).

**Encadré « Free website check »** : Send us your website address. We will ask for your official documents, such as your terms of sale and price list, compare them with your website, and send you the pages that say something different. No commitment.
Bouton : Get a free website check (lien `#access`).

**Français**

- Titre : Prix de lancement
- Introduction : Un prix mensuel selon le volume. Chaque formule comprend toutes les fonctions.

| | Essentiel | Pro | Sur mesure |
|---|---|---|---|
| Prix | 59 € / mois | 149 € / mois | Sur devis |
| Volume | Jusqu'à 300 questions par mois | Jusqu'à 1 500 questions par mois | Plus de 1 500 questions par mois |

- Inclus dans chaque formule :
  - des réponses avec leur source, dans votre formulaire de contact ;
  - une réponse suggérée dans l'e-mail de notification que vous recevez déjà ;
  - un rapport hebdomadaire avec les réponses manquantes et les contradictions ;
  - un bloc d'aide sur votre propre site ;
  - anglais et français.
- Notes, en petit sous le tableau :
  - Une question, c'est un message écrit dans votre formulaire de contact ou une recherche dans votre bloc d'aide. C'est à peu près le nombre de messages que votre formulaire reçoit aujourd'hui.
  - Au-delà de votre volume mensuel, Verasko arrête de répondre et votre formulaire fonctionne comme avant. Pas de facture surprise.
  - En paiement annuel, 2 mois offerts.
  - Prix par mois, hors TVA. Réservé aux entreprises.

**Encadré « Programme pilote »** : Les 10 premières entreprises utilisent Verasko gratuitement jusqu'au lancement. Après le lancement, elles ont 50 % de réduction pendant 12 mois. En échange, nous vous demandons vos retours et le droit de vous citer comme client.
Bouton : Rejoindre le programme pilote (lien `#access`).

**Encadré « Contrôle gratuit de votre site »** : Envoyez-nous l'adresse de votre site. Nous vous demanderons vos documents officiels, comme vos conditions de vente et votre liste de prix, nous les comparerons avec votre site, et nous vous enverrons les pages qui disent autre chose. Sans engagement.
Bouton : Recevoir un contrôle gratuit (lien `#access`).

Idéal : quand on clique sur un de ces deux boutons, l'option correspondante est déjà choisie dans le formulaire (par exemple avec un lien `?request=pilot#access` et un petit script dans `site/assets/`). Si c'est compliqué, un simple lien vers `#access` suffit.

---

## 5. À ne pas mettre sur le site

- Aucun autre prix, aucune autre remise que ceux de ce document.
- Aucun chiffre de résultat (par exemple « 30 % de messages en moins ») : nous n'avons pas encore de mesures.
- Aucune date de lancement.
- Aucun nom de client ni de concurrent.
- Aucun lien vers un service externe (polices, scripts, statistiques). Les règles du `README.md` restent valables.

---

## 6. Contrôle avant fusion

1. Les deux langues ont le même contenu, et les liens de langue mènent à la bonne section.
2. Les liens « Pricing » / « Tarifs » de l'en-tête et du pied de page mènent à la section des prix.
3. Les prix et les conditions sont exactement ceux de la section 4.
4. Un envoi de test du formulaire, dans chaque langue, arrive dans hello@verasko.com avec le champ `request`. Utiliser une adresse comme test@example.com.
5. Le site s'affiche bien sur téléphone (largeur 375 px), sans défilement horizontal.
6. Le travail passe par une branche et une pull request, avec la version de test Netlify, comme indiqué dans le `README.md`.
