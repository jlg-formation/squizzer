# React moderne : développer une application Web progressive

## Formation complète – 3 jours – Développeurs Front-End débutants

### Introduction

Cette formation permet d’apprendre React progressivement, sans surcharge
technique initiale. Les participants commencent avec JavaScript, Node.js, npm,
Vite et React, puis enrichissent une application fil rouge avec formulaires, API
REST, TanStack Query, backend Node.js, avant d’évoluer vers Bun, Elysia, Next.js
et React Server Components.

---

# Objectifs pédagogiques

- Comprendre le modèle mental de React : `UI = f(state)`
- Créer des composants React réutilisables
- Utiliser JSX, props, state, événements et rendu conditionnel
- Gérer des formulaires React contrôlés
- Récupérer des données depuis une API REST
- Gérer les données serveur avec TanStack Query
- Développer un backend REST simple avec Node.js
- Migrer progressivement vers Bun/Elysia
- Comprendre Next.js, App Router et React Server Components
- Faire évoluer une application React vers une architecture moderne

---

# Public concerné

- Développeurs front-end débutants
- Intégrateurs web souhaitant apprendre React
- Développeurs JavaScript souhaitant évoluer vers React moderne

---

# Prérequis

- Connaissances HTML/CSS
- Bases JavaScript
- Notions simples de programmation web
- Aucun prérequis TypeScript, Next.js ou backend avancé

---

# Méthodes et moyens pédagogiques

- Alternance théorie, démonstrations et exercices
- Application fil rouge développée sur 3 jours
- Utilisation des commandes officielles npm
- Pas de génération manuelle des templates
- Développement progressif par petites étapes
- Explication systématique des choix techniques

---

# Modalités d’évaluation

- Exercices pratiques à chaque chapitre
- Questions de validation
- Réalisation progressive de l’application fil rouge
- Vérification finale par démonstration fonctionnelle

---

# Application fil rouge : TaskFlow

TaskFlow est une application de gestion de tâches progressive.

Elle permet d’introduire naturellement :

- composants
- props
- state
- formulaires
- listes
- filtres
- API REST
- CRUD
- TanStack Query
- backend Node.js
- migration Bun/Elysia
- migration Next.js
- React Server Components

---

# Programme de la formation

## Jour 1 — React fondamental avec JavaScript, Node.js, npm et Vite

---

## Chapitre 1 — Démarrer avec React et Vite

### Objectif pédagogique

Créer une première application React simple en utilisant les commandes
officielles npm/Vite.

### Contenu

- Rôle de React dans une application front-end
- Principe des composants
- Notion de SPA
- Utilisation de Node.js et npm
- Création du projet avec `npm create vite@latest`
- Découverte de la structure générée
- JSX
- Premiers composants
- Props et composition
- Modèle mental : `UI = f(state)`

### Travaux pratiques

Créer le projet TaskFlow avec Vite + React en JavaScript, puis afficher une
première interface composée de plusieurs composants.

---

## Chapitre 2 — Construire une interface interactive React

### Objectif pédagogique

Comprendre les fonctionnalités essentielles de React à travers une interface
dynamique.

### Contenu

- `useState`
- Événements React
- Différence variable classique / state React
- Re-render
- Rendu conditionnel
- Rendu de listes avec `map`
- Rôle des clés `key`
- Formulaires contrôlés
- `onChange`, `onSubmit`, `value`
- Validation simple
- Découpage en composants

### Travaux pratiques

Ajouter à TaskFlow :

- liste de tâches
- ajout de tâche
- suppression
- statut terminée / non terminée
- filtre
- compteur
- formulaire contrôlé avec validation

---

## Jour 2 — React connecté à un backend REST

---

## Chapitre 3 — Créer un backend REST avec Node.js

### Objectif pédagogique

Comprendre le dialogue entre un frontend React et une API REST.

### Contenu

- Rôle d’un backend
- Principe d’une API REST
- Méthodes HTTP : GET, POST, PUT, DELETE
- Création d’un backend avec Node.js et npm
- Initialisation avec `npm init`
- Installation d’Express avec `npm install`
- Création d’un serveur minimal
- Gestion JSON
- CORS
- Stockage mémoire simple
- Tests d’API

### Travaux pratiques

Créer l’API TaskFlow :

- `GET /tasks`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

---

## Chapitre 4 — Consommer l’API avec React et TanStack Query

### Objectif pédagogique

Passer d’un frontend local à une application connectée à un backend.

### Contenu

- `fetch`
- `async/await`
- `useEffect`
- États loading / error / success
- Limites de `useEffect` pour les données serveur
- Installation de TanStack Query avec npm
- `QueryClient`
- `useQuery`
- `useMutation`
- Invalidation du cache
- Synchronisation UI/backend
- Formulaires connectés au backend
- CRUD complet

### Travaux pratiques

Connecter TaskFlow au backend :

- récupérer les tâches
- créer une tâche
- modifier une tâche
- supprimer une tâche
- gérer loading et erreurs
- remplacer progressivement `useEffect` par TanStack Query

---

## Jour 3 — Moderniser l’architecture React

---

## Chapitre 5 — Migrer progressivement vers Bun et Elysia

### Objectif pédagogique

Comprendre l’intérêt de Bun et Elysia après avoir expérimenté Node.js et
Express.

### Contenu

- Pourquoi commencer avec Node.js/npm
- Limites et alternatives modernes
- Présentation de Bun
- Différences Node.js / Bun
- Présentation d’Elysia
- Différences Express / Elysia
- Commandes officielles Bun
- Migration progressive de l’API REST
- Gestion des routes REST
- CORS
- Validation simple
- Conservation du contrat API

### Travaux pratiques

Migrer le backend TaskFlow d’Express vers Bun/Elysia sans modifier le frontend.

---

## Chapitre 6 — Migrer vers Next.js et React Server Components

### Objectif pédagogique

Comprendre comment React évolue vers une architecture hybride moderne.

### Contenu

- Limites d’une SPA React classique
- Présentation de Next.js
- App Router
- Structure `/app`
- Pages et layouts
- Navigation
- Routes dynamiques
- Client Components
- Server Components
- Directive `"use client"`
- Récupération de données côté serveur
- Streaming et Suspense
- Server Actions
- Formulaires serveur
- Articulation avec une API REST séparée
- Bonnes pratiques d’architecture moderne

### Travaux pratiques

Migrer progressivement TaskFlow vers Next.js :

- créer une version Next.js de l’interface
- ajouter une page liste
- ajouter une page détail
- utiliser des Server Components
- conserver certains composants interactifs côté client
- expérimenter Suspense et Server Actions

---

# Résultat attendu

À la fin des 3 jours, les participants auront construit :

- une application React en JavaScript
- une interface interactive avec formulaires
- une API REST Node.js
- une application connectée avec TanStack Query
- une API modernisée avec Bun/Elysia
- une version Next.js avec React Server Components

---

# Technologies utilisées

- JavaScript
- Node.js
- npm
- Vite
- React
- Express
- TanStack Query
- Bun
- Elysia
- Next.js
- React Server Components
