# Boilerplate code for React

## Code splitting

Code splitting comes out of the box! To code split on a Route-based level, you simply has to export your route components as such:

```tsx
// Utils
import Loadable from 'react-boilerplate/lib/loadable';

export default Loadable(() => import('./about'));
```

And voilà! All the code from the `./about` module will be bundled has it’s own chunk and only loaded when needed.

This is not limited to routes, any components can be code splitted in the same fashion if needed. It could be a good idea to code split a component that make use of a heavy library, like [Mapbox GL](https://www.mapbox.com/mapbox-gl-js).

[Learn more](https://reactjs.org/docs/code-splitting.html#code-splitting).

## Styling

### CSS in JS

[Emotion](https://github.com/emotion-js/emotion) is the prefered way to style components. With it, you can create styled components:

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

[Emotion](https://github.com/emotion-js/emotion) has a really great API with many more interesting features and I encourage you to [go explore it](https://emotion.sh/docs/introduction)!

### CSS Modules

You might also want and/or prefer to use CSS modules. Well, you can! You just need to import a css file with a `.module.css` extension.

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

### Why not both?

You might want to use both ways. CSS modules might feel more natural to you, while styled components are great to handle dynamic styles:

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
  color: 'cornflowerblue' | 'hotpink'
}

const BaseButton = ({children}) => (
  <button className={styles.button}>
    {children}
  </button>
);

export const Button = styled(BaseButton)`
  color: ${(props: Props) => props.color}
`;

export default Button;
```

## SVGs

### SVG with dynamic styling

If you need to dynamically style an SVG, you can import it as a React component.

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

### SVG without dynamic styling

If you just want to display an SVG with an `<img>` tag, just import it like any other types of images.

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

### Dynamic `<head>` elements

[React Helmet](https://github.com/nfl/react-helmet) is available to change dynamically the content of the `<head>` element, like the title of the page or some other meta tags.

```tsx
import React from 'react';
import {Helmet} from 'react-helmet';

export const AboutPage = () => (
  <>
    <Helmet>
      <title>About Page</title>
      <link rel="canonical" href="https://mysite.com/about" />
    </Helmet>

    <div>
      Lorem ipsum ...
    </div>
  </>
);

export default AboutPage;
```

## Environment variables

### Adding development environment variables in `.env`

To define permanent environment variables, create a file called `.env` in the root of your project:

```
REACT_APP_SECRET_CODE=abcdef
```

> Note: You must create custom environment variables beginning with `REACT_APP_`. Any other variables except `NODE_ENV` will be ignored to avoid [accidentally exposing a private key on the machine that could have the same name](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527). Changing any environment variables will require you to restart the development server if it is running.

`.env` files **should be** checked into source control (with the exclusion of `.env*.local`).

#### What other `.env` files can be used?
- `.env`: Default.
- `.env.local`: Local overrides. **This file is loaded for all environments except test.**
- `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

- `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
- `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

These variables will act as the defaults if the machine does not explicitly set them.<br>
Please refer to the [dotenv documentation](https://github.com/motdotla/dotenv) for more details.

## Running

Environment variable will be loaded automatically by [dotenv](https://github.com/motdotla/dotenv) like described in the [environment variables](#environment-variables) section.

### Development

To start the development server, simply run:

* `npm start`

### Production

To create a production build, simply run:

* `npm run build`

## Linting, testing & type checking

To lint, test and type check your app you can run `./scripts/ci-check.sh`.

## Heroku buildpack

To successfully deploy applications from this boilerplate code on Heroku, you must use the [create-react-app buildpack](https://github.com/mars/create-react-app-buildpack).
