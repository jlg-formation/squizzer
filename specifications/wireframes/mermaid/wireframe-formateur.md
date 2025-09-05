# Wireframe – Parcours Formateur (QCM en ligne)

## Description

Le parcours formateur permet de :

1. Choisir un QCM (catalogue prédéfini ou URL JSON/YAML)
2. Configurer le QCM (chapitre, nombre de questions, seed)
3. Générer un lien et un QRCode à partager aux stagiaires

---

## Diagramme (Mermaid)

```mermaid
flowchart TD
    A[Page d'accueil Formateur] --> B[Choisir un QCM]
    B --> B1[Catalogue prédéfini]
    B --> B2[Entrer une URL JSON/YAML]

    B --> C[Écran Configuration]
    C --> C1[Sélection Chapitre liste déroulante]
    C --> C2[Nombre de questions input +/-]
    C --> C3[Seed champ texte]

    C --> D[Continuer]
    D --> E[Écran Génération Lien/QR]
    E --> E1[Afficher QRCode]
    E --> E2[Lien avec paramètres visibles]
    E --> E3[Bouton Copier le lien]
```

---

## Éléments clés des écrans

### Écran d’accueil formateur

- Bouton : **Configurer ton QCM**

### Choix du QCM

- Option 1 : **Catalogue prédéfini**
- Option 2 : **Entrer une URL JSON/YAML**

### Configuration

- **Chapitre** : liste déroulante (remplie avec les chapitres du fichier choisi)
- **Nombre de questions** : input numérique avec boutons +/-
- **Seed** : champ texte (placeholder “Ex: 1234”)
- Bouton : **Continuer**

### Génération du lien

- QRCode généré automatiquement
- Lien avec paramètres (ex: `...?url=...&questions=10&seed=1234`)
- Bouton **Copier le lien**
