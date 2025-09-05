# Instructions pour GitHub Copilot

## Objectif du projet

Les specifications sont dans le répertoire `specifications/`. Lire les
specifications avant de générer du code.

## Avant de commiter

Lancer les commandes suivantes pour vérifier la qualité du code :

```bash
npm run format
npm run lint
```

## Conventions de code

- Utiliser TypeScript pour tous les fichiers `.tsx` et `.ts`.
- Respecter la structure des dossiers existante.
- Suivre les conventions ESLint définies dans `eslint.config.js`.
- Utiliser des fonctions fléchées pour les composants React.
- Préférer l’utilisation de hooks React (`useState`, `useEffect`, etc.).

## Style

- Respecter le style CSS défini dans `App.css` et `index.css`.
- Utiliser des noms de variables et fonctions explicites en anglais.
- Documenter les fonctions complexes avec des commentaires JSDoc.

## Bonnes pratiques

- Ne pas inclure de données sensibles ou de clés API dans le code.
- Préférer l’importation de modules plutôt que l’utilisation de variables
  globales.
- Écrire du code modulaire et réutilisable.

## Tests

- Prévoir des fichiers de test pour chaque composant ou module important.
- Utiliser Jest ou Vitest pour les tests unitaires.

## Documentation

- Ajouter des commentaires pour expliquer les parties complexes du code.
- Mettre à jour le fichier `README.md` en cas de modification majeure.

---

Copilot doit suivre ces instructions pour générer du code cohérent et conforme
aux standards du projet.
