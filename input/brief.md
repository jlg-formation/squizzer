# Conception et réalisation d'un QCM de formation

## 1. Objectif

Générer automatiquement un QCM (Questionnaire à Choix Multiples) complet sur un
sujet donné, à partir d'un fichier d'entrée Markdown, et produire en sortie un
fichier YAML conforme au schéma utilisé par l'application Squizzer.

## 2. Entrées et sorties

### 2.1 Entrée

L'entrée fournie dans le contexte de la demande peut être soit un fichier
Markdown local, soit une URL pointant vers un plan de formation publié sur le
web.

Trois cas possibles :

- **Cas A — Fichier Markdown : plan de formation structuré** : le fichier décrit
  un plan de formation organisé en chapitres (par exemple via des titres de
  niveau 2 `##`). Dans ce cas, le QCM généré doit reprendre **exactement les
  mêmes chapitres**, dans le même ordre et avec les mêmes intitulés.
- **Cas B — Fichier Markdown : sujet libre** : le fichier décrit un sujet sans
  découpage en chapitres. Dans ce cas, l'agent doit lui-même définir **6
  chapitres** cohérents couvrant le sujet.
- **Cas C — URL d'un plan de formation en ligne** : l'entrée est une URL
  pointant vers une page web décrivant un plan de formation (catalogue
  d'organisme, page produit, syllabus, etc.). L'agent orchestrateur doit :
  1. Récupérer le contenu de la page (via un outil de fetch web).
  2. Identifier la liste des chapitres ou modules et leur contenu pédagogique.
  3. Traiter ensuite la suite **exactement comme dans le cas A** (mêmes
     chapitres, même ordre, mêmes intitulés que ceux extraits de la page).

Dans les trois cas, chaque chapitre doit contenir **exactement 20 questions**.

- Cas A et C : `nombre_de_chapitres × 20` questions (par exemple 6 chapitres =
  120 questions).
- Cas B : `6 × 20 = 120` questions.

### 2.2 Sortie

Un fichier YAML créé dans le répertoire `/public/`.

- **Nom du fichier** : `/public/<slug>.yaml`, où `<slug>` est un identifiant
  court, en minuscules, sans accents ni espaces (kebab-case), reflétant la
  thématique du QCM (ex. : `cybersecurite-iot`, `kotlin-avance`).
- **Contrainte d'unicité** : le fichier ne doit pas déjà exister dans
  `/public/`. Si un fichier portant ce nom existe, choisir un autre slug.
- **Schéma YAML** : strictement identique à celui de
  [public/securite.yaml](../public/securite.yaml). Voir section 4.

## 3. Stratégie d'exécution (multi-agents)

La génération de 120 questions en une seule passe dépasse généralement la
fenêtre de contexte d'un LLM. La tâche doit donc être découpée et distribuée à
des sous-agents GitHub Copilot.

### 3.0 Conception des agents (custom agents VS Code)

Les agents (orchestrateur, générateurs de questions, assembleur) doivent être
conçus comme des **custom agents** GitHub Copilot pour VS Code, en suivant
strictement la documentation officielle :

<https://code.visualstudio.com/docs/copilot/customization/custom-agents>

Concrètement, chaque agent est défini dans un fichier `*.agent.md` placé soit :

- dans le workspace, sous `.github/agents/<nom>.agent.md` (agents partagés avec
  l'équipe via le dépôt) ;
- ou dans le profil utilisateur (agents personnels), via la commande **Chat: New
  Agent File…** de la palette de commandes.

Chaque fichier `*.agent.md` doit comporter :

- **Une en-tête YAML (frontmatter)** déclarant au minimum :
  - `description` : à quoi sert l'agent et quand l'invoquer ;
  - `tools` : la liste blanche des outils autorisés (lecture/écriture de
    fichiers, fetch web pour le cas C, exécution de sous-agents, etc.) ;
  - éventuellement `model` si un modèle spécifique est requis.
- **Un corps Markdown** contenant le prompt système de l'agent : son rôle, ses
  responsabilités, le format d'entrée attendu, le format de sortie produit, et
  les règles à respecter (par ex. schéma YAML, indentation, numérotation des
  questions).

Les agents sont invoqués depuis le chat avec `@<nom-agent>`. L'orchestrateur
appelle les sous-agents générateurs et l'assembleur via les mécanismes décrits
dans la documentation ci-dessus (délégation à un sous-agent).

Livrables attendus pour cette partie :

- `.github/agents/qcm-orchestrator.agent.md`
- `.github/agents/qcm-question-generator.agent.md`
- `.github/agents/qcm-assembler.agent.md`

Chaque fichier doit être autonome et lisible : un développeur qui ouvre le
fichier doit comprendre le rôle de l'agent sans avoir à lire les autres.

### 3.1 Agent orchestrateur

L'agent principal est responsable de :

1. Lire et analyser le fichier Markdown d'entrée.
2. Déterminer si l'on est dans le cas A ou B.
3. Établir la liste définitive des chapitres (id, titre).
4. Choisir le `<slug>` du fichier de sortie et vérifier qu'il n'existe pas déjà
   dans `/public/`.
5. Lancer les sous-agents de génération de questions (voir 3.2).
6. Lancer le sous-agent d'assemblage final (voir 3.3).
7. Écrire le fichier YAML final dans `/public/<slug>.yaml`.

### 3.2 Sous-agents générateurs de questions

- Chaque sous-agent prend en charge **5 questions d'un chapitre donné**.
- Pour un chapitre de 20 questions, **4 sous-agents** sont donc nécessaires
  (questions 1–5, 6–10, 11–15, 16–20).
- Chaque sous-agent reçoit en entrée :
  - le sujet global du QCM,
  - le titre et l'id du chapitre,
  - la plage de numéros de questions à produire (ex. `q6` à `q10`),
  - le format YAML attendu pour un bloc de questions.
- Chaque sous-agent retourne un fragment YAML contenant uniquement ses 5
  questions, prêt à être inséré sous la clé `questions` du chapitre.

### 3.3 Sous-agent d'assemblage

Un sous-agent dédié reconstruit le fichier YAML final en réassemblant tous les
fragments produits.

Points d'attention :

- **Indentation YAML** : respecter strictement l'indentation du schéma de
  référence (2 espaces, pas de tabulations).
- **Numérotation continue des questions** : les `id` de questions doivent être
  `q1`, `q2`, …, `q20` au sein de chaque chapitre, sans doublon ni trou.
- **Ordre des chapitres** : conserver l'ordre défini par l'orchestrateur.
- **Validation** : le fichier final doit être un YAML valide et parsable.

## 4. Schéma YAML de sortie

Le fichier de sortie doit suivre exactement la structure de
[public/securite.yaml](../public/securite.yaml) :

```yaml
title: <Titre lisible du QCM>
chapters:
  - id: <slug-chapitre>
    title: <Titre du chapitre>
    questions:
      - id: q1
        question: "<Énoncé de la question ?>"
        answers: [<Réponse A>, <Réponse B>, <Réponse C>, <Réponse D>]
        correct: <index 0..3 de la bonne réponse>
        explanation: "<Justification courte de la bonne réponse>"
      # ... q2 à q20
  # ... autres chapitres
```

Règles :

- `title` (racine) : titre global du QCM, en français.
- `chapters[].id` : slug court en kebab-case, unique au sein du fichier.
- `chapters[].title` : intitulé lisible du chapitre.
- `questions[].id` : `q1` à `q20`, dans l'ordre.
- `answers` : **exactement 4 réponses**, formulées de manière claire et non
  ambiguë.
- `correct` : entier entre 0 et 3, index (base 0) de la bonne réponse dans
  `answers`.
- `explanation` : explication concise (1 à 2 phrases) justifiant la bonne
  réponse.

## 5. Exigences de qualité pédagogique

- Les questions doivent être **claires, sans ambiguïté**, et porter sur le
  contenu réel du chapitre.
- Varier les niveaux de difficulté (définitions, compréhension, application).
- Éviter les questions à formulation négative ("Laquelle n'est pas…") sauf si
  utile et sans ambiguïté.
- Les 4 réponses doivent être **plausibles** ; éviter les distracteurs
  manifestement absurdes.
- **Une seule bonne réponse** par question.
- Pas de doublons de questions au sein d'un chapitre ni entre chapitres.
- Rédiger en français correct, avec ponctuation et accents.

## 6. Critères d'acceptation

Le livrable est accepté si et seulement si :

1. Le fichier `/public/<slug>.yaml` existe et est nouveau.
2. Il est conforme au schéma de la section 4.
3. Il contient le bon nombre de chapitres (selon cas A ou B) et 20 questions par
   chapitre.
4. Il est un YAML valide (parsable sans erreur).
5. Toutes les valeurs `correct` sont des entiers entre 0 et 3 cohérents avec le
   tableau `answers`.
6. Les exigences de qualité pédagogique de la section 5 sont respectées.
