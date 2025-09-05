# Roadmap & TODO – Projet QCM en ligne

## 1. Setup du projet

- [x] Initialiser projet avec **Vite + React + TypeScript**
- [x] Installer **TailwindCSS**
- [ ] Installer **Zustand** (state management)
- [ ] Installer **React Router**
- [ ] Installer **Recharts** (graphique résultats)
- [ ] Installer **yaml** et **seedrandom** (utils parsing + aléatoire)
- [ ] Configurer **ESLint + Prettier**
- [ ] Setup **GitHub Actions** pour déploiement GitHub Pages

---

## 2. Base du projet

- [ ] Créer structure dossiers (`components`, `pages`, `store`, `utils`)
- [ ] Ajouter `Layout` global avec `NotificationBanner`
- [ ] Implémenter `AppRouter` avec routes `/config`, `/qcm`, `/results`

---

## 3. UI de configuration (Formateur)

- [ ] Créer `ConfigPage`
- [ ] Ajouter `FileLoader` (catalogue + URL)
- [ ] Ajouter `ConfigForm` (chapitre, seed, nombre de questions)
- [ ] Bouton **Continuer** qui redirige vers lien/QR code
- [ ] Composant `QRCodeGenerator` + bouton **Copier le lien**

---

## 4. Passage du QCM (Stagiaire)

- [ ] Créer `QcmPage`
- [ ] `QuestionCard` avec : `QuestionText`, `AnswerList` (`AnswerButton`),
      `ProgressBar`
- [ ] Navigation linéaire forcée (pas de retour en arrière)
- [ ] Store Zustand : progression, réponses choisies

---

## 5. Résultats

- [ ] Créer `ResultsPage`
- [ ] Composant `ScoreDisplay`
- [ ] `ChartContainer` + `PieChartResults` + `BarChartResults`
- [ ] Bouton **Voir explications**

---

## 6. Explications

- [ ] Créer `ExplanationTable`
- [ ] Créer `ExplanationRow`
- [ ] Bouton **Refaire le QCM**

---

## 7. Utils

- [ ] `parsing.ts` (JSON.parse + yaml.parse + gestion erreurs détaillées)
- [ ] `random.ts` (tirage reproductible avec seedrandom)
- [ ] `validation.ts` (valider structure QCM)
- [ ] `format.ts` (helpers d’affichage)

---

## 8. Finitions

- [ ] Vérifier **responsive design** (mobile + desktop)
- [ ] Optimiser performance (taille bundle, lazy loading si besoin)
- [ ] Améliorer UX (messages d’erreur clairs, transitions, animations simples
      Tailwind)
