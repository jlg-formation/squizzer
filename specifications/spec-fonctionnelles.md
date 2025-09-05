# Spécifications Fonctionnelles – Projet QCM en ligne

## 1. Chargement du QCM

- L’utilisateur (formateur) peut charger un fichier QCM depuis :
  - Une **URL libre** (champ texte)
  - Un **catalogue prédéfini** (liste proposée par l’application)
  - Un **fichier local** importé depuis son ordinateur
- Formats supportés : **JSON** et **YAML**
- En cas de fichier invalide → afficher un **message d’erreur détaillé**
  indiquant la source de l’erreur.

---

## 2. Configuration du QCM

Avant de lancer une session, le formateur doit obligatoirement renseigner :

- Le **nombre de questions** à tirer
- Le **chapitre/section** concerné
- Une **seed** pour garantir la reproductibilité des tirages

---

## 3. Déroulement du QCM

- Le QCM se déroule en **mode linéaire forcé** :
  - Une question → réponse → question suivante
  - **Pas de retour en arrière** possible
- Navigation simple et fluide pour éviter les distractions

---

## 4. Feedback & Résultats

- Les bonnes réponses et explications sont affichées **uniquement à la fin du
  lot de questions**  
  (par défaut 10 questions, configurable).
- Présentation des résultats :
  - **Score final** (ex. 7/10)
  - **Graphique visuel** (camembert ou barres)
  - **Explications détaillées** pour chaque question
- Les résultats sont **uniquement affichés** :  
  → **pas d’export ni de sauvegarde automatique**.

---

## 5. Contraintes d’affichage & accessibilité

- Le site doit être **responsive** (ordinateur + smartphone)
- Utilisable **offline** après premier chargement
- Compatible avec les principaux navigateurs modernes :  
  Chrome, Firefox, Edge, Safari
- Optimisé pour être **léger et rapide à charger**

---

## 6. Progression / Reprise

- Si un stagiaire quitte le QCM en cours (fermeture de l’onglet ou navigateur)
  :  
  → **aucune sauvegarde n’est effectuée**  
  → Le QCM doit être **recommencé depuis zéro**

---
