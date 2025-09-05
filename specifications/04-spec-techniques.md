# Spécifications Techniques – Projet QCM en ligne

## 1. Structure du projet

Organisation du code source en dossiers modulaires :

```
src/
 ├─ components/   # Composants UI réutilisables (Button, Card, Input, etc.)
 ├─ pages/        # Pages principales (Config, QCM, Results)
 ├─ store/        # Store Zustand découpé en slices
 ├─ utils/        # Fonctions utilitaires (parsing, random, etc.)
 ├─ assets/       # Images, icônes, etc.
```

---

## 2. Gestion de l’état

- Utilisation de **Zustand** avec un **store global** découpé en **slices** :
  - `configSlice` : paramètres choisis par le formateur (URL, chapitre, seed,
    nombre de questions)
  - `qcmSlice` : données du QCM chargé + progression en cours
  - `resultsSlice` : score final, explications, données pour graphiques

---

## 3. Routing

- Utilisation de **React Router** avec 3 routes principales :
  - `/` → Lance le userflow du formateur
  - `/load-qcm` → Ecran qui laisse le formateur charger un QCM
  - `/config` → configuration du QCM (chapitre, seed, nombre de questions)
  - `/qrcode` → Ecran qui montre le QRCode et le lien à copier pour que les
    stagiaires puissent démarrer le QCM

  - `/start` → Lance le userflow du stagiaire. L'URL doit prendre des query
    params (/start?qcm-file=xxx&nbr-questions=10&seed=coucou)
  - `/qcm` → Déroulé des questions et memorisation des réponses du stagiaire
  - `/results` → affichage des résultats (score + graphique + explications)
  - `/explications` → affichage des explications (mauvaise reponses seulement)

---

## 4. Parsing des fichiers QCM

- **JSON** : parsé avec `JSON.parse`
- **YAML** : parsé avec la librairie officielle `yaml` (npm)
- En cas d’erreur → affichage d’un **message détaillé** indiquant la nature de
  l’erreur

---

## 5. Gestion de l’aléatoire

- Utilisation de **`seedrandom`** pour garantir un tirage reproductible des
  questions
- Seed configurable par le formateur

---

## 6. UI et TailwindCSS

- Utilisation de **TailwindCSS** pour le styling
- Création de composants UI réutilisables pour cohérence visuelle :
  - `Button`
  - `Card`
  - `Input`
  - `ProgressBar`
  - `ChartContainer`

---

## 7. Visualisation des résultats

- Utilisation de **Recharts** pour l’affichage graphique des résultats
- Types de graphiques envisagés :
  - **Camembert** (répartition bonnes/mauvaises réponses)
  - **Histogramme/barres** (réponses par question)

---

## 8. Offline / PWA

- Pas de mode offline prévu
- ❌ Pas de PWA / Service Worker
- Application **full online**

---

## 9. Qualité du code

- Mise en place de **Prettier + ESLint** avec règles par défaut
- Vérification automatique au commit via scripts Bun

---

## 10. Déploiement

- **Build** avec Vite
- **Déploiement** sur **GitHub Pages**
- Automatisation via **GitHub Actions** (CI/CD) :
  - Lancement des tests et du linting
  - Build de l’application
  - Publication sur Pages

---
