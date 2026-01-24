# Studio La Franqui

Landing page pour un studio de vacances en bord de mer à La Franqui, France.

## Aperçu

Site vitrine statique présentant un studio de 30m² avec vue mer, situé à 50m de la plage de La Franqui (Leucate, Aude). Le site est conçu pour attirer les voyageurs et les rediriger vers la réservation Airbnb.

## Stack technique

- **Framework** : Next.js 16 (export statique)
- **UI** : React 19
- **Styling** : Tailwind CSS v4
- **Langage** : TypeScript

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le serveur de développement démarre sur http://localhost:3001

## Build

```bash
npm run build
```

Génère un export statique dans le dossier `out/`.

## Structure du projet

```
├── app/
│   ├── page.tsx          # Page principale
│   ├── layout.tsx        # Layout avec métadonnées
│   └── globals.css       # Styles globaux Tailwind
├── components/
│   ├── Hero.tsx          # Section hero avec image de fond
│   ├── About.tsx         # Présentation du studio
│   ├── Gallery.tsx       # Galerie photos avec lightbox
│   ├── Amenities.tsx     # Équipements disponibles
│   ├── Location.tsx      # Localisation et carte
│   ├── Info.tsx          # Informations pratiques
│   └── Footer.tsx        # Pied de page
├── public/
│   └── images/           # Photos du studio
└── CLAUDE.md             # Instructions pour Claude Code
```

## Sections

| Ancre | Section |
|-------|---------|
| `#a-propos` | Présentation du studio |
| `#galerie` | Galerie photos |
| `#equipements` | Liste des équipements |
| `#localisation` | Carte et adresse |
| `#infos` | Informations pratiques |

## Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Animations au scroll (Intersection Observer)
- Galerie avec lightbox et navigation clavier
- Bouton de réservation Airbnb flottant
- Optimisé pour le SEO

## Licence

Projet privé.
