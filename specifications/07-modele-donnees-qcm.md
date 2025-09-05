# Modèle de données QCM (JSON / YAML)

## Définition du format

### Racine du fichier
- **`title`** *(string, optionnel)* : Titre global du QCM
- **`chapters`** *(array, obligatoire)* : Liste des chapitres contenant les questions

### Chapitre
Chaque élément de `chapters` contient :
- **`id`** *(string, obligatoire)* : Identifiant unique du chapitre
- **`title`** *(string, obligatoire)* : Nom du chapitre
- **`questions`** *(array, obligatoire)* : Liste des questions

### Question
Chaque élément de `questions` contient :
- **`id`** *(string, obligatoire)* : Identifiant unique de la question
- **`question`** *(string, obligatoire)* : Énoncé de la question
- **`answers`** *(array of strings, obligatoire)* : Liste des propositions de réponses
- **`correct`** *(integer, obligatoire)* : Index (0-based) de la bonne réponse dans `answers`
- **`explanation`** *(string, obligatoire)* : Texte d’explication affiché à la fin

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
          "answers": [
            "object",
            "null",
            "undefined",
            "number"
          ],
          "correct": 0,
          "explanation": "En JavaScript, `typeof null` renvoie 'object'."
        },
        {
          "id": "q2",
          "question": "Quelle méthode transforme une chaîne en majuscules ?",
          "answers": [
            "toUpper()",
            "toUpperCase()",
            "upper()",
            "capitalize()"
          ],
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
