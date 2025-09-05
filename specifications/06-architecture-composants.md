# Architecture des composants React – Projet QCM en ligne

## Pages principales (`/pages`)

### ConfigPage
- `FileLoader`
- `ConfigForm`
- `StartButton`

### QcmPage
- `QuestionCard`
  - `QuestionText`
  - `AnswerList`
    - `AnswerButton`
  - `ProgressBar`
  - (optionnel) `Timer`

### ResultsPage
- `ScoreDisplay`
- `ChartContainer`
  - `PieChartResults`
  - `BarChartResults`
- `ExplanationTable`
  - `ExplanationRow`
- `RetryButton`

---

## Composants UI réutilisables (`/components`)
- `Button`
- `Input`
- `Select`
- `Card`
- `ProgressBar`
- `ChartContainer`
- `Modal`
- `NotificationBanner`

---

## Routing & Layout
- `AppRouter` : centralise `/config`, `/qcm`, `/results`
- `Layout` : enveloppe global avec `NotificationBanner`

---

## Gestion d’état (Zustand, global pour tout)
- `configSlice` (URL, chapitre, nb questions, seed)
- `qcmSlice` (questions, progression, réponses)
- `resultsSlice` (score, explications, graphiques)
- `uiSlice` (erreurs, modals, notifications)

---

## Utils (`/utils`)
- `parsing.ts`
- `random.ts`
- `validation.ts`
- `format.ts`

---
