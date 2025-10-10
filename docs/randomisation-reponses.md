# Randomisation des réponses QCM

## Problème résolu

Les fichiers QCM YAML peuvent avoir des réponses déséquilibrées, avec les bonnes
réponses souvent placées à l'index 0 (réponse A). Cela peut biaiser
l'apprentissage et permettre aux stagiaires de deviner les patterns.

## Solution implémentée

### Fonctionnalités ajoutées

1. **`shuffleQuestionAnswers(question, seed)`** : Mélange les réponses d'une
   seule question de manière déterministe
2. **`selectAndShuffleQuestions(questions, count, seed)`** : Sélectionne ET
   mélange les questions en une seule opération

### Fonctionnement

- **Déterministe** : Le même seed produit toujours le même ordre de réponses
- **Par question** : Chaque question utilise un seed unique basé sur
  `${seed}-${questionId}`
- **Préservation** : L'index de la bonne réponse est automatiquement mis à jour
- **Sécurisé** : Toutes les réponses originales sont conservées

### Exemple

```typescript
const question = {
  id: "q1",
  question: "Quelle est la capitale de la France ?",
  answers: ["Paris", "Londres", "Berlin", "Madrid"],
  correct: 0, // Paris
};

// Avec seed "abc123"
const shuffled = shuffleQuestionAnswers(question, "abc123");
// Résultat possible:
// {
//   answers: ["Madrid", "Paris", "Londres", "Berlin"],
//   correct: 1 // Paris est maintenant à l'index 1
// }
```

### Intégration

La fonctionnalité est automatiquement appliquée dans `StagiaireHomePage.tsx` :

- Les questions sont sélectionnées avec `selectQuestionsBySeed()`
- Les réponses sont mélangées avec `shuffleQuestionAnswers()`
- Le tout est combiné dans `selectAndShuffleQuestions()`

### Tests

Des tests unitaires vérifient :

- La cohérence du mélange avec le même seed
- La variation avec différents seeds
- La préservation de la bonne réponse
- La conservation de toutes les réponses originales

## Impact

✅ **Avantages :**

- Élimine les biais de position des bonnes réponses
- Améliore la qualité pédagogique des QCM
- Reste déterministe pour la reproductibilité
- Compatible avec l'architecture existante

⚠️ **Considérations :**

- Les formateurs doivent être informés du mélange automatique
- Les statistiques basées sur la position des réponses ne sont plus valides
