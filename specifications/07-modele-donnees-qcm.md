# Modèle de données QCM (JSON / YAML)

## Définition du format

### Racine du fichier

- **`title`** _(string, optionnel)_ : Titre global du QCM
- **`chapters`** _(array, obligatoire)_ : Liste des chapitres contenant les
  questions

### Chapitre

Chaque élément de `chapters` contient :

- **`id`** _(string, obligatoire)_ : Identifiant unique du chapitre
- **`title`** _(string, obligatoire)_ : Nom du chapitre
- **`questions`** _(array, obligatoire)_ : Liste des questions

### Question

Chaque élément de `questions` contient :

- **`id`** _(string, obligatoire)_ : Identifiant unique de la question
- **`question`** _(string, obligatoire)_ : Énoncé de la question
- **`answers`** _(array of strings, obligatoire)_ : Liste des propositions de
  réponses
- **`correct`** _(integer, obligatoire)_ : Index (0-based) de la bonne réponse
  dans `answers`
- **`explanation`** _(string, obligatoire)_ : Texte d’explication affiché à la
  fin

---

## Exemple JSON

```json
{
  "title": "QCM sur JavaScript",
  "chapters": [
    {
      "id": "basics",
      "title": "Les bases de JavaScript",
      "questions": [
        {
          "id": "q1",
          "question": "Quelle est la sortie de `typeof null` en JavaScript ?",
          "answers": ["object", "null", "undefined", "number"],
          "correct": 0,
          "explanation": "En JavaScript, `typeof null` renvoie 'object'."
        },
        {
          "id": "q2",
          "question": "Quelle méthode transforme une chaîne en majuscules ?",
          "answers": ["toUpper()", "toUpperCase()", "upper()", "capitalize()"],
          "correct": 1,
          "explanation": "`toUpperCase()` est la bonne méthode."
        }
      ]
    }
  ]
}
```

---

## Exemple YAML

```yaml
title: QCM sur JavaScript
chapters:
  - id: basics
    title: Les bases de JavaScript
    questions:
      - id: q1
        question: "Quelle est la sortie de `typeof null` en JavaScript ?"
        answers:
          - object
          - null
          - undefined
          - number
        correct: 0
        explanation: "En JavaScript, `typeof null` renvoie 'object'."
      - id: q2
        question: "Quelle méthode transforme une chaîne en majuscules ?"
        answers:
          - toUpper()
          - toUpperCase()
          - upper()
          - capitalize()
        correct: 1
        explanation: "`toUpperCase()` est la bonne méthode."
```

---
