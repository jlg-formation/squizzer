# AGENTS.md

Ce fichier définit les règles de travail pour les agents intervenant dans ce
dépôt.

## Objet du projet

- Construire une application web légère de QCM en ligne pour formateurs et
  stagiaires.
- Le comportement produit doit rester aligné avec les spécifications du dossier
  `specifications/`.
- Lire au minimum `specifications/03-spec-fonctionnelles.md` avant toute
  modification qui touche le parcours utilisateur, les écrans, la persistance,
  le chargement des QCM ou les résultats.

## Stack et commandes

- Utiliser Bun pour toutes les opérations de projet.
- Ne pas utiliser `npm`, `npx` ni `node` directement.
- Pour installer une dépendance, utiliser `bun add` ou `bun add -d`.
- Commandes usuelles :
  - `bun run dev`
  - `bun run build`
  - `bun run format`
  - `bun run lint`
- Avant un commit, exécuter `bun run format` puis `bun run lint`.
- Avant de terminer un travail significatif, exécuter au minimum
  `bun run format` puis `bun run lint`.
- Si une modification touche le routage, les types, les stores ou le chargement
  des données, exécuter aussi `bun run build` si l’environnement le permet.

## Architecture du dépôt

- `src/` contient l’application React + TypeScript.
- `src/pages/` contient les pages.
- `src/components/` contient les composants réutilisables.
- `src/layout/` contient la structure commune des écrans.
- `src/store/` contient les stores Zustand.
- `src/types/` contient les types partagés.
- `src/utils/` contient la logique utilitaire et les tests unitaires associés.
- `public/` contient les fichiers QCM YAML/JSON servis statiquement.

## Règles de code

- Utiliser TypeScript pour tous les fichiers `.ts` et `.tsx`.
- Respecter la structure de dossiers existante ; ne pas déplacer des fichiers
  sans raison claire.
- Utiliser des composants React sous forme de fonctions fléchées.
- Préférer les hooks React pour la logique d’interface.
- Conserver des noms de variables, fonctions et types explicites en anglais.
- Respecter les règles définies dans `eslint.config.js`.
- Respecter le style défini dans `src/App.css` et `src/index.css` pour toute
  évolution visuelle cohérente avec l’existant.
- Garder le code modulaire, réutilisable et ciblé sur le besoin.
- Ne pas introduire de secrets, de clés API ni de dépendance à des variables
  globales évitables.
- Ajouter des commentaires seulement pour expliquer une logique non évidente ;
  documenter les fonctions complexes avec un commentaire JSDoc si nécessaire.

## Invariants fonctionnels à préserver

- Le formateur peut charger un QCM depuis une URL libre ou depuis un catalogue
  prédéfini.
- Les formats supportés sont JSON et YAML.
- En cas de fichier invalide, afficher une erreur exploitable et détaillée.
- Avant de lancer un QCM, la configuration doit permettre de définir le nombre
  de questions, le chapitre et la seed.
- Le passage des questions est linéaire, sans retour arrière.
- Les bonnes réponses et explications ne sont affichées qu’à la fin du lot.
- Les résultats sont affichés, mais il n’y a ni export ni sauvegarde automatique
  des sessions.
- Si le stagiaire quitte la session, la progression n’est pas reprise ; le QCM
  recommence depuis zéro.
- L’interface doit rester responsive, légère et compatible avec les navigateurs
  modernes.

## Données QCM

- Les QCM statiques du catalogue vivent dans `public/`.
- Si un nouveau fichier YAML/JSON doit apparaître dans le catalogue formateur,
  mettre aussi à jour la liste `PREDEFINED_QCMS` dans
  `src/pages/LoadQcmPage.tsx`.
- Préserver la reproductibilité des tirages fondés sur la seed.

## Attentes de modification

- Chercher la cause racine plutôt qu’un contournement local quand cela reste
  simple.
- Préférer des changements minimaux et cohérents avec le style existant.
- Ajouter ou mettre à jour des tests unitaires pour la logique métier
  importante, surtout dans `src/utils/`, `src/store/` et les modules de
  transformation de données.
- Utiliser Jest ou Vitest pour les tests unitaires selon l’outillage déjà en
  place.
- Ne pas corriger des problèmes non liés à la demande sans le signaler
  explicitement.
- Mettre à jour `README.md` en cas de changement majeur de comportement, de
  setup ou d’usage.

## UX et contenu

- Préserver un thème clair par défaut, sauf demande explicite contraire.
- Éviter les interfaces surchargées ; privilégier une navigation simple et
  fluide.
- Ne pas introduire de fonctionnalités contraires aux spécifications sans
  instruction explicite.

## Si un commit est demandé

- Utiliser le format Conventional Commits.
