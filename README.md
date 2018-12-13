***

⚠️ Ces instructions concernent le _boilerplate_ seulement et devraient être retirées une fois le nouveau projet démarré.

1. Cloner ce projet
2. Supprimer le repository Git (`rm -rf .git`)
3. Exécuter le script de renommage de projet (`scripts/project-renamer.sh your-project-name`)
4. Supprimer le script de renommage de projet
5. Créer un nouveau repository Git (`git init`)
6. Supprimer cette section du fichier `README.md`
7. Créer le premier commit du repository (`git commit -a -m "Initial commit"`)

***

# Boilerplate code for React

| Section                                                  | Description                                                            |
| -------------------------------------------------------- | ---------------------------------------------------------------------- |
| [🎯 Objectifs et contexte](#-objectifs-et-contexte)      | DoDs, KPIs, objectifs et contexte de développement initial             |
| [🚧 Dépendances](#-dépendances)                          | Les dépendances techniques du projet et comment les installer          |
| [🏎 Démarrage](#-démarrage)                              | Les détails de mise en route du projet                                 |
| [⌨️ Commandes](#️-commandes)                             | Les commandes utiles au développement et à la mise en production       |
| [🏗 Code et architecture](#-code-et-architecture)        | Les différents modules et particularités du _codebase_                 |
| [💅 Styles](#-styles)                                    | La façon d’utiliser les _styled components_ et les modules CSS        |
| [📐 SVGs](#-svgs)                                        | La façon d’importer et utiliser des SVGs                              |
| [🔭 Améliorations possibles](#-améliorations-possibles)  | Les différents _refactors_ possibles ainsi que des pistes potentielles |
| [🚑 Résolution de problèmes](#-résolutions-de-problèmes) | Les problèmes récurrents et les solutions reliées                      |
| [🚀 Déploiement](#-déploiement)                          | Les détails du setup de déploiement dans les différents environnements |

## 🎯 Objectifs et contexte

…

### Browser support

| Browser | OS  | Constraint |
| ------- | --- | ---------- |
| …       | …   | …          |

## 🚧 Dépendances

L’usage de [nvm](https://github.com/creationix/nvm) est recommandé pour gérer les différentes versions de Node.js.

- node.js (`^10.11.0`)
- npm (`^6.4.1`)

## 🏎 Démarrage

### Installation des dépendances

```sh
npm install
```

### Variables d’environnement

Les variables d’environnement sont chargées automatiquement par [dotenv](https://github.com/motdotla/dotenv).

#### Ajout de variables d’environnement dans `.env`

Pour définir des variables d’environnement permanentes, créez un fichier `.env` à la racine du projet:

```sh
REACT_APP_SECRET_CODE=abcdef
```

> Note: You must create custom environment variables beginning with `REACT_APP_`. Any other variables except `NODE_ENV` will be ignored to avoid [accidentally exposing a private key on the machine that could have the same name](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527). Changing any environment variables will require you to restart the development server if it is running.

Les fichiers `.env` **doivent** être ajoutés au contrôle de source (à l’exception de `.env*.local`).

#### Quels autres fichiers `.env` peut-on utiliser?

- `.env`: Defaut.
- `.env.local`: Overrides locales. **Ce fichier est chargé dans tous les enviornnements sauf test.**
- `.env.development`, `.env.test`, `.env.production`: Variables spécifiques aux environnements.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Overrides locales spécifiques aux environnements.

Les fichiers sur la gauche ont préséance:

- `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
- `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note: `.env.local` est manquant)

Vous référer à la [documentation dotenv](https://github.com/motdotla/dotenv) pour plus de détails.

## ⌨️ Commandes

### Développement

Pour lancer le serveur de développement, rouler:

```sh
npm start
```

### Production

Pour créer un build de production, rouler:

```sh
npm run build
```

### Linting, testing & type checking

Pour linter, tester and type-checker l’application, rouler le script `./scripts/ci-check.sh`.

## 🏗 Code et architecture

### Code splitting

Le code splitting est fourni gratuitement! Pour avoir du code splitting au niveau des routes, exportez vos components de routes de la manière suivante:

```tsx
// Utils
import Loadable from 'react-boilerplate/lib/loadable';

export default Loadable(() => import('./about'));
```

Et voilà! Tout le code du module `./about` module sera bundlé individuellement et chargé à la demande!

Et ce n’est pas limité aux routes, n’importe quel component peut être splitté de la même manière. Une bonne idée quand le component fait usage d’une grosse librairie!

[Pour en savoir plus](https://reactjs.org/docs/code-splitting.html#code-splitting).

### Éléments `<head>` dynamiques

[React Helmet](https://github.com/nfl/react-helmet) est disponible pour charger dynamiquement le contenu de l’élément `<head>`, comme des liens meta ou le titre de la page.

```tsx
import React from 'react';
import {Helmet} from 'react-helmet';

export const AboutPage = () => (
  <>
    <Helmet>
      <title>About Page</title>
      <link rel="canonical" href="https://mysite.com/about" />
    </Helmet>

    <div>Lorem ipsum ...</div>
  </>
);

export default AboutPage;
```

## 💅 Styles

### CSS in JS

[Emotion](https://github.com/emotion-js/emotion) est la façon dont nous stylons nos components. Il est très facile de créer des Styled Components:

```tsx
import React from 'react';
import styled from 'react-emotion/macro';

const Container = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  font-size: 12px;
  color: hotpink;
`;

export const SomeComponent = () => (
  <Container>
    <Button>Some Button</Button>
  </Container>
);

export default SomeComponent;
```

[Emotion](https://github.com/emotion-js/emotion) a un API vraiment intéressant. N’hésitez pas à aller [le découvrir](https://emotion.sh/docs/introduction)!

### Modules CSS

Peut-être que vous voulez ou préférez les modules CSS. C’est possible! Vous n’avez qu’à importer un fichier CSS avec l’extension `.module.css`.

```css
/* some-component.module.css */
.container {
  padding: 20px;
}

.button {
  font-size: 12px;
  color: hotpink;
}
```

```tsx
// some-component.tsx
import React from 'react';
import styles from './some-component.module.css';

export const SomeComponent = () => (
  <div className={styles.container}>
    <button className={styles.button}>Some Button</button>
  </div>
);

export default SomeComponent;
```

### Pourquoi pas les deux?

Vous voulez peut-être combiner les deux méthodes. Les modules CSS vous semblent plus naturels, mais vous aimez le côté dynamique des _styled components_:

```css
/* button.module.css */
.button {
  border-radius: 4px;
  font-size: 18px;
}
```

```tsx
// button.tsx
import React from 'react';
import styled from 'react-emotion/macro';
import styles from './button.module.css';

interface Props {
  color: 'cornflowerblue' | 'hotpink';
}

const BaseButton = ({children}) => (
  <button className={styles.button}>{children}</button>
);

export const Button = styled(BaseButton)`
  color: ${(props: Props) => props.color};
`;

export default Button;
```

## 📐 SVGs

### SVG avec style dynamique

Si vous devez appliquer un style dynamique à un SVG, importez-le comme un component React.

```tsx
// Vendor
import React from 'react';
import styled from 'react-emotion/macro';

// Components
import {ReactComponent as Logo} from './logo.svg';

const RedLogo = styled(Logo)`
  fill: red;
`;

const SomeComponent = () => (
  <div>
    <RedLogo />
  </div>
);
```

### SVG sans style dynamique

Si vous voulez simplement afficher un SVG dans un tag `<img>`, importez-le comme n’importe quelle autre image.

```tsx
// Vendor
import React from 'react';

// Assets
import logo from './logo.svg';

const SomeComponent = () => (
  <div>
    <img src={logo} alt="Logo" />
  </div>
);
```

## 🔭 Améliorations possibles

| Description | Priorité | Complexité | Pistes |
| ----------- | -------- | ---------- | ------ |
| …           | …        | …          | …      |

## 🚑 Résolution de problèmes

…

## 🚀 Déploiement

…

### Versions et branches

Chaque version pointe sur un tag Git effectué sur une branche de release (correspondant à l’environnement qu’on déploie).

La version du codebase est gérée avec [incr](https://github.com/jcouture/incr).

### Buildpack Heroku

Pour déployer des applications issues de ce boilerplate, utilisez le [buildpack create-react-app](https://github.com/mars/create-react-app-buildpack).
