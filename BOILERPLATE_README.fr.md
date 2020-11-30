# react-boilerplate

| Section                                                 | Description                                                        |
| ------------------------------------------------------- | ------------------------------------------------------------------ |
| [🎯 Objectifs et contexte](#-objectifs-et-contexte)     | Introduction et contexte du projet                                 |
| [🚧 Dépendances](#-dépendances)                         | Dépendances techniques et comment les installer                    |
| [🏎 Départ rapide](#-départ-rapide)                      | Détails sur comment démarrer rapidement le développement du projet |
| [🏗 Code et architecture](#-code-et-architecture)        | Détails sur les composantes techniques de l’application            |
| [🔭 Améliorations possibles](#-améliorations-possibles) | Améliorations, idées et _refactors_ potentiels                     |
| [🚑 Problèmes et solutions](#-problèmes-et-solutions)   | Problèmes récurrents et solutions éprouvées                        |
| [🚀 Déploiement](#-deploiement)                         | Détails pour le déploiement dans différents environnements         |

## 🎯 Objectifs et contexte

…

### Support de navigateurs

| Navigateur | OS  | Contrainte |
| ---------- | --- | ---------- |
| …          | …   | …          |

## 🚧 Dépendances

- Node.js
- NPM

Les versions canoniques des dépendances sont spécifiées dans les fichiers `Dockerfile` et `.tool-versions`.

## 🏎 Départ rapide

### Variables d’environnement

Toutes les variables d’environnement requises sont documentées dans [`.env.dev`](./.env.dev).

Ces variables doivent être présentes dans l’environnement lorsque des commandes `npm` ou `make` sont exécutées. Plusieurs moyens sont à votre disposition pour ça, mais l’utilisation de [`nv`](https://github.com/jcouture/nv) est recommandée puisqu’elle fonctionne _out of the box_ avec les fichiers `.env.*`.

### Mise en place initiale

1. Créer `.env.development.local` à partir des valeurs vides de [`.env.development`](./.env.development)
2. Installer les avec `make dependencies`

### Lancer l’application en mode _développement_

Pour démarrer un serveur de développement :

```bash
$ npm run start
```

### Bâtir l’application pour la production

Pour créer une _build_ prête pour la production :

```bash
$ npm run build --prod
```

### Tests

La suite de tests peut être exécutée à l’aide de la commande suivante et ne nécessite pas de variables d’environnements puisqu’elle ne devrait pas créer d’effets de bord (eg. pas de requêtes _networking_, pas de lecture de cookies, etc.)

```bash
$ make test
```

### Couverture des tests

La suite de tests peut aussi être exécutée en calculant le niveau de couverture.

```bash
$ make check-code-coverage
```

### _Linting_ et _formatting_

Plusieurs outils de _linting_ et de _formatting_ peuvent être exécutés pour s’assurer du respect des bonnes pratiques de code :

- `make lint-scripts` s’assure que le code TypeScript respecte nos bonnes pratiques
- `make lint-styles` s’assure que le code CSS respecte nos bonnes pratiques
- `make check-format` valide que le code est bien formatté
- `make format` formatte les fichiers en utilisant Prettier

### Intégration continue

Pour s’assurer que le projet et son code sont en bon état, les outils de _linting_ et de tests peuvent être exécutés en une seule commande :

```bash
$ ./scripts/ci-check.sh
```

## 🏗 Code et architecture

…

## 🔭 Améliorations possibles

| Description | Priorité | Complexité | Idées |
| ----------- | -------- | ---------- | ----- |
| …           | …        | …          | …     |

## 🚑 Problèmes et solutions

…

## 🚀 Deploiement

### Versions et branches

Chaque déploiement est effectué à partir d’un tag Git. La version du _codebase_ est gérée avec [`incr`](https://github.com/jcouture/incr).

### _Container_

Un _container_ Docker exposant un serveur Node.js peut être créé avec `make build`, testé avec `docker-compose up application` et poussé dans un registre avec `make push`.
